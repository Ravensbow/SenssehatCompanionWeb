<?php
	//echo '{"temperature": 30.0, "pressure": 1013.001708984375, "humidity": 45.03515625}';
	//exec("sudo ./get_data.py");
	$file = fopen("chartdata.json","r") or die("Unable to open file.");
	echo fread($file,filesize("chartdata.json"));
	fclose($file);
