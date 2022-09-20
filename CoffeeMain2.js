$("#displayOrder").click(function(){
    $.ajax({
				url:'https://github.com/sunitaChand/myJson/blob/master/students.json',
				type: "GET",
				dataType:'json',
				timeout:2500,
				success:function(orders)
				{
					alert('hi');
					console.log("success fetching orders ", orders);
				},

		        error: function(){
			       alert('error loading orders');
		        },
				complete: function(){
					alert('request completed');
				}
			});

});



