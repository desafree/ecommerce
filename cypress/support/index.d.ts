declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<JQuery<HTMLElement>>;
    clickOutside(): Chainable<JQuery<HTMLElement>>;
  }
}
