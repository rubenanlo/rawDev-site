describe("Index", () => {
  it("says Connecting", () => {
    cy.visit("/");
    cy.get("a").should("contain", "Connecting");
  });
});
