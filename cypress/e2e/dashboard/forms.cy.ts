describe("Add users test", () => {
  it("Success load form", () => {
    cy.visit("/form");
    cy.get("input[name=name]").type("Fajrin");
    cy.get("input[name=phone]").type("123123");
  });
});
