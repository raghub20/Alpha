import { browser, element, by, promise, ElementFinder } from 'protractor';
export class TotalCost {
    
    getTotalCost():ElementFinder {
        return element.all(by.css(".total-budget")).last();
    }
}