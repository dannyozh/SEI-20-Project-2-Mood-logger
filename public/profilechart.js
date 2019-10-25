console.log('chart js up and running');
console.log(allmoods);
let today = new Date();
for (let i = 0; i < 5; i++) {}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [ 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5' ],
		datasets: [
			{
				label: 'Your mood level over the past 5 days:',
				data: allmoods,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	},
	options: {
		// legend: {
		// 	display: false
		// },
		// tooltips: {
		// 	callbacks: {
		// 		label: function(tooltipItem) {
		// 			return tooltipItem.yLabel;
		// 		}
		// 	}
		// },
		elements: {
			line: {
				tension: 0 // disables bezier curves
			}
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	}
});
