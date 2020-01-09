import NavBar from "./nav";
import { Header } from "./header";
/**
 * This class models the automation practice page.
 */
export class MainPage {
  constructor() {
    this.navBar = new NavBar();
    this.header = new Header();
  }
  /**
   * @function returns a new instance of the Header class
   */

  get logo() {
    return $(".logo");
  }

  open() {
    browser.url("/");
  }

  waitForPageToLoad() {
    this.logo.waitForDisplayed(5000);
  }
}
export default new MainPage();
