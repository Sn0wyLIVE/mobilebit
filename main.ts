let elapsed = 0
let stopwatch_start = 0
let degrees = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    radio.sendString("love")
    basic.showString("test")
})
input.onButtonPressed(Button.AB, function () {
    elapsed = input.runningTime() - stopwatch_start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    stopwatch_start = input.runningTime()
})
input.onGesture(Gesture.Shake, function () {
    if (input.logoIsPressed()) {
        basic.showNumber(randint(6, 20))
    } else {
    	
    }
    basic.showNumber(randint(0, 6))
})
basic.forever(function () {
    radio.setGroup(165)
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
