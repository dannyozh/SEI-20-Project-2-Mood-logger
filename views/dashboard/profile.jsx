var React = require('react');

class Profile extends React.Component {
	render() {
		let allcardsArr = this.props.result;
		let allcards = allcardsArr.map((card) => {
			return (
				<span>
					<p>
						{card.date}. {card.mood_level} .{card.illness_input} .{card.log}
					</p>
				</span>
			);
		});
		console.log('allcards', allcards);

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
						<h3>Your profile</h3>
						<p>{allcards}</p>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profile;
