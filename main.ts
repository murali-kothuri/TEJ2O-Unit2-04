/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Feb 2026
 * This program simulates the current temperature
*/

// our variable for a random number
let currentTemperature = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let currentTemperature = (1, 100)
    basic.showString("The temperature is:")
    basic.showNumber(input.temperature())
    basic.showString("C")
})
