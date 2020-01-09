import MainPage from "../../src/page-object/main.page";
import AuthenticationPage from "../../src/page-object/authentication.page";

describe("The site", () => {
    beforeAll(() => {
      MainPage.open();
      MainPage.waitForPageToLoad();
    });
  
    it("should navigate to Authentication Page by clicking sign in", () => {
      MainPage.navBar.signInLink.click();
      AuthenticationPage.waitForPageToLoad();
      expect(AuthenticationPage.title.getText() === 'Authentication'.toLocaleUpperCase()).toBeTrue();
    });
});

