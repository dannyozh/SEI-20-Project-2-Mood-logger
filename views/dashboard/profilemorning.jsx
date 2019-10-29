var React = require('react');
var Navbar = require('../navbar');

class Profilemorning extends React.Component {
	render() {
		let moods = this.props.moods;
		let jData = JSON.stringify(moods);
		// put mood in box
		let moodAggValue = this.props.aggregateMoods;
		let insightFunction = function(moodAggValue) {
			if (moodAggValue >= 0 && moodAggValue <= 3) {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p class="insight-text">
							Your mood seems to be on the low side these past days. To lift your spirits, try activities such as taking a long walk, listening to
							soothing music or watching an enjoyable film.
						</p>
					</div>
				);
			} else if (moodAggValue >= 4 && moodAggValue <= 7) {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p class="insight-text">
							It looks like you've been feeling just fine of late. Remember to get your daily dosage of exercise, and to incorporate spaces of
							mindfulness within your day.
						</p>
					</div>
				);
			} else if (moodAggValue >= 8) {
				return (
					<div class="boxed col-md-8" id="insight-form">
						<p class="insight-text">
							You're mental well-being seems to be in rude health. There will be days ahead on which you'll feel down or just ok, but hold on to
							this memory of positivity when the waters inevitably get choppy.
						</p>
					</div>
				);
			}
		};

		let allcardsArr = this.props.result;
		// console.log('this is allcards arr', allcardsArr);
		let allcards = allcardsArr.map((flow) => {
			return (
				<div class="card">
					<div class="row no-gutters" id="card-size">
						<div class="row col-md-3" id="calender">
							<p id="date">{flow.date}</p>
						</div>
						<div class="row col-md-8">
							<div class="card-body">
								<h4 class="card-title text-left">
									<b>Mood: </b>
									{flow.mood_level}
								</h4>
								<h6 class="card-text text-left">
									<b>Feelings: </b>
									{flow.illness_input}
								</h6>
								<p class="card-text text-left">
									<b>Log: </b>
									{flow.log}
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		});
		// console.log('this is allcards', allcards);

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
					<link rel="stylesheet" href="/profilemorning.css" type="text/css" />
					<link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js" />
					<link href="https://fonts.googleapis.com/css?family=Staatliches&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet" />
				</head>

				<body class="body">
					<Navbar username={this.props.username} />
					<div class="container" id="main-container">
						<div class="container text-center">
							<h1 class="header text-white">Good Morning, {this.props.username}!</h1>
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
							<div class="row float-right col-md-5" id="main-row">
								<span>{allcards}</span>
							</div>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profilemorning;
