const locators = require('../utilities/locators');

Cypress.Commands.add('fillApplicationForm', (name, city) => {
  cy.get(locators.FORM).within($form => {
    cy.get(locators.FORM_NAME).type(name);
    cy.get(locators.FORM_CITY).type(city);
  });
});

Cypress.Commands.add('submitApplication', () => {
  cy.get(locators.SUBMIT_BUTTON).click();
});

Cypress.Commands.add('clearInputFields', () => {
  cy.get(locators.FORM).within($form => {
    cy.get(locators.BUTTON).click();
  });
});

Cypress.Commands.add('getInputText', locatorLabel => {
  cy.get(locators[locatorLabel]).invoke('val');
});

Cypress.Commands.add('moveCardForward', (index, name) => {
  cy.get(locators.APP_COLUMN)
    .eq(index)
    .within(() => {
      cy.get(locators.APPLICANT_CARDS)
        .contains(name)
        .parent()
        .parent()
        .next()
        .within(() => {
          cy.get(locators.FORWARD_BUTTON).click();
        });
    });
});

Cypress.Commands.add('moveCardBackward', (index, name) => {
  cy.get(locators.APP_COLUMN)
    .eq(index)
    .within(() => {
      cy.get(locators.APPLICANT_CARDS)
        .contains(name)
        .parent()
        .parent()
        .next()
        .within(() => {
          cy.get(locators.BUTTON).first().click();
        });
    });
});
