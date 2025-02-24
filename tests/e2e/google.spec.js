/*
 * @Author: xianglei
 * @Date: 2025-02-22 19:11:51
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-22 19:12:10
 * @Description: 
 */
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 3000);
  } finally {
    await driver.quit();
  }
})();
