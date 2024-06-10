describe("My first test", () => {
  it("visit the dashboard", () => {
    cy.visit("/");
    cy.contains("Dashboard");
    cy.intercept(
      { method: "GET", url: "/api/lists" },
      { fixture: "dashboard_table.json" },
    ).as("getUserList");

    cy.wait("@getUserList");

    cy.get("table").contains("example one");
    cy.get("table").contains("tr", "address one");

    cy.get("p").contains("Messages");
    cy.get("p").contains("Inbox");
    cy.get("p").contains("Product sell");
  });
});
