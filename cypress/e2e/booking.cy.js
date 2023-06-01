describe("Booking functionality", () => {
  it("Allows the user to book a date, time, number of players, and select how many lanes", () => {
    cy.visit("http://localhost:5173/");

    // Enter a date thats past
    cy.get('input[name="when"]').type("2023-05-30");

    // Submit the form
    cy.get(".booking__button").click();

    // Verifying that the error message is displayed
    cy.contains(
      "Fill out all the fields and make sure that people and shoes is the same number."
    ).should("be.visible");

    // Enter a future
    cy.get('input[name="when"]').clear().type("2023-07-08");

    // Enter a time
    cy.get('input[name="time"]').type("14:00");

    // Enter the number of people as 0
    cy.get('input[name="people"]').clear().type("0");

    // Submit the form
    cy.get(".booking__button").click();

    // Verifying that the error message is displayed
    cy.contains(
      "Fill out all the fields and make sure that people and shoes is the same number."
    ).should("be.visible");

    // Enter the number of people as 2
    cy.get('input[name="people"]').clear().type("2");

    // Enter the number of lanes as 0
    cy.get('input[name="lanes"]').clear().type("0");

    // Submit the form
    cy.get(".booking__button").click();

    // Verifying that the error message is displayed
    cy.contains(
      "Fill out all the fields and make sure that people and shoes is the same number."
    ).should("be.visible");

    // Enter the number of lanes as 1
    cy.get('input[name="lanes"]').clear().type("1");
  });
});
