// global list to store all interrupts
const INTERRUPTS: boolean[] = []

function clearInterrupts() {
    for (let i = 0; i < INTERRUPTS.length; ++i) {
        INTERRUPTS[i] = false
    }
}

function generate_flat_brightness(value: number): number[][] {
    let brightness_map: number[][] = []
    let line: number[] = [value, value, value, value, value]
    for (let i = 0; i < 5; ++i) {
        brightness_map.push(line)
    }
    return brightness_map
}

function apply_brightness_map(img: number[][], brightness_map: number[][] = BM_MAX) {
    let parsed_img: number[][] = []
    for (let y = 0; y < 5; ++y) {
        let line: number[] = []
        for (let x = 0; x < 5; ++x) {
            line.push(img[x][y] * brightness_map[x][y])
        }
        parsed_img.push(line)
    }
    return parsed_img
}

function draw_img(img: number[][]) {
    basic.clearScreen()
    for (let y = 0; y < 5; ++y) {
        for (let x = 0; x < 5; ++x) {
            led.plotBrightness(x, y, img[x][y])
        }
    }
}

function draw_img_with_brightness(img: number[][], brightness: number) {
    draw_img(apply_brightness_map(img, generate_flat_brightness(brightness)))
}

// Global variable to allow this routine to be interrupted. In this way,
// the device can be "woken up" without having to wait for breathing cycle to finish
let breatheImgInterrupt: boolean = false
INTERRUPTS.push(breatheImgInterrupt)

function breathe_img(img: number[][], count: number, breath_length: number, breath_interval: number = 0) {
    for (let i = 0; i < count; ++i) {
        let counter = 0
        let increment = 1
        draw_img(BM_ZERO)
        basic.pause(breath_length)
        for (let j = 0; j < 511 && !breatheImgInterrupt; ++j) {
            draw_img_with_brightness(img, counter)
            counter += increment
            if (counter > 254) increment = -1
            if (counter < 0) increment = 1
            basic.pause(breath_length)
        }
        if (!breatheImgInterrupt) {
            basic.pause(breath_interval)
        }
    }
}