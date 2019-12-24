import MainPage from "../../src/page-object/main.page";
import AuthenticationPage from "../../src/page-object/authentication.page";

describe("The site", () => {
  beforeAll(() => {
    MainPage.open();
    MainPage.waitForPageToLoad();
  });

  it("should have a header", () => {
    expect(MainPage.header.isDisplayed()).toBeTrue();
  });

  it("should have a searchbox", () => {});
  it("should have a menu for women, dresses & t-shirts", () => {});
  it("should have a 'Best sellers' section with a list of product cards", () => {});
  it("should have a footer with links to My orders, My credit slips, My addresses & My personal info", () => {});
});
