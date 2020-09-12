var sampleTime = 0.001; ///< sample time in sec
var xdata; ///< x-axis labels array: time stamps
var ydata; ///< y-axis data array: random value
var xdata2; ///< x-axis labels array: time stamps
var ydata2; ///< y-axis data array: random value
var lastTimeStamp; ///< most recent time stamp 
var chartContext;  ///< chart context i.e. object that "owns" chart
var chart; ///< Chart.js object
var time;

var okres_sygnalu = 0.2;
var faza = 0;
var samples = 500;

var tempData=[];
var humData=[];
var presData=[];


window.onload = function() {

	sampleTime = $("#sampleTime").val();
	
	
	xdata = [...Array(samples).keys()]; 
	ydata = [...new Array(xdata.length)]; 
	chartContext = document.getElementById('chart').getContext('2d');
	chart = new Chart(chartContext, {
		
		type: 'line',

		
		data: {
			labels: ydata,
			datasets: [{
				fill: false,
				label: 'temperatura',
				backgroundColor: 'rgb(0, 255, 255)',
				borderColor: 'rgb(0, 255, 255)',
				data: tempData,
				lineTension: 0
			},
			{
				fill: false,
				label: 'ciśnienie',
				backgroundColor: 'rgb(0, 0, 255)',
				borderColor: 'rgb(0, 255, 255)',
				data: presData,
				lineTension: 0
			},
			{
				fill: false,
				label: 'wilgotność',
				backgroundColor: 'rgb(255, 0, 255)',
				borderColor: 'rgb(0, 255, 255)',
				data: humData,
				lineTension: 0
			}]
		},

		
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'C'
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: 	true,
						labelString: 'numer probki'
					}
				}]
			}
		}
	});

	$("#buttonStart").click(function(){
		startCharting(this.textContent);
	});
};
function updateData()
{
	$.get("api/measure.php",function(data)
		{
			var maxSaples=($("#maxSamp").val()!="")?$("#maxSamp").val():100;
			var obj = JSON.parse(data);
			tempData.push(obj.temperature);
			humData.push(obj.humidity);
			presData.push(obj.pressure);
			
			if(presData.length>maxSaples)
				presData.shift();
			if(tempData.length>maxSaples)
				tempData.shift();
			if(humData.length>maxSaples)
				humData.shift();
		}
	)
	.fail(function() {
		alert( "error" );
	});
	chart.update();
}
function startCharting(start)
{
	sampleTime=($("#sampleTime").val()!="")?$("#sampleTime").val(): 500;
	var index;
	if(start=="Start"){
		$("#buttonStart").html("Stop");
		index =setInterval(
			function(){
				updateData();
			},
			sampleTime
		);

	}
	else
	{
		clearInterval();
		$("#buttonStart").html("Start");
	}
}
