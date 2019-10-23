var React = require('react');

class Dashboardlogging extends React.Component {
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
						<hr />
						<h3>Pen your current thoughts below:</h3>

						<form action="/logsaved" method="POST">
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

module.exports = Dashboardlogging;
