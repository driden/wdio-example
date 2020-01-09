/**
 * @classdesc AutomationPractice Header
 */
export class Header {
  /**
   * @field CSS selector that matches the header
   */

  locator = "header#header";

  /**
   * @function isVisible
   * @returns whether the header is being currently displayed or not
   */
  isDisplayed() {
    return browser.$(this.locator).isDisplayed();
  }
}
