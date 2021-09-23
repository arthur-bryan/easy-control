#!/bin/bash

gpios="2 5 7 8 13 16 19 20 22 23"

function setOutputMode() {
	for gpio in $gpios; do
		gpio mode $gpio out
	done
}

function setAllOff() {
    for gpio in $gpios; do
        gpio write $gpio 0
    done
}

function setAllOn() {
    for gpio in $gpios; do
        gpio write $gpio 1
    done
}

setOutputMode
#setAllOn
#setAllOff
