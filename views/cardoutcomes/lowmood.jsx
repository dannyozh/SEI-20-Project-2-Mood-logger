var React = require('react');
var Navbar = require('../navbar');

class Lowmood extends React.Component {
	render() {
		var happyQuotes = [
			'Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it. ~ Kevyn Aucoin',
			'The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature. ~ Marcus Aurelius',
			"Through a long and painful process, i've learned that happiness is an inside job - not based on anything or anyone in the outer material world. I've become a different and better person not perfect, but still a work in progress. ~ Alana Stewart",
			"I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn't arrived yet. I have just one day, today, and I'm going to be happy in it. ~ Groucho Marx",
			"I had lost my way for some time, so I need to do things that I am happy with. It's not about being the number one heroine or money. It's about doing roles that I enjoy. My biggest ambition is happiness. ~ Sonam Kapoor",
			"It gets better: there's a light at the end of the tunnel. It may take one day, it may take ten years. But one day, you will find happiness if you manifest it. Put that energy out, and it'll come back. ~ Lil Xan",
			'Personal health is related to self-control and to the worship of life in all its natural beauty - self-control bringing with it happiness, renewed youth, and long life. ~ Maria Montessori'
		];
		var sadQuotes = [
			'Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future. ~ Deepak Chopra',
			'P.S. You’re not going to die. Here’s the white-hot truth: if you go bankrupt, you’ll still be okay. If you lose the gig, the lover, the house, you’ll still be okay. If you sing off-key, get beat by the competition, have your heart shattered, get fired…it’s not going to kill you. Ask anyone who’s been through it. ~ Danielle LaPorte',
			'Anxiety was born in the very same moment as mankind. And since we will never be able to master it, we will have to learn to live with it—just as we have learned to live with storms. ~ Paulo Coelho',
			'You have dug your soul out of the dark, you have fought to be here; do not go back to what buried you. ~ Bianca Sparacino',
			'Every tomorrow has two handles. We can take hold of it with the handle of anxiety or the handle of faith. ~ Henry Ward Beecher',
			'You may not control all the events that happen to you, but you can decide not to be reduced by them ~ Maya Angelou',
			'Some days, 24 hours is too much to stay put in, so I take the day hour by hour, moment by moment. I break the task, the challenge, the fear into small, bite-size pieces. I can handle a piece of fear, depression, anger, pain, sadness, loneliness, illness. I actually put my hands up to my face, one next to each eye, like blinders on a horse. ~ Regina Brett',
			'If my world were to cave in tomorrow, I would look back on all the pleasures, excitements and worthwhilenesses I have been lucky enough to have had. Not the sadness, not my miscarriages or my father leaving home, but the joy of everything else. It will have been enough. ~ Audrey Hepburn',
			'Live by this credo: have a little laugh at life and look around you for happiness instead of sadness. Laughter has always brought me out of unhappy situations. ~ Red Skelton',
			'To me, sadness and humor are not disrelated and humor is the best tool I have had against the sadness in my life. ~ Mike Mills'
		];

		var resilienceQuotes = [
			'Whatever we are waiting for - peace of mind, contentment, grace, the inner awareness of simple abundance - it will surely come to us, but only when we are ready to receive it with an open and grateful heart. ~ Sarah Ban Breathnach',
			"You do indeed have a past, but not now! And, yes, you have a future, but not now! You can consume your now with thoughts of 'then' and 'maybe,' but that will keep you from the inner peace you could experience. ~ Wayne Dyer",
			"We must learn how to live in the space of inner peace in our everyday lives. This takes consistent, conscious effort because I know so many black women are hurting and sad, and we don't easily express our heartache or show our wounds. ~ Susan L. Taylor",
			"I am thankful the most important key in history was invented. It's not the key to your house, your car, your boat, your safety deposit box, your bike lock or your private community. It's the key to order, sanity, and peace of mind. The key is 'Delete.' ~ Elayne Boosler",
			'No one is perfect... absolutely no one. Like precious stones, we have a few flaws, but why focus on that? Focus on what you like about yourself, and that will bring you happiness and peace. ~ Richard Simmons'
		];
		var randomNumber = Math.floor(Math.random() * happyQuotes.length);

		let findSadQuote = sadQuotes[randomNumber];
		let findHappyQuote = happyQuotes[randomNumber];
		let findResilienceQuote = resilienceQuotes[randomNumber];
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
					<link rel="stylesheet" href="/summary.css" type="text/css" />
				</head>
				<Navbar />
				<body class="body">
					<div class="container text-center">
						<h3 class="text-white text-center"> Dear {this.props.username}, this is a summary of today's log.</h3>
						<hr />
						<div class="card-group vgr-cards">
							<div class="card">
								<div class="card-img-body">
									<img class="card-img" src="https://source.unsplash.com/1600x900/?depressed,sad,lonely" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">Mood Score: {this.props.mood}</h4>
									<p class="card-text" id="insert-quote">
										{findSadQuote}
									</p>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img class="card-img" src="https://source.unsplash.com/1600x900/?anxiety" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">Feeling {this.props.feeling}</h4>
									<p class="card-text">{findResilienceQuote}</p>
								</div>
							</div>
							<div class="card">
								<div class="card-img-body">
									<img class="card-img" src="https://source.unsplash.com/1600x900/?writing" alt="Card image cap" />
								</div>
								<div class="card-body">
									<h4 class="card-title">Today's log:</h4>
									<p class="card-text">{this.props.log}</p>
								</div>
							</div>
						</div>
						<hr />
						<a class="btn btn-primary text-center" href={'/profile/' + this.props.username} role="button">
							To Dashboard
						</a>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Lowmood;
