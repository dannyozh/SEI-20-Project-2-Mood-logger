var React = require('react');
var Navbar = require('../navbar');

class Dashboardcreate extends React.Component {
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
					<link rel="stylesheet" href="home.css" />
				</head>
				<body class="body">
					<Navbar />
					<div class="container text-center text-white">
						<h2>Hello {this.props.username}, how're you feeling today?</h2>
						<br />
						<br />

						<form action="/dashboardsave" method="POST">
							<div class="form-group">
								<div class="row">
									<div class="col-md-6">
										<input class="form-control" type="date" format="dd/mm/yyyy" placeholder="Date" name="date" />
										<br />

										<label>
											<input type="radio" name="illness" value="ok" /> I'm ok.
										</label>
										<br />
										<label>
											<input type="radio" name="illness" value="stressed" /> I'm stressed.
										</label>
										<br />
										<label>
											<input type="radio" name="illness" value="anxious" /> I'm anxious.
										</label>
										<br />
										<label>
											<input type="radio" name="illness" value="depressed" /> I'm depressed.
										</label>
										<br />
										<br />

										<div class="container">
											<p>Rate your mood, on a scale from 1 to 10:</p>
											<input type="range" name="points" min="0" max="10" />
										</div>
									</div>
									<div class="col-md-6">
										<h3>Pen your current thoughts below:</h3>
										<textarea class="form-control" id="exampleFormControlTextarea1" rows="8" name="log" />
									</div>
								</div>
								<hr />
								<input type="submit" class="col-md-3" />
							</div>
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Dashboardcreate;
