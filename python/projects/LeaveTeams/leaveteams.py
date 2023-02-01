import pyautogui
import time
# import pdb; pdb.set_trace()

# docs - https://pyautogui.readthedocs.io/en/latest/
# pg.size() # see the position of the current window
# pg.position() # see the location of your mouse cursor
# current hang up location - Point(x=1458, y=799)
# https://time.is/
# https://crontab.guru/
# pg.position() # see the location of your mouse cursor

# PADEJAU PER PUSE KAIRIOJO EKRANO

# pg.position()

def leaveteams():
    time.sleep(5)
    pg.moveTo(3570, 615, 2)
    pg.click(3570, 615)
    time.sleep(2)
    pg.moveTo(343, 552, 2)
    pg.moveTo(200, 652, 1)
    time.sleep(1)
    button = pyautogui.locateCenterOnScreen("/home/arvydas/Dropbox/src/pythonstuffs/leave_teams/hangup.png")
    print('laukiu 5sec')
    time.sleep(5)
    pyautogui.click(button)
    time.sleep(2)
    pyautogui.click(button)

    # pg.moveTo(457, 900, 2)      # 4 leidzia leciau pelytei vast
    # # pg.click(457, 900)
    print("I just left teams")

# messagebox.option('title', 'message_to_be_displayed')

leaveteams()
