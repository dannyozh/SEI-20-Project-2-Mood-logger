console.log('chart js up and running');
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: alldates,
		datasets: [
			{
				label: 'Mood Level over the past 5 days:',
				data: allmoods,
				backgroundColor: [
					'rgb(255, 99, 132, 0.4)',
					'rgb(54, 162, 235, 0.4)',
					'rgb(255, 206, 86, 0.4)',
					'rgb(75, 192, 192, 0.4)',
					'rgb(153, 102, 255, 0.4)',
					'rgb(255, 159, 64, 0.4)'
				],
				borderColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)' ],
				borderWidth: 2
			}
		]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: true,
			text: 'Your past mood logs at a glance:',
			fontColor: 'black',
			fontSize: 20
		},
		elements: {
			line: {
				tension: 0 // disables bezier curves
			}
		},
		scales: {
			yAxes: [
				{
					ticks: {
						fontColor: '#000000',
						stepSize: 1,
						beginAtZero: true
					}
				}
			],
			xAxes: [
				{
					ticks: {
						fontColor: '#000000',
						stepSize: 1,
						beginAtZero: true
					}
				}
			]
		}
	}
});
