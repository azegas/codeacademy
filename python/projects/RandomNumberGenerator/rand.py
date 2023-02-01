import random
from datetime import datetime

now = datetime.now()
num = random.randint(1, 101)

with open('/home/arvydas/Dropbox/src/pythonstuffs/random_number_generator/rand.txt', 'a') as f:
    f.write('{} - Your random number is {}\n'.format(now, num))
