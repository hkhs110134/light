input.onButtonPressed(Button.A, function () {
    a = 1
})
input.onButtonPressed(Button.B, function () {
    a = 0
})
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        music.ringTone(Math.map(input.lightLevel(), 0, 255, 100, 1000))
    } else {
        music.stopAllSounds()
    }
})
