radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 199) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(45)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
basic.showIcon(IconNames.Target)
basic.clearScreen()
radio.setGroup(199)
basic.forever(function () {
	
})
