var React = require('react');

class Rendercard extends React.Component {
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
					<link href="cardstyle.css" />
				</head>
				<body class="bg-primary">
					<div class="container">
						<h1 class="text-white text-center">Moodlogger</h1>
						<hr />
						<h3 class="text-white text-center"> Dear {this.props.username}, this is a summary of today's log.</h3>
						<div class="card-group vgr-cards">
							<div class="card">
								<div class="card-img-body">
									<img
										class="card-img"
										src="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80"
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
									<a href="#" class="btn btn-outline-primary">
										Primary
									</a>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img class="card-img" src="https://i.ytimg.com/vi/BgIJ45HKDpw/maxresdefault.jpg" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">How are you feeling: {this.props.feeling}</h4>
									<p class="card-text">
										“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of
										the future.” – <b>Deepak Chopra</b>
									</p>
									<a href="#" class="btn btn-outline-primary">
										Primary
									</a>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img
										class="card-img"
										src="https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-1.2.1&w=1000&q=80"
										alt="Card image cap"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">Today's log:</h4>
									<p class="card-text">{this.props.log}</p>
									<a href="#" class="btn btn-outline-primary">
										Primary
									</a>
								</div>
							</div>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Rendercard;
