#!/usr/bin/python
from sense_emu import SenseHat
import sys
import getopt
s=SenseHat()
import json
import time
import signal

temperature = 0
humidity = 0
pressure = 0
# data point
class DataPoint:
	def __init__(self, data):
		self.data = data
try:
	
		
		humidity = s.get_humidity()
		pressure = s.get_pressure()
		temperature = s.get_temperature()
		
		jsonStr = json.dumps({"temperature":float(temperature),"pressure":float(pressure),"humidity":float(humidity)})
		try:
			datafile = open("chartdata.json","w")
			datafile.write(jsonStr)
		except:
			print("Write Error")
		finally:
			datafile.close()
	
		
except KeyboardInterrupt:
	pass
