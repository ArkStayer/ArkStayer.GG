import time
import pyperclip
import pyautogui
skins = ["Glock-18 Sacrifice", "FAMAS Decommissioned", "Tec-9 Flash Out", "MAC-10 Classic Crate", "MAG-7 Popdog", "Dual Berettas Elite 1.6", "SCAR-20 Assault", "MP5-SD Agent", "P250 Inferno", "Five-SeveN Buddy", "UMP-45 Plastique", "M249 Aztec", "MP9 Hydra", "AUG Death by Puppy", "P90 Nostalgia", "AWP Wildfire", "FAMAS Commemoration", "Classic Knife Crimson Web", "Classic Knife Fade"]
for skin in skins:
    pyautogui.moveTo(271, 1050)
    pyautogui.click()
    time.sleep(2)
    pyautogui.press("/")
    pyautogui.press("Home")
    pyperclip.copy(skin)
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.press("Enter")
    pyautogui.moveTo(215, 440)
    time.sleep(3)
    pyautogui.click()
    pyautogui.moveTo(1540, 530)
    time.sleep(2)
    pyautogui.rightClick()
    pyautogui.moveTo(1686, 650)

    pyautogui.click()
    time.sleep(1)
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.moveTo(780, 550)
    pyautogui.click()
    pyautogui.press("/")
    pyautogui.hotkey('ctrl', 'a')
    pyautogui.press("Backspace")
    pyautogui.write(" steam market")
    time.sleep(1)
    pyautogui.moveTo(530, 1050)
    pyautogui.click()
    time.sleep(1)

