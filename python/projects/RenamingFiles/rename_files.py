"""Used this when converting files from org roam to simple org files.

Before it would have excesions with date, as such -
20220512203453-raspberry_pi_first_setup.org. I wanted to remove the
numbers from the filename. This script helped with that.
"""

import os
import re


def rename():
    """Get the list of the photo name."""
    plist = os.listdir(r"/home/arvydas/Dropbox/org/archive_smth/")
    print(plist)
    # removing the numbers from the photo names

    os.chdir(r"/home/arvydas/Dropbox/org/archive_smth/")
    for pname in plist:
        os.rename(pname, re.sub("[0-9-]", "", pname))
        print(pname)

    print(pname)


rename()


def list():
    """Get the list of the photo name."""
    plist = os.listdir(r"/home/arvydas/Dropbox/org/archive_smth/")
    print(plist)
    # removing the numbers from the photo names

    os.chdir(r"/home/arvydas/Dropbox/org/archive_smth/")
    for pname in plist:
        os.rename(pname, re.sub("[0-9]-", "", pname))
        print(pname)
