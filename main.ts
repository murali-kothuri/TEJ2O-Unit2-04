/* Copyright (c) 2020 MTHS All rights reserved *
* Created by: Murali Kothuri *
* Created on: Feb 2026 *
* This program simulates the current temperature */

let currentTemperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    currentTemperature = randint(1, 100)
    basic.showString('The temperature is:')
    basic.showNumber(currentTemperature)
    basic.showString('C')
})