var React = require('react');
var Navbar = require('../navbar');

class Lowmood extends React.Component {
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
					<link href="//fonts.googleapis.com/css?family=Lato:400,300,100,700,900" rel="stylesheet" type="text/css" />
					<link rel="stylesheet" href="/home.css" type="text/css" />
				</head>
				<Navbar />
				<body class="body">
					<div class="container">
						<h1 class="text-white text-center">Moodlogger</h1>
						<hr />
						<h3 class="text-white text-center"> Dear {this.props.username}, this is a summary of today's log.</h3>
						<div class="card-group vgr-cards">
							<div class="card">
								<div class="card-img-body">
									<img
										class="card-img"
										src="https://si.wsj.net/public/resources/images/RV-AW711_Resili_P_20171109125935.jpg"
										alt="Card image cap"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">Mood Score: {this.props.mood}</h4>
									<p class="card-text">
										If someone decides they're not going to be happy, it's not your problem. You don't have to spend your time and energy
										trying to cheer up someone who has already decided to stay in a bad mood. Believe it or not, you can actually hurt
										people by playing into their self-pity. <b>Joyce Meyer</b>
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img
										class="card-img"
										src="http://www.depressiontreatmenthelpline.com/wp-content/uploads/2017/09/Key-stages-of-recovery-from-depression.jpg"
										alt="Card image cap"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">How are you feeling: {this.props.feeling}</h4>
									<p class="card-text">
										“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of
										the future.” – <b>Deepak Chopra</b>
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img class="card-img" src="https://mamabee.com/wp-content/uploads/2019/07/1-12-735x400.jpg" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">Today's log:</h4>
									<p class="card-text">{this.props.log}</p>
								</div>
							</div>
						</div>
						<br />
						<a class="btn btn-primary" href={'/profile/' + this.props.username} role="button">
							To Dashboard
						</a>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Lowmood;
