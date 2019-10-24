var React = require('react');

class Landingpage extends React.Component {
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
					<link rel="stylesheet" href="home.css" />
				</head>
				<body class="body">
					<div class="container text-center text-white">
						<h1>Welcome to Moodlooger</h1>
						<hr />
						<img
							src="https://cdn.shopify.com/s/files/1/0969/9128/products/Claude_Monet_-_Poppy_Field_at_Argenteuil_3a201822-b9d1-48a0-ae14-c28b01fcfbb5_large.jpg?v=1510384836"
							alt="dandelions"
						/>
						<br />
						<br />
						<div class="row">
							<div class="col-sm-12 text-center">
								<form method="POST" action="/register">
									<button>New User</button>
								</form>
								<form mothod="POST" action="/login">
									<button>Existing User</button>
								</form>
							</div>
						</div>
					</div>
				</body>
			</html>
		);
	}
}

module.exports = Landingpage;
