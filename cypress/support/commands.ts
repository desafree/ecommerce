/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test-id=${selector}]`);
});

Cypress.Commands.add("clickOutside", () => {
  return cy.get("body").click(0, 0);
});
