import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver';

export class AppPage {
  navigateTo(): promise.Promise<{}> {
    return browser.get('/');
  }

  getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
