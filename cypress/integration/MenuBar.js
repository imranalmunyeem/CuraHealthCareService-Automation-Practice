// <reference types ="cypress"/>

describe("Menu Bar", () => {
  it("Click on Menu Bar", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.get("#menu-toggle").click();
    cy.log("Clicking was successful");
  });
});
