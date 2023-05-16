from microbit import *
import time

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

def brighten_img(img, amount):
    ret = shallow_copy_array(img)
    for i in range(5):
        for j in range (5):
            if ret[i][j] != 0:
                ret[i][j] += amount
    return ret

def breathe_img(img, count, delay):
    breathable = shallow_copy_array(img)
    counter = -1
    increment = 1
    for i in range(count):
        for j in range (17):
            display.show(to_displayable_img(brighten_img(breathable, counter)))
            counter += increment
            if counter > 7:
                increment = -1
            if counter < 0:
                increment = 1
            time.sleep(delay)