input.onButtonPressed(Button.A, function () {
    A = randint(-12, 12)
    for (let index = 0; index < 2; index++) {
        basic.showNumber(A)
        basic.clearScreen()
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showNumber(3 * A)
        basic.clearScreen()
        basic.pause(1000)
    }
})
let A = 0
basic.showString("Act.1")
