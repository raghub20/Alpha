import { browser, ElementFinder } from "protractor";

export class FunctionLibrary {

  async scrollToElement(el: ElementFinder) {
    return await browser.executeScript('arguments[0].scrollIntoView();', el.getWebElement());
  }
}