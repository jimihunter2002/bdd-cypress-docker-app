const locators = require('../../../utilities/locators');
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Then(
  `applicant {string} should move from {string} to {string} stage`,
  (applicant, initialStage, finalStage) => {
    cy.get(locators.APP_COLUMN)
      .eq(locators[initialStage])
      .should('not.contain', applicant);
    cy.get(locators.APP_COLUMN)
      .eq(locators[finalStage])
      .should('contain', applicant);
  },
);
