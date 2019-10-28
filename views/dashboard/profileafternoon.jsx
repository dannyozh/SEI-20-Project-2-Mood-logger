var React = require('react');
var Navbar = require('../navbar');

class Profileafternoon extends React.Component {
	render() {
		let moods = this.props.moods;

		// parsing moods to show in chart
		let jData = JSON.stringify(moods);

		// running function to input insight into box
		let moodAggValue = this.props.aggregateMoods;
		console.log('mood aggregate is', moodAggValue);
		let insightFunction = function(moodAggValue) {
			if (moodAggValue >= 0 && moodAggValue <= 1.5) {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p>Your mood is low</p>
					</div>
				);
			} else if (moodAggValue > 1.5 && moodAggValue <= 3.5) {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p>Your mood is ok</p>
					</div>
				);
			} else {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p>You're feeling better. Great!!</p>
					</div>
				);
			}
		};

		// getting all card values
		let allcardsArr = this.props.result;
		let allcards = allcardsArr.map((flow) => {
			return (
				<div class="card">
					<div class="row no-gutters" id="card-size">
						<div class="col-md-4" id="calender">
							<p id="date">{flow.date}</p>
						</div>
						<div class="col-md-7">
							<div class="card-body">
								<h5 class="card-title">
									<b>Mood: </b>
									{flow.mood_level}
								</h5>
								<p class="card-text">
									<b>Feelings: </b>
									{flow.illness_input}
								</p>
								<p class="card-text">
									<b>Log: </b>
									{flow.log}
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		});

		// let dates = this.props.dates;
		let gettingAllDates = this.props.dates;
		let ddata = JSON.stringify(gettingAllDates);
		return (
			<html>
				<head>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link rel="stylesheet" href="/profileafternoon.css" type="text/css" />
					<link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js" />
					<link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet" />

					<script src="profile.js" />
				</head>
				<Navbar username={this.props.username} />
				<body class="body">
					<div class="container text-center">
						<h1 class="header text-white">Good Afternoon {this.props.username}!</h1>
						<hr />
						<br />
						<div class="row float-left col-md-7">
							<canvas id="myChart" />
							<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" />
							<script
								dangerouslySetInnerHTML={{
									__html: `var allmoods = ${jData};
									var alldates = ${ddata}`
								}}
							/>
							<script src="/profilechart.js" />
							<div class="container">
								<div class="row">
									<span class="dot">
										<p class="circle-text">{moodAggValue}</p>
									</span>
									{insightFunction(moodAggValue)}
								</div>
							</div>
						</div>
						<div class="row float-right col-md-4" id="main-row">
							<span>{allcards}</span>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profileafternoon;
