radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
    basic.clearScreen()
})
let potato = 0
radio.setGroup(1)
potato = -1
basic.forever(function () {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("A G F E D C C C ", 105)
    }
    if (potato < 0) {
        basic.clearScreen()
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
        potato += -1
    }
})
