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
				<nav>
					<ul>
						<li><a id="tool_settings" data-pane="settings" href="#">Settings</a></li>
						<li><a id="tool_rooms" data-pane="rooms" href="#">Rooms</a></li>
						<li><a id="tool_users" data-pane="users" href="#">Users</a></li>
					</ul>
				</nav>
			</header>

			<section class="main active" data-chat="r1">
				<aside class="overlay"></aside>
				<article class="names">
					<aside class="content"></aside>
				</article>

				<article class="chat">
					<aside class="content">r1</aside>
				</article>

				<article class="msg">
					<aside class="content">
						<input type="text" autofocus="true"/>
					</aside>
				</article>
			</section>

			<section id="users" class="pane">
				<aside class="title">Users</aside>
				<aside class="content active" data-chat="r1">
					<ul>
						<li class="op voice"><a href="#" title="Tel Smith">OP</a></li>
						<li class="hop"><a href="#" title="Aaron Linkous">Half Op</a></li>
						<li class="voice"><a href="#" title="Aaron Linkous">Normal</a></li>
						<li class="listen"><a href="#" title="Aaron Linkous">listen</a></li>
						<li class="afk"><a href="#" title="Aaron Linkous">afk</a></li>
					</ul>
				</aside>
			</section>

			<section id="rooms" class="pane">
				<aside class="title">Rooms</aside>
				<aside class="content">
					<ul>
						<li class="active"><a id="r1" href="#" title="#1 - Room 1">Room 1</a></li>
						<li><a id="r2" href="#" title="#2 - Room 2 has a long name">Room 2 has a long name</a></li>
					</ul>
				</aside>
			</section>

			<section id="settings" class="pane">
				<aside class="title">Settings</aside>
				<aside class="content">
					<ul>
						<li><label><input type="checkbox" class="custom"><span></span> Checkbox</label></li>
						<li><label><input type="checkbox" class="custom"><span></span> Checkbox</label></li>

						<li><label><input type="radio" class="custom"><span></span> Radio Button</label></li>
						<li><label><input type="radio" class="custom"><span></span> Radio Button</label></li>
					</ul>
				</aside>
			</section>
		</div>

	</body>
</html>