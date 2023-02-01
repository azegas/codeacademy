# https://www.youtube.com/watch?v=PtvN8ad9N3g&ab_channel=PythonSimplified

import cv2 as cv
import numpy as np

img = np.zeros((600, 900, 3), dtype=np.uint8)

# background
# cv.rectangle(img, (x1, y1), (x2, y2), color, outline)
# -1 - fill circle rather than outlining it
cv.rectangle(img, (0, 0), (900, 500), (255, 225, 85), -1)
cv.rectangle(img, (0, 500), (900, 600), (75, 180, 70), -1)

# sun
cv.circle(img, (200, 150), 60, (0, 255, 255), -1)
cv.circle(img, (200, 150), 75, (220, 255, 255), 10)

# text
font = cv.FONT_HERSHEY_SCRIPT_SIMPLEX
cv.putText(img, "Python rocks", (120, 490), font, 1.5, (255, 255, 255), 2)

# *** TREE 1 ***
# tree stem
cv.line(img, (600, 500), (600, 420), (30, 65, 155), 25)
# tree leafs
triangle = np.array([[500, 440], [700, 440], [600, 75]], dtype=np.int32)
cv.fillPoly(img, [triangle], (75, 180, 70))

# *** TREE 2 ***
# tree stem
cv.line(img, (710, 500), (710, 420), (30, 65, 155), 15)
# tree leafs
triangle2 = np.array([[640, 460], [780, 460], [710, 200]], dtype=np.int32)
cv.fillPoly(img, [triangle2], (75, 200, 70))

cv.imwrite("tree.png", img)  # saves the files in current directory
cv.imshow("tree", img)

cv.waitKey(0)  # any key press stops the script
cv.destroyAllWindows()
