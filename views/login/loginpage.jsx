var React = require('react');
const Navbar = require('../navbar.jsx');

class Loginpage extends React.Component {
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
					<div class="container text-center text-white">
						<h1>Welcome to Moodlogger</h1>
						<hr />
						<h3>Login Below:</h3>
						<br />
						<form method="POST" action="/loginsuccess">
							<p> Username:</p>
							<input name="username" required />
							<br />
							<br />
							<p> Password:</p>
							<input name="password" required />
							<hr />
							<input type="submit" />
							<br />
							<br />
						</form>
						<form action="/register">
							<input type="submit" value="New here? Click to register" />
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Loginpage;
