console.log('chart js up and running');
console.log('allmoods is', allmoods);
console.log('alldates is', alldates);
let today = new Date();
for (let i = 0; i < 5; i++) {}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: alldates,
		datasets: [
			{
				label: 'Your mood level over the past 5 days:',
				data: allmoods,
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 206, 86)',
					'rgb(75, 192, 192)',
					'rgb(153, 102, 255)',
					'rgb(255, 159, 64)'
				],
				borderColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)' ],
				borderWidth: 2
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
