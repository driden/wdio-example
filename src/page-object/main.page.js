import NavBar from "./nav";
/**
 * This class models the automation practice page.
 */
export class MainPage {
  constructor() {
    this.navBar = new NavBar();
  } 
  /**
   * @function returns a new instance of the Header class
   */
  get header() { return $('#header'); }
  get logo() { return $('.logo'); }

  open() {
    browser.url('/');
  }

  waitForPageToLoad() {
    this.logo.waitForDisplayed(5000);
  }
}
export default new MainPage();
