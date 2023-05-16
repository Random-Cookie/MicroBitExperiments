from Images import *
from Utils import *
import random

temp_symbols = shallow_copy_array(SYMBOLS)
access_symbols = []
for i in range(4):
    choice = random.choice(temp_symbols)
    access_symbols.append(choice)
    temp_symbols.remove(choice)



for i in range(len(access_symbols)):
    breathe_img(access_symbols[i], 1, 0.2)

