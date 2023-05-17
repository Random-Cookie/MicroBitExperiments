const BM_ZERO: number[][] = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]
const BM_MAX: number[][] =  [[255,255,255,255,255], [255,255,255,255,255], [255,255,255,255,255], [255,255,255,255,255], [255,255,255,255,255]]

const ZED: number[][] = [[1,1,1,1,1], [0,0,0,1,0], [0,0,1,0,0], [0,1,0,0,0], [1,1,1,1,1]]
// https://lh4.googleusercontent.com/7e_FihyDjXKoekPbggbZLW7M5o6qtsMYc3BE71H5B79zv8_nygb6w_ruMbM5-7pTbbrFdX1d9iQvJSdhWs4rPC_nTfIBsvTJ0gBDbeeIdD2Hk_5RkJ7IZLHpjpSesoFqYLYQaGA4
const BUNNY: number[][] = [[1,1,0,1,1], [0,1,1,1,0], [1,0,1,0,1], [1,1,1,1,1], [0,0,1,0,0]]
const GHOST: number[][] = [[0,1,1,1,0], [1,1,1,1,1], [1,0,1,0,1], [1,1,1,1,1], [1,0,1,0,1]]
const GHOST_CYCLOPS: number[][] = [[0,0,1,0,0], [1,1,1,1,1], [1,1,0,1,1], [1,1,1,1,1], [1,0,1,0,1]]
const SINISTER_SMILE: number[][] = [[0,0,1,0,0], [1,0,1,0,1], [0,0,1,0,0], [1,0,1,0,1], [1,1,1,1,1]]
const SPACE_INVADER_1: number[][] = [[0,1,1,1,0], [1,0,1,0,1], [1,1,1,1,1], [1,0,0,0,1], [0,1,0,1,0]]
const SPACE_INVADER_2: number[][] = [[0,1,0,1,0], [1,1,1,1,1], [1,0,1,0,1], [0,1,1,1,0], [1,0,0,0,1]]
// https://i.pinimg.com/originals/77/63/de/7763de88f0f0afa3586d245bd7956390.jpg
const NOTE_1: number[][] = [[0,1,1,1,1], [0,1,0,0,1], [1,1,0,0,1], [1,1,0,1,1], [0,0,0,1,1]]
const NOTE_2: number[][] = [[0,0,1,1,0], [0,0,1,1,1], [0,0,1,0,1], [0,1,1,0,0], [0,1,1,0,0]]
const TEAR: number[][] = [[0,0,1,0,0], [0,1,1,1,0], [0,1,1,1,0], [1,1,1,1,1], [0,1,1,1,0]]
const CROSS: number[][] = [[0,0,1,0,0], [0,0,1,0,0], [1,1,1,1,1], [0,0,1,0,0], [0,0,1,0,0]]
// https://cdn5.f-cdn.com/contestentries/1317201/9578180/5b03d318adf68_thumb900.jpg
const MISSILE: number[][] = [[0,0,0,1,1], [0,0,1,1,1], [1,1,1,1,0], [0,1,1,0,0], [1,0,1,0,0]]

const SYMBOLS: number[][][] = [BUNNY, GHOST, SPACE_INVADER_1, SPACE_INVADER_2, NOTE_1, NOTE_2, TEAR, CROSS]
