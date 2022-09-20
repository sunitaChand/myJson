

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

	$('#add-order').on('click', function(e){
		       e.preventDefault();
			var newOrder={
				"name": $name.val,
				"drink":$drink.val
			}
                        alert(newOrder.name + "    "+ newOrder.drink);
			$.ajax({
 				type :'post',
 				url: 'orders.json',
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
