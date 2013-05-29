<!DOCTYPE  HTML>
<html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="css/css.css" media="screen" />
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script src="js/blur.js"></script>
		<script src="js/misc.js"></script>
	</head>
	<body>

		<div id="wrapper">
			<header>
				<a href="#" data-id="users">Users</a>
				<a href="#" data-id="settings">Settings</a>
				<a href="#" data-id="rooms">Rooms</a>
			</header>

			<section id="main">
				<aside id="overlay"></aside>
				<article id="names">
					<aside class="content"></aside>
				</article>

				<article id="chat">
					<aside class="content"></aside>
				</article>

				<article id="msg">
					<aside class="content">
						<input type="text" autofocus="true"/>
					</aside>
				</article>
			</section>

			<section id="users" class="pane">
				<aside class="title">Users</aside>
				<aside class="content"></aside>
			</section>

			<section id="settings" class="pane">
				<aside class="title">Settings</aside>
				<aside class="content"></aside>
			</section>

			<section id="rooms" class="pane">
				<aside class="title">Rooms</aside>
				<aside class="content"></aside>
			</section>
		</div>

	</body>
</html>