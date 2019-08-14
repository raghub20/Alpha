
import { browser, ExpectedConditions, element, ElementFinder, by, promise } from 'protractor';


/** S.Akter: clickOn Any web element until its avaiable in a time
	* @param  : ele: ElementFinder
   	* @return : N/A
*/
export async function clickOn(ele: ElementFinder) {
    const EC = ExpectedConditions;
    const condition = await EC.elementToBeClickable(ele);
    await browser.wait(condition, 30000);
    ele.click();
}

/** S.Akter: typeOn Any web element until its avaiable in a time
	* @param  : ele: ElementFinder
   	* @return : N/A
*/
export async function typeOn(ele: ElementFinder, value: string) {
    const EC = ExpectedConditions;
    const condition = await EC.elementToBeClickable(ele);
    await browser.wait(condition, 30000);
    await ele.sendKeys(value);
}

/** S.Akter: clearField Any web element until its avaiable in a time
	* @param  : ele: ElementFinder
   	* @return : N/A
*/
export async function clearField(ele: ElementFinder) {
    const EC = ExpectedConditions;
    const condition = await EC.elementToBeClickable(ele);
    await browser.wait(condition, 30000);
    await ele.clear();
}

/** S.Akter: getElementsValue
	* @param  : ele: ElementFinder
   	* @return : return String
*/
export async function getElementValueFor(ele: ElementFinder) {
    const EC = ExpectedConditions;
    const condition = await EC.elementToBeClickable(ele);
    await browser.wait(condition, 30000);
    return await ele.getAttribute('value'); // Return the text of value attribute 
}
