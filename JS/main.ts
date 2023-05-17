const menu_symbols = [MISSILE, BUNNY, GHOST, SPACE_INVADER_1, SPACE_INVADER_2]

function update_menu_img(counter: number) {
    draw_img_with_brightness(menu_symbols[menu_counter], 255)
}

// Sleep Mode and Toggling
let mode: string = 'menu'
input.onGesture(Gesture.Shake, function() {
    if (mode === 'sleep') {
        mode = 'menu'
        clearInterrupts()
        draw_img_with_brightness(menu_symbols[menu_counter], 255)
    } else if (mode === 'app') {
        mode = 'menu'
        draw_img_with_brightness(menu_symbols[menu_counter], 255)
    } else {
        basic.clearScreen()
        basic.pause(5000)
        mode = 'sleep'
    }
})

// Menu Buttons
input.onButtonPressed(Button.A, function () {
    console.log('A Pressed')
    if (mode !== 'sleep') {
        if (menu_counter === 0) {
            menu_counter = menu_symbols.length - 1
        } else {
            menu_counter -= 1
        }
        update_menu_img(menu_counter)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    console.log('B Pressed')
    if (mode !== 'sleep') {
        if (menu_counter === menu_symbols.length - 1) {
            menu_counter = 0
        } else {
            menu_counter += 1
        }
        update_menu_img(menu_counter)
        basic.pause(100)
    }
})

// Main Loop
let menu_counter: number = 0

draw_img_with_brightness(menu_symbols[menu_counter], 255)
basic.forever( function () {
    if (mode === 'sleep') {
        const randomImg = menu_symbols[Math.floor(Math.random() * menu_symbols.length)]
        breathe_img(randomImg, 50, 10, 10000)
        breatheImgInterrupt = false
        basic.pause(1000)
    } else if (mode === 'menu') {
        basic.pause(1000)
    } else if (mode === 'app') {

    }
})