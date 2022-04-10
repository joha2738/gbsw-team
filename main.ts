input.onButtonPressed(Button.A, function () {
    radio.sendNumber(teamNumber)
})
radio.onReceivedValue(function (name, value) {
    if ("teamResult".compare(name) > 0 && value == 0) {
        basic.showIcon(IconNames.Happy)
    } else if ("teamResult".compare(name) > 0) {
        basic.showNumber(value)
    } else {
    	
    }
})
let teamNumber = 0
teamNumber = 1
radio.setGroup(1)
basic.showNumber(teamNumber)
basic.pause(2000)
basic.showIcon(IconNames.Happy)
