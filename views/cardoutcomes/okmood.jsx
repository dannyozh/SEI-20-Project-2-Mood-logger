var React = require('react');
var Navbar = require('../navbar');

class Okmood extends React.Component {
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
									<img class="card-img" src="http://pickupyourdreams.com/wp-content/uploads/2015/04/Sunlight.jpg" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">Mood Score: {this.props.mood}</h4>
									<p class="card-text">
										Know where to find the sunrise and sunset times and note how the sky looks at those times, at least once. ~{' '}
										<b>Marilyn vos Savant</b>
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img
										class="card-img"
										src="https://www.happybrainscience.com/wp-content/uploads/2016/09/Stress-For-Success-768x402.jpg"
										alt="Card image cap"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">How are you feeling: {this.props.feeling}</h4>
									<p class="card-text">
										Fear keeps us focused on the past or worried about the future. If we can acknowledge our fear, we can realize that right
										now we are okay. Right now, today, we are still alive, and our bodies are working marvelously. Our eyes can still see
										the beautiful sky. Our ears can still hear the voices of our loved ones. <b>Thich Nhat Hanh</b>
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
						<form action={'/profile/' + this.props.username} method="POST" class="text-center">
							<input type="submit" value="To Dashboard!" />
						</form>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Okmood;
