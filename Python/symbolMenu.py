from Images import *
from Utils import *
import music

menu_symbols = [MISSILE, BUNNY, GHOST, SPACE_INVADER_1, SPACE_INVADER_2, TEAR, CROSS]

for symbol in menu_symbols:
    brighten_img(symbol, 8, symbol)

menu_counter = 0
sleep_mode = 0

while True:
    if sleep_mode:
        if accelerometer.was_gesture('shake'):
            sleep_mode = 0
        else:
            breathe_img(ZED, 1, 0.5)
    else:
        current_img = menu_symbols[menu_counter]
        display.show(to_displayable_img(current_img))
        if button_a.is_pressed() and button_b.is_pressed():
            music.play('e')
            time.sleep(0.2)
        if button_a.is_pressed():
            if menu_counter == 0:
                menu_counter = len(menu_symbols) - 1
            else:
                menu_counter -= 1
            time.sleep(0.2)
        if button_b.is_pressed():
            if menu_counter == len(menu_symbols) - 1:
                menu_counter = 0
            else:
                menu_counter += 1
            time.sleep(0.2)
        if accelerometer.was_gesture('shake'):
            sleep_mode = 1
