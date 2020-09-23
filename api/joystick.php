<?php
	$file = fopen("jd.json","r") or die("Unable to open file.");
	echo fread($file, filesize("jd.json"));
	fclose($file);
