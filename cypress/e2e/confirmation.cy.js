describe("Confirmation functionality", () => {
  it("Allows the user to get a confirmation with price etc of their booking", () => {
    cy.visit("http://localhost:5173/");

    // Enter date
    cy.get('input[name="when"]').clear().type("2023-07-10");

    // Enter time
    cy.get('input[name="time"]').type("12:00");

    // Enter the number of players
    cy.get('input[name="people"]').clear().type("2");

    // Ener the number of lanes
    cy.get('input[name="lanes"]').clear().type("1");

    // Click the "+" to add shoes
    cy.get(".shoes__button").as("addButton").click().click();

    // Shoe size for the first input
    cy.get(".shoes__input").eq(0).type("41");

    // Shoe size for the second input
    cy.get(".shoes__input").eq(1).type("36");

    // Submit the form
    cy.get(".booking__button").click();

    // Verify successful booking
    cy.url().should("include", "/confirmation");
    cy.contains("See you soon!").should("be.visible");
    cy.get(".confirmation__price").should("contain", "Total:");
  });
});
