const locators = require('../../../utilities/locators');
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(
  `an applicant {string} has {string} and qualified for interview`,
  (applicant, initialStage) => {
    cy.visit('/');
    cy.get(locators.APP_COLUMN)
      .eq(locators[initialStage])
      .should('contain', applicant);
  },
);

Then(
  `applicant {string} should move from {string} to {string} stage`,
  (applicant, initialStage, finalStage) => {
    cy.get(locators.APP_COLUMN)
      .eq(locators[finalStage])
      .should('contain', applicant);
    cy.get(locators.APP_COLUMN)
      .eq(locators[initialStage])
      .should('not.contain', applicant);
  },
);
