<div class="chart_holder">
<h1>Przebiegi czasowe</h1>
		<div>
			<div class="chart_menu">
				<button id="start" class="btn btn-primary">Start</button>
				<button id="stop" class="btn btn-primary">Stop</button>
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span class="input-group-text" id="basic-addon1">Time sample</span>
  					</div>
  					<input id="sampleTime" type="number" class="form-control" placeholder="500" aria-label="TS" aria-describedby="basic-addon1">
				</div>
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span class="input-group-text" id="basic-addon1">Max num. of samples</span>
  					</div>
  					<input id="maxSamp"type="number" class="form-control" placeholder="100" aria-label="maxSamp" aria-describedby="basic-addon1">
				</div>
			</div>
			<div style="height:15cm; width:30cm">
				<canvas id="chart"></canvas>
			</div>
		</div>		
</div>
<?php
ob_start();
echo '<script type="text/javascript" src="wykresy.js"></script>';
$scripts = ob_get_contents();
ob_end_clean();