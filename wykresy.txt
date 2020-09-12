const sampleTimeSec = 0.1; 					///< sample time in sec
const sampleTimeMsec = 1000*sampleTimeSec;	///< sample time in msec
var maxSamplesNumber = 100;				///< maximum number of samples

var xtempdata; ///< x-axis labels array: time stamps
var ytempdata; ///< y-axis data array: random value

var xhumdata; ///< x-axis labels array: time stamps
var yhumdata; ///< y-axis data array: random value

var xpressdata; ///< x-axis labels array: time stamps
var ypressdata; ///< y-axis data array: random value

var lastTimeStamp; ///< most recent time stamp 

var tempChartContext;
var tempChart;

var humChartContext;
var humChart;

var pressChartContext;
var pressChart;

var timer; ///< request timer
const url = "http://192.168.0.20/chartdata.json";
serverFile = "chartdata.json";


function getUrl(ip, port){
	return "http://"+ ip + ":" + port + "/" + serverFile;
}


/**
* @brief Add new value to next data point.
* @param y New y-axis value 
*/
function addData(x,y,z){
    maxSamplesNumber = ($("#maxSamp").val()!="")?$("#maxSamp").val():100;
	if(ytempdata.length > maxSamplesNumber)
	{
		removeOldTempData(ytempdata.length - maxSamplesNumber+1,xtempdata.length - maxSamplesNumber+1);
		lastTimeStamp += sampleTimeSec;
		xtempdata.push(lastTimeStamp.toFixed(4));
	}
	ytempdata.push(x);
	tempChart.update();
	
	if(yhumdata.length > maxSamplesNumber)
	{
		removeOldHumData(yhumdata.length - maxSamplesNumber+1);
		lastTimeStamp += sampleTimeSec;
		xhumdata.push(lastTimeStamp.toFixed(4));
	}
	yhumdata.push(y);
	tempChart.update();
	
	if(ypressdata.length > maxSamplesNumber)
	{
		removeOldPressData(ypressdata.length - maxSamplesNumber+1);
		lastTimeStamp += sampleTimeSec;
		xpressdata.push(lastTimeStamp.toFixed(4));
	}
	ypressdata.push(z);
	tempChart.update();
}

/**
* @brief Remove oldest data point.
*/
function removeOldTempData(num,num2){
	xtempdata.splice(0,num2);
	ytempdata.splice(0,num);
}

function removeOldHumData(num){
	yhumdata.splice(0,num);
}

function removeOldPressData(num){
	ypressdata.splice(0,num);
}

/**
* @brief Start request timer
*/
function startTimer(){
    let sampleTimeMsec = ($("#sampleTime").val()!="")?$("#sampleTime").val(): 500;
	timer = setInterval(ajaxJSON, sampleTimeMsec);
}

/**
* @brief Stop request timer
*/
function stopTimer(){
	clearInterval(timer);
}

/**
* @brief Send HTTP GET request to IoT server
*/
function ajaxJSON() {
    $.get("api/measure.php",function(data)
		{
            var obj = JSON.parse(data);
            addData(+obj.temperature, +obj.humidity, +obj.pressure);
		}
	)
	.fail(function() {
		alert( "error" );
	});
}

/**
* @brief Chart initialization
*/
function tempChartInit()
{
    // array with consecutive integers: <0, maxSamplesNumber-1>
    maxSamplesNumber=($("#maxSamp").val()!="")?$("#maxSamp").val():100;
	xtempdata = [...Array(maxSamplesNumber).keys()]; 
	// scaling all values ​​times the sample time 
	xtempdata.forEach(function(p, i) {this[i] = (this[i]*sampleTimeSec).toFixed(4);}, xtempdata);
	// last value of 'xtempdata'
	lastTimeStamp = +xtempdata[xtempdata.length-1]; 
	// empty array
    ytempdata = [];
    
    // array with consecutive integers: <0, maxSamplesNumber-1>
	xhumdata = [...Array(maxSamplesNumber).keys()]; 
	// scaling all values ​​times the sample time 
	xhumdata.forEach(function(p, i) {this[i] = (this[i]*sampleTimeSec).toFixed(4);}, xhumdata);
	// last value of 'xtempdata'
	lastTimeStamp = +xhumdata[xhumdata.length-1]; 
	// empty array
    yhumdata = []; 
    
    // array with consecutive integers: <0, maxSamplesNumber-1>
	xpressdata = [...Array(maxSamplesNumber).keys()]; 
	// scaling all values ​​times the sample time 
	xpressdata.forEach(function(p, i) {this[i] = (this[i]*sampleTimeSec).toFixed(4);}, xpressdata);
	// last value of 'xtempdata'
	lastTimeStamp = +xpressdata[xpressdata.length-1]; 
	// empty array
	ypressdata = []; 



	// get chart context from 'canvas' element
	tempChartContext = $("#chart")[0].getContext('2d');

	tempChart = new Chart(tempChartContext, {
		// The type of chart: linear plot
		type: 'line',

		// Dataset: 'xtempdata' as labels, 'ydata' as dataset.data
		data: {
			labels: xtempdata,
			datasets: [{
                fill: false,
                yAxisID: 'T',
				label: 'Temperatura',
				backgroundColor: 'rgb(255, 0, 0)',
				borderColor: 'rgb(255, 0, 0)',
				data: ytempdata,
				lineTension: 0
            },
            {
                fill: false,
                yAxisID: 'C',
				label: 'Ciśnienie',
				backgroundColor: 'rgb(255, 255, 0)',
				borderColor: 'rgb(255,255, 0)',
				data: ypressdata,
				lineTension: 0
			},
            {
                fill: false,
                yAxisID: 'W',
				label: 'Wilgotność',
				backgroundColor: 'rgb(255, 0, 255)',
				borderColor: 'rgb(255, 0, 255)',
				data: yhumdata,
				lineTension: 0
			}]
		},

		// Configuration options
		options: {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			scales: {
				yAxes: [{
                    id: 'T',
					scaleLabel: {
						display: true,
					labelString: 'Temperature Value [C]'
					}
                },
                {
                    id: 'C',
                    position: 'right',
					scaleLabel: {
						display: true,
					labelString: 'Pressure Value [hPa]'
					}
                },
                {
                    id: 'W',
					scaleLabel: {
						display: true,
					labelString: 'Humidity Value [%]'
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Time [s]'
					}
				}]
			}
		}
	});
	
    ytempdata = tempChart.data.datasets[0].data;
    yhumdata = tempChart.data.datasets[2].data;
    ypressdata = tempChart.data.datasets[1].data;
    xtempdata = tempChart.data.labels;

}

$(document).ready(() => { 
	tempChartInit();
	$("#start").click(startTimer);
	$("#stop").click(stopTimer);
});