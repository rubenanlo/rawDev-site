describe("Index", () => {
  it("says Connecting", () => {
    cy.visit("/login");
    cy.get("a").should("contain", "password");
  });
});
