describe("empty spec", () => {
  it("passes", () => {
    cy.visit('example.cypress.io')
    cy.readFile("cypress/fixtures/example.csv").then((text) => {
      cy.readFile("cypress/fixtures/example-copy.csv").should("eq", text);
    });
  });
});
