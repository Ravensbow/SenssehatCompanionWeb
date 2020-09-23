#!/usr/bin/python
import json
from sense_emu import SenseHat
sense = SenseHat()
duty=[]
filename = "led_display.json";
def getRGBfromI(RGBint):
    blue =  RGBint & 255
    green = (RGBint >> 8) & 255
    red =   (RGBint >> 16) & 255
    return red, green, blue
if filename:
    with open(filename, 'r') as f:
        ledDisplayArray = json.load(f)
def draw():
    for x in ledDisplayArray:
        duty.append(getRGBfromI(x))
    return duty
sense.set_pixels(draw())
