var React = require('react');

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
				</head>
				<body class="bg-primary">
					<div class="container text-center text-white">
						<h1>Moodlogger</h1>
						<h3>How're you feeling today?</h3>
						<br />
						<br />

						<form action="/dashboardsave" method="POST">
							<div class="form-group row">
								<label for="example-date-input" class="col-2 col-form-label">
									Date
								</label>
								<div class="col-10">
									<input class="form-control" type="date" value="2011-08-19" id="example-date-input" name="date" />
								</div>
							</div>
							<label>
								<input type="radio" name="illness" value="ok" />I'm ok.
							</label>
							<br />
							<label>
								<input type="radio" name="illness" value="stressed" />I'm stressed.
							</label>
							<br />
							<label>
								<input type="radio" name="illness" value="anxious" />I'm anxious.
							</label>
							<br />
							<label>
								<input type="radio" name="illness" value="depressed" />I'm depressed.
							</label>
							<br />
							<h3>Slide to your mood level below, from ':(' to ':)'</h3>
							<input type="range" name="points" min="0" max="10" />
							<br />
							<br />
							<h3>Pen your current thoughts below:</h3>
							<div class="form-group">
								<textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="log" />
							</div>
							<input type="submit" />
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Dashboardcreate;
