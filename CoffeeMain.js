

$(function() {
	var $orders = $('#orders');
	var $name= $('#name');
	var $drink= $('#drink');
	var htmlString='';
	$.ajax({
				url: 'orders.json',
				type: 'GET',
				dataType:'json',
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

	$('#add-order').on('click', function(){
			var newOrder={
				"name": $name.val,
				"drink":$drink.val
			}

			$.ajax({
 				type :'post',
 				url: 'https://api.jsonbin.io/v3/b/6328b6555c146d63caa10824',
 				data: order,
 				success: function(newOrder){
 					$orders.append('<li> name: '+ newOrder.name +', drink : '+ newOrder.drink + '</li>' );
 				},
 				error: function(){
 					alert('error saving order');
 				}

			});

	});

});
