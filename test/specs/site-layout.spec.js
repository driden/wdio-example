import { AutomationPractice } from "../../src/page-object/automation-practice";

describe("The site", () => {
  it("should have a header", () => {
    const site = new AutomationPractice();
    const header = site.getHeader();
    assert.isTrue(header.isVisible());
  });

  it("should have a searchbox", () => {});
  it("should have a menu for women, dresses & t-shirts", () => {});
  it("should have a 'Best sellers' section with a list of product cards", () => {});
  it("should have a footer with links to My orders, My credit slips, My addresses & My personal info", () => {});
});
