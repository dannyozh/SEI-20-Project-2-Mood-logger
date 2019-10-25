var React = require('react');
var Navbar = require('../navbar');

class Profile extends React.Component {
	render() {
		let moods = this.props.moods;
		let jData = JSON.stringify(moods);
		// console.log('jdata is', jData);
		let allcardsArr = this.props.result;
		let lastCard = allcardsArr[0];

		// let dates = this.props.dates;
		let gettingAllDates = this.props.dates;
		let ddata = JSON.stringify(gettingAllDates);
		// console.log('ddata is', ddata);
		// console.log('this is lastcard', lastCard);
		return (
			<html>
				<head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link rel="stylesheet" href="/profile.css" type="text/css" />
					<link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js" />
				</head>
				<Navbar username={this.props.username} />
				<body class="body">
					<div class="container text-center">
						<h1 class="header">{this.props.username}'s profile</h1>
						<hr />
						<br />
						<div class="container float-left col-md-6">
							<canvas id="myChart" />
							<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" />
							<script
								dangerouslySetInnerHTML={{
									__html: `var allmoods = ${jData};
									var alldates = ${ddata}`
								}}
							/>
							<script src="/profilechart.js" />
						</div>
						<div class="row float-right col-md-3">
							<div class="card">
								<img class="card-img-top" src="https://im.indiatimes.in/content/2017/Feb/pexels-photo_1487234191.jpg" alt="Card image cap" />
								<div class="card-body">
									<h5 class="card-title">Your last log, on {lastCard.date}</h5>
									<p class="card-text">
										<b>Mood Level</b>: {lastCard.mood_level}
									</p>
									<p class="card-text">
										<b>How you were feeling</b>: {lastCard.illness_input}
									</p>
									<p class="card-text">
										<b>What you penned down</b>: {lastCard.log}
									</p>
								</div>
							</div>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profile;
