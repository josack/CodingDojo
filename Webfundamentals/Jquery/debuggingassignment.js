<html>
<head>
	<title>jQuery</title>
	<link rel="stylesheet" type="text/css" href="debugging_jquery.css">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="text/javascript">

		$(document).ready(function()});
			$('p, h3, li').hover(function(){
				$(this).css('color', 'white');
			}, function(){
				$(this).css('color', 'black');
			});
			$('a').click(function(){
				alert("we don't actually serve pizza...");
			});
			$('img').click(function(){
				$(this).slideUp();
			});
			$('h5').click(function(){
				$('img').slideDown();
			});
			$('button').click(function(){
				var result = $('input:checked').value()
				alert("Thank you for your input, we like " + result + " too!");
			});
		});

	</script>
</head>
<body>
	<div id="wrapper">
		<div id="top headers">
			<h1>The Codingdojo Pizzeria!</h1>
			<h2>The best slice in the valley!</h2>
		</div>
		<div id="survey">
			Question of the month:  What is your favorite pizza topping?
			<input type="radio" name="topping" value="pepperoni">Pepperoni
			<input type="radio" name="topping" value="bacon">Bacon
			<input type="radio" name="topping" value="pineapple">Pineapple
			<button>Tell us!</button>
		</div>

		<div id="left_content">
			<div class="box">
				<h3>About us!</h3>
				<p>
					We know that writing code works up an appetite, that's why Codingdojo is proud to announce that we are opening a
					pizza kitchen inside our mountain view location!  Head chef Michael "spumoni" Choi has lots of delicious family recipes
					to share with our customers! Whether you like flat crust or deep dish so deep you can't cut through it,
					the Codingdojo pizzeria has something you and all of your friends can agree on.  Using only the
					freshest ingredients the Bay area has to offer, the Codingdojo pie will be sure to debug your hunger!
				</p>
			</div>
			<div class="box">
				<h3>Thin Crust Pizza</h3>
				<ul>
					<li>Small: $10.00</li>
					<li>Medium: $15.00</li>
					<li>Large: $20.00</li>
					<li>Dojo size: $30.00 (feeds 10 ninjas)</li>
					<li>Toppings: $2.00 per small, $2.50 per medium, $2.75 per large, $3.00 per Dojo</li>
				</ul>
				<h3>Deep dish, 'Dojo style' Pizza</h3>
				<ul>
					<li>Small: $12.00</li>
					<li>Medium: $17.00</li>
					<li>Large: $24.00</li>
					<li>Dojo size: $34.00 (feeds 10 ninjas)</li>
					<li>Toppings: $2.00 per small, $2.50 per medium, $2.75 per large, $3.00 per Dojo</li>
				</ul>
				<a href="#">Click here to order!</a>
			</div>

		</div>  <!--end of left content -->
		<div id="right_content">
			<div class="">
				<img src="pizza.jpg" alt="pizza">
				<h5>Our pizza runs on all browsers!</h5>
			</div>
			<div class="">
				<img src="logo.png" alt="logo">
				<h5>Made from the freshest ingredients!</h5>
			</div>
		</div>  <!--end of right content -->
	</div> <!--end of wrapper -->
</body>
</html>
