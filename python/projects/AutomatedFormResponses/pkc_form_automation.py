"""Return the pathname of the KOS root directory."""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time

# https://selenium-python.readthedocs.io/navigating.html#interacting-with-the-page
# kokybes dalyku apklausa, galim prispmint kiek mum reikia

browser = webdriver.Chrome()

browser.get("https://forms.office.com/Pages/xxxxxxxxx")  # enter correct form url


def scroll():
    """Return the pathname of the KOS root directory."""
    time.sleep(1)
    ActionChains(browser).move_to_element(
        browser.find_element(
            By.XPATH,
            "/html/body/div/div/div/div/div[1]/div/div/div[1]/div[2]/div[2]/div[18]/div/div[2]/div[2]",
        )
    ).perform()
    time.sleep(1)
    print("scroll finished")


def click_heart():
    """Tas ir anas."""
    sirdute = browser.find_element(
        By.XPATH,
        "/html/body/div/div/div/div/div[1]/div/div/div[1]/div[2]/div[2]/div[17]/div/div[3]/div/div/div[5]",
    )
    time.sleep(1)
    sirdute.click()
    time.sleep(2)


def scroll_bottom():
    """."""
    ActionChains(browser).move_to_element(
        browser.find_element(
            By.XPATH, "/html/body/div/div/div/div/div[1]/div/div/div[2]/div/div[2]"
        )
    ).perform()


def click_submit():
    """."""
    click = browser.find_element(
        By.XPATH,
        "/html/body/div/div/div/div/div[1]/div/div/div[1]/div[2]/div[3]/div[1]/button/div",
    )
    time.sleep(1)
    click.click()
    time.sleep(1)


def click_repeat():
    """."""
    another_one = browser.find_element(
        By.XPATH, "/html/body/div/div/div/div/div[1]/div/div/div[2]/div[2]/div[2]/a"
    )
    another_one.click()


for x in range(3):
    scroll()
    click_heart()
    scroll_bottom()
    click_repeat()

print(f"Done, the thing ran {x} amount of time")

browser.quit()
