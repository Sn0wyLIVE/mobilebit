let elapsed = 0
let stopwatch_start = 0
let hello = 0
let degrees = 0
input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(0)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString("HI")
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("HI")
})
input.onButtonPressed(Button.A, function () {
    elapsed = input.runningTime() - stopwatch_start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString("hi")
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString("SENDHELP!")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("SENDHELP!")
})
input.onButtonPressed(Button.B, function () {
    stopwatch_start = input.runningTime()
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendValue("name", 0)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showString("HOWAREYOU?")
})
input.onGesture(Gesture.Shake, function () {
    if (input.logoIsPressed()) {
        basic.showNumber(randint(6, 20))
    } else {
    	
    }
    basic.showNumber(randint(0, 6))
})
radio.onReceivedValue(function (name, value) {
    basic.showString("HOWAREYOU?")
})
basic.forever(function () {
    radio.setGroup(165)
    hello = 0
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
