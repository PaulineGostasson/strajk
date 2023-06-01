describe("Toggle views", () => {
  it("Make sure to toggle between booking and confirmation view", () => {
    // Visit the booking page
    cy.visit("http://localhost:5173/");

    // Ensure the navigation link exists
    cy.get("a.navigation__link.hide").should("exist");

    // Fill in booking details and submit the form
    cy.get('input[name="when"]').type("2023-07-10");
    cy.get('input[name="time"]').type("12:00");
    cy.get('input[name="people"]').type("1");
    cy.get('input[name="lanes"]').type("1");
    cy.get(".shoes__button").as("addButton").click();
    cy.get(".shoes__input").eq(0).type("38");
    cy.get(".booking__button").click();

    // Verify that the confirmation view is displayed
    cy.url().should("include", "/confirmation");
    cy.contains("See you soon!").should("be.visible");

    // Go back to the booking view
    cy.get(".navigation__link").contains("Booking").click({ force: true });
    cy.get("a.navigation__link.hide").should("exist");
  });
});
