describe("Add pokemon tests", () => {
  before(() => {
    cy.visit("/");
  });

  it("select a pokemon from the list and update the details", () => {
    cy.server();
    cy.route("GET", `${Cypress.env("apiUrl")}/pokemons`).as("getPokemons");
    cy.route("DELETE", `${Cypress.env("apiUrl")}/pokemons`).as(
      "delete-pokemon"
    );
    cy.contains("Meltan").click();
    cy.get('button[id="delete"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Are you sure want delete this pokemon`);
    });

      
    cy.wait("@delete-pokemon").should("have.property", "status", 200);
    cy.wait("@getPokemons").should("have.property", "status", 200);
  });
});
