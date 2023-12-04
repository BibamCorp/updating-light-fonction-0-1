input.onButtonPressed(Button.A, function () {
    Alpha = 1
    music.play(music.stringPlayable("C5 - C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Alpha = 0
    music.play(music.stringPlayable("C5 - C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    if (Alpha == 0) {
        Alpha = 1
    } else {
        Alpha = 0
    }
    music.play(music.stringPlayable("C5 - C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
let Alpha = 0
basic.showString("updating light fonction 0-1")
basic.showIcon(IconNames.Square)
basic.pause(100)
basic.showIcon(IconNames.Chessboard)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
music.play(music.stringPlayable("D - F - A - C5 - ", 156), music.PlaybackMode.UntilDone)
basic.forever(function () {
    while (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) == Alpha) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . # . .
            # . . . #
            # # . # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
