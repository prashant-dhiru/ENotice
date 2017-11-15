import { browser, element, by } from 'protractor';

export class ENoticePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('enb-root h1')).getText();
  }
}
