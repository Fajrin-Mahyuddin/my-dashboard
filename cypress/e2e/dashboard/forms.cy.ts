describe("Add users test", () => {
  it("Success load form", () => {
    cy.viewport(1440, 768);
    cy.visit("/forms");
    cy.get("input[name=name]")
      .clear()
      .blur()
      .should("have.class", "error")
      .type("f")
      .siblings("div")
      .contains("String must contain at least 2 character(s)");
    cy.get("input[name=name]")
      .clear()
      .type("Fajrin")
      .should("not.have.class", "error");

    cy.get("input[name=phone]")
      .clear()
      .blur()
      .should("have.class", "error")
      .type("abc")
      .siblings("div")
      .contains("Only number!");
    cy.get("input[name=phone]")
      .clear()
      .type("085")
      .should("not.have.class", "error");

    cy.get("select[name=gender]")
      .select("")
      .blur()
      .should("have.class", "error")
      .siblings("div")
      .contains("Choose one!");
    cy.get("select[name=gender]")
      .select("male")
      .should("not.have.class", "error");

    cy.get("textarea[name=address]")
      .clear()
      .blur()
      .should("have.class", "error")
      .siblings("div")
      .contains("Required!");
    cy.get("textarea[name=address]")
      .clear()
      .type("Testing for address")
      .should("not.have.class", "error");

    cy.get("button[type=reset]").click();
  });
});
