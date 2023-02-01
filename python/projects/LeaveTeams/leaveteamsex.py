#!/usr/bin/python
import pyautogui as pg

# docs - https://pyautogui.readthedocs.io/en/latest/

# pg.size() # see the position of the current window

# pg.position() # see the location of your mouse cursor

# current hang up location - Point(x=1458, y=799)

# https://time.is/
# https://crontab.guru/

def leaveteams():
    pg.moveTo(318,423,4)
    # pg.click(318,423)
    print("I just left teams")

leaveteams()
