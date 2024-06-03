describe("My first test", () => {
  it("visit the dashboard", () => {
    cy.intercept("GET", "https://localhost/api/lists/", []).as("getUserList");
    cy.visit("/");
    cy.contains("Dashboard");
    cy.get("p").contains("Messages");
    cy.get("p").contains("Inbox");
    cy.get("p").contains("Product sell");

    cy.wait("@getUserList").then((inter) => {
      console.log(inter);
    });
  });
});
