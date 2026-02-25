/* Copyright (c) 2020 MTHS All rights reserved *
* Created by: Murali Kothuri *
* Created on: Feb 2026 *
* This program simulates the current temperature */

let currentTemperature : number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    currentTemperature = input.temperature()
    basic.showString("The temperature is:" + (currentTemperature) + " C" )
})

