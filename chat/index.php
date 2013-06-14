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

		<div id="right_menu">
			<ul>
				<li class="users" data-rc-action="sample_action1">User Item</li>
				<li class="settings" data-rc-action="sample_action2">Settings Item</li>
				<li class="rooms" data-rc-action="sample_action2">Rooms Item</li>
				<li class="users rooms" data-rc-action="sample_action4">Rooms & Users Item</li>
			</ul>
		</div>

		<div id="wrapper">
			<header class="clear">

				<ul id="tabs">
					<li data-chat="r1" class="tab active"><a href="#">#1 - Room 1</a><span class="close_tab">&times;</span></li>
				</ul>

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

			<section id="users" class="pane rcp">
				<aside class="title">Users</aside>
				<aside class="content active" data-chat="r1">
					<ul>
						<li class="op voice"><a href="#" title="Tel Smith" class="rc">OP</a></li>
						<li class="hop"><a href="#" title="Aaron Linkous" class="rc">Half Op</a></li>
						<li class="voice"><a href="#" title="Aaron Linkous" class="rc">Normal</a></li>
						<li class="listen"><a href="#" title="Aaron Linkous" class="rc">listen</a></li>
						<li class="afk"><a href="#" title="Aaron Linkous" class="rc">afk</a></li>
					</ul>
				</aside>
			</section>

			<section id="rooms" class="pane">
				<aside class="title">Rooms</aside>
				<aside class="content">
					<ul>
						<li class="active"><a id="r1" href="#" title="#1 - Room 1">Room 1</a></li>
						<li><a id="r2" href="#" title="#2 - Room 2 has a long name">Room 2 has a long name</a></li>
						<li><a id="r3" href="#" title="#3 - Room 3">Room 3</a></li>
					</ul>
				</aside>
			</section>

			<section id="settings" class="pane rcp">
				<aside class="title">Settings</aside>
				<aside class="content">
					<ul>
						<li><label class="rc"><input type="checkbox" checked class="custom"><span></span> Checkbox</label></li>
						<li><label class="rc"><input type="checkbox" class="custom"><span></span> Checkbox</label></li>
						<li class="sub">You like?</li>
						<li><label class="rc"><input type="radio" name="like" checked class="custom"><span></span> Yes</label></li>
						<li><label class="rc"><input type="radio" name="like" class="custom"><span></span> No</label></li>
					</ul>
				</aside>
			</section>
		</div>

	</body>
</html>