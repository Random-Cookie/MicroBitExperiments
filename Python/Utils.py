from microbit import *
from Images import IMG_TEMPLATE
import time
import gc

def to_displayable_img(img):
    parsed_img = ''
    for i in range (5):
        line = ''
        for j in range(5):
            line += str(img[i][j])
        if i < 4:
            line += ':'
        parsed_img += line
    return Image(parsed_img)


def shallow_copy_array(array):
    return [row[:] for row in array]

def brighten_img(img, amount, mask = None):
    if mask == None:
        mask = img
    for i in range(5):
        for j in range (5):
            if mask[i][j] != 0:
                img[i][j] += amount

def breathe_img(img, count, breath_length, breath_interval = None):
    if breath_interval == None:
        breath_interval = 0
    for i in range(count):
        print('i range:' + str(i))
        breathable = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]
        counter = 0
        increment = 1
        display.show(to_displayable_img(breathable))
        time.sleep(breath_length)
        for j in range(16):
            brighten_img(breathable, increment, img)
            print('c: ' + str(counter) + ', i: ' + str(increment))
            print('breathable: ' + str(breathable[0][0]))
            display.show(to_displayable_img(breathable))
            counter += increment
            if counter > 7:
                increment = -1
            if counter < 0:
                increment = 1
            time.sleep(breath_length)
        time.sleep(breath_interval)
