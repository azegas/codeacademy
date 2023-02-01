import pyautogui as pg
import time

time.sleep(5)

txt = open('compliments.txt')

a = "Doviliux, "

for i in txt:
    pg.write(a+''+i)
    pg.press('Enter')
