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

				<button id="sticky">sticky</button>

				<nav>
					<ul>
						<li><a class="action" href="#" data-id="test">Test</a></li>
						<li><a href="#" data-id="settings">Settings</a></li>
						<li><a href="#" data-id="rooms">Rooms</a></li>
						<li><a href="#" data-id="users">Users</a></li>
					</ul>
				</nav>
			</header>

			<section class="main">
				<aside class="overlay"></aside>
				<article class="names">
					<aside class="content"></aside>
				</article>

				<article class="chat">
					<aside class="content"></aside>
				</article>

				<article class="msg">
					<aside class="content">
						<input type="text" autofocus="true"/>
					</aside>
				</article>
			</section>

			<section id="users" class="pane">
				<aside class="title">Users</aside>
				<aside class="content"></aside>
			</section>

			<section id="rooms" class="pane">
				<aside class="title">Rooms</aside>
				<aside class="content">
					<ul>
						<li class="active"><a href="#">Room 1</a></li>
						<li><a  href="#" title="#123 - Room 2 has a long name">Room 2 has a long name</a></li>
					</ul>
				</aside>
			</section>

			<section id="settings" class="pane">
				<aside class="title">Settings</aside>
				<aside class="content"></aside>
			</section>
		</div>

	</body>
</html>