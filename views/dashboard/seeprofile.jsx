var React = require('react');

class Seeprofile extends React.Component {
	render() {
		console.log('in profile loading page');
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
						<h3>Login succesful. Click below to go to profile.</h3>
						<form method="POST" action={'/profile/' + this.props.username}>
							<input type="submit" value="Profile" />
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Seeprofile;
