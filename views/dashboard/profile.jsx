var React = require('react');
var Navbar = require('../navbar');

class Profile extends React.Component {
	render() {
		let allcardsArr = this.props.result;
		let allcards = allcardsArr.map((card) => {
			return (
				<div class="row float-right col-md-3">
					<div class="card">
						<img class="card-img-top" src="https://im.indiatimes.in/content/2017/Feb/pexels-photo_1487234191.jpg" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">Date: {card.date}</h5>
							<p class="card-text">
								<b>Mood Level</b>: {card.mood_level}
							</p>
							<p class="card-text">
								<b>How you were feeling</b>: {card.illness_input}
							</p>
							<p class="card-text">
								<b>What you penned down</b>: {card.log}
							</p>
							<a href="#" class="btn btn-primary">
								See log again
							</a>
						</div>
					</div>
				</div>
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
					<link rel="stylesheet" href="profile.css" />
				</head>
				<Navbar />
				<body class="bg-info">
					<div class="container text-center">
						<h1 class="header">{this.props.username}'s profile</h1>
						<hr />
						<br />
						<p>{allcards}</p>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profile;
