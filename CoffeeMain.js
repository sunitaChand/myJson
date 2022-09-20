

$(function() {
	var $orders = $('#orders');
	var $name= $('#name');
	var $drink= $('#drink');
	var htmlString='';
	$.ajax({
				url: 'https://api.jsonbin.io/v3/b/6328b6555c146d63caa10824',
				type: 'GET',
				dataType:'json',
		                xhrFields: {
                                RequestHeader:{"X-MASTER-KEY":'$2b$10$H8bJy6qh5us/FSC6tmzDYuzTjmZoxF05JALdl3qLO7BOQNwjsmjPO',
					       "X-ACCESS-KEY": '$2b$10$O0ujD4BIGHJaCimGjwvlu.kggtZZ4q..WP1oKFaXVcGWUAkAmq7eq' 
                          }} ,

				complete:function(orders)
				{
					alert('hi');
					console.log(orders);
					//console.log(orders[i]);
					$.each(orders, function(i,order){
					 $orders.append('<li>name : '+ order.name + ', drink: '+ order.drink + '</li>');
					});
				},

		error: function(){
			alert('error loading orders');
		}
	});

	$('#add-order').on('click', function(e){
		       e.preventDefault();
			var newOrder={
				"name": $name.val,
				"drink":$drink.val
			}
                        alert(newOrder.name + "    "+ newOrder.drink);
			$.ajax({
 				type :'post',
 				url: 'https://api.jsonbin.io/v3/b/6328b6555c146d63caa10824',
 				data: newOrder,
 				success: function(newOrder){
 					$orders.append('<li> name: '+ newOrder.name +', drink : '+ newOrder.drink + '</li>' );
 				},
 				error: function(){
 					alert('error saving order');
 				}

			});

	});

});
