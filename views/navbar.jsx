var React = require('react');

class Navbar extends React.Component {
	render() {
		return (
			<html>
				<head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
				</head>
				<body>
					<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
						<a class="navbar-brand" href="#">
							Moodlogger
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent-555"
							aria-controls="navbarSupportedContent-555"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon" />
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent-555">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item active">
									<a class="nav-link" href="#">
										Home
										<span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/dashboardnew">
										New Log
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										Logout
									</a>
								</li>
							</ul>
							<ul class="navbar-nav ml-auto nav-flex-icons">
								<li class="nav-item avatar">
									<a class="nav-link p-0" href="#">
										<img
											src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
											class="rounded-circle z-depth-0"
											alt="avatar image"
											height="35"
										/>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</body>
			</html>
		);
	}
}

module.exports = Navbar;
