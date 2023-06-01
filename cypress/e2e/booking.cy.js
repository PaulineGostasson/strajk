describe("Booking functionality", () => {
  it("Allows the user to book a date, time, number of players, and select how many lanes", () => {
    cy.visit("http://localhost:5173/");

    // Enter a future
    cy.get('input[name="when"]').clear().type("2023-07-08");

    // Enter a time
    cy.get('input[name="time"]').type("14:00");

    // Enter the number of people as 2
    cy.get('input[name="people"]').clear().type("2");

    // Enter the number of lanes as 1
    cy.get('input[name="lanes"]').clear().type("1");
  });
  it("Error message for number of people as 0", () => {
    cy.visit("http://localhost:5173/");

    // Fill in booking details and enter the number of people as 0
    cy.get('input[name="when"]').type("2023-07-08");
    cy.get('input[name="time"]').type("12:00");
    cy.get('input[name="people"]').clear().type("0");
    cy.get('input[name="lanes"]').type("1");
    cy.get(".shoes__button").as("addButton").click();
    cy.get(".shoes__input").eq(0).type("38");
    cy.get(".booking__button").click();

    // Verifying that the error message is displayed
    cy.contains(
      "Fill out all the fields and make sure that people and shoes is the same number."
    ).should("be.visible");
  });
});
