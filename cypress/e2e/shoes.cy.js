describe("Shoe functionality", () => {
  it("Allows the user to add and remove shoes and its sizes", () => {
    cy.visit("http://localhost:5173/");

    // Click the "+" button to add shoe input
    cy.get(".shoes__button").as("addButton").click().click().click();

    // Enter shoe size for the first input
    cy.get(".shoes__input").eq(0).type("41");

    // Enter shoe size for the second input
    cy.get(".shoes__input").eq(1).type("36");

    // Enter shoe size for the third input
    cy.get(".shoes__input").eq(2).type("33");

    // Click the "-" button for the last shoe input
    cy.get(".shoes__button--small").last().click();

    // Verifying so that the shoe input is removed
    cy.get(".shoes__input").should("have.length", 2);
  });
  it("Error test with putting the wrong people/shoe", () => {
    cy.visit("http://localhost:5173/");

    // Fill in booking details and submit the form
    cy.get('input[name="when"]').type("2023-07-10");
    cy.get('input[name="time"]').type("12:00");
    cy.get('input[name="people"]').type("1");
    cy.get('input[name="lanes"]').type("1");
    cy.get(".shoes__button").as("addButton").click().click();
    cy.get(".shoes__input").eq(0).type("38");
    cy.get(".shoes__input").eq(1).type("38");
    cy.get(".booking__button").click();

    // Verifying that the error message is displayed
    cy.contains(
      "Fill out all the fields and make sure that people and shoes is the same number."
    ).should("be.visible");
  });
});
