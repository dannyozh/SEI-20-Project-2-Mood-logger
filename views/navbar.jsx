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
					<link rel="stylesheet" href="/navbar.css" type="text/css" />
				</head>
				<body>
					<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
						<a class="navbar-link" href={'/profile/' + this.props.username}>
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
								<li class="nav-item">
									<a class="nav-link" href="/dashboardnew">
										New Log
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/logout">
										Logout
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/seecurrentcard">
										Today's Log
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" data-toggle="modal" data-target="#exampleModal">
										Quote Of The Day
									</a>
								</li>
							</ul>
							<ul class="navbar-nav ml-auto nav-flex-icons">
								<li class="nav-item avatar">
									<a class="nav-link p-0" href="#">
										<img
											src="https://image.flaticon.com/icons/svg/149/149071.svg"
											class="rounded-circle z-depth-0"
											alt="avatar image"
											height="35"
										/>
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-body">
									<script type="text/javascript" src="https://www.brainyquote.com/link/quotebr.js" />
								</div>
							</div>
						</div>
					</div>
					<script
						src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
						integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
						crossorigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
						integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
						crossorigin="anonymous"
					/>
					<script
						src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
						integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
						crossorigin="anonymous"
					/>
				</body>
			</html>
		);
	}
}

module.exports = Navbar;
