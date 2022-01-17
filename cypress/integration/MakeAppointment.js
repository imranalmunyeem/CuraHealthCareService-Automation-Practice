/// <reference types ="cypress"/>

describe("Cura Healthcare Appointment", () => {
  it("Navigate to the webpage", () => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
    cy.log("Navigation was successful");
  });

  it("Click on Make Appointment", () => {
    cy.get("#btn-make-appointment").click();
    cy.log("Clicking on Make Appointent button was successful");
  });

  it("Login", () => {
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");
    cy.get("#btn-login").click();
    cy.log("Login was successful");
  });

  it("Make Appointment", () => {
    cy.get("select")
      .select(1)
      .should("have.value", "Hongkong CURA Healthcare Center");
    cy.get('[type="checkbox"]').check();
    cy.get("#radio_program_medicaid").check();
    cy.get("#txt_visit_date").type("30.02.2022");
    cy.get("#txt_comment").click({ force: true });
    cy.get("#txt_comment").type("My appointment is on 30th");
    cy.get("#btn-book-appointment").click();
  });

  it("Verify Appointment", () => {
    cy.get("h2").contains("Appointment Confirmation");
    cy.log("All Tests are Completed");
  });
});
