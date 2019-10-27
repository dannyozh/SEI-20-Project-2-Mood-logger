var React = require('react');
var Navbar = require('../navbar');

class Profile extends React.Component {
	render() {
		let moods = this.props.moods;
		let jData = JSON.stringify(moods);
		// console.log('jdata is', jData);
		let allcardsArr = this.props.result;
		// console.log('this is allcards arr', allcardsArr);
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
				</head>
				<Navbar username={this.props.username} />
				<body class="body">
					<div class="container text-center">
						<h1 class="header">Good Afternoon {this.props.username}!</h1>
						<hr />
						<br />
						<div class="container float-left col-md-7">
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
						<div class="row float-right col-md-4" id="main-row">
							<span>{allcards}</span>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Profile;
