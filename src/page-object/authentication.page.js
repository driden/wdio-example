class AuthenticationPage {

    get title() { return $('h1.page-heading'); }

    waitForPageToLoad() {
        this.title.waitForDisplayed(5000, false, 'Page not ready');
    }
}

export default new AuthenticationPage();
