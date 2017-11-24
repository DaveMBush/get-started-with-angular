import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver'
export class AppPage {
  navigateTo(): promise.Promise<object> {
    return browser.get('/');
  }

  getHeaderText(): promise.Promise<string> {
    return element(by.css('app-root .navbar-brand')).getText();
  }
}
