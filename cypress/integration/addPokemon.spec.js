describe("Add pokemon tests", () => {
  before(() => {
    cy.visit("http://localhost:3001//");
  });

  it("", () => {
    cy.server();
    cy.route("POST", "http://localhost:3000/pokemons").as("add-pokemon");
    // get pokemons from the request
    cy.request("http://localhost:3000").should((response) => {
      expect(response.status).to.eq(200);
    });

    // click on add pokemon
    cy.get('button[id="add pokemon"]').click();
    cy.get("form");

    // cy.contains("name").should("exist");
    cy.get('input[id="name"]').type("charit").should("have.value", "charit");

    cy.get('input[id="type"]').type("grass").should("have.value", "grass");

    cy.get('input[id="attack"]').type("25").should("have.value", "25");

    cy.get('input[id="defense"]').type(45).should("have.value", "45");

    cy.get('input[id="description"]')
      .type("This is a grass type pokemon")
      .should("have.value", "This is a grass type pokemon");

    cy.get("form").submit();

    cy.wait("@add-pokemon").should("have.property", "status", 201);

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`New Pokemon successfully created`);
    });

    // cy.contains("New Pokemon successfully created");
  });

  // cy.server("http:localhost:3000/pokemons");
  // cy.server();

  // cy.route('GET',"/pokemons").as('getPokemons')

  // cy.wait('@getPokemons')
  // cy.request("/pokemons").then((response) => {
  //   expect(response.body).to.have.property("code", 200);
  // });

  // cy.get('button[type="submit"]').click();
});
