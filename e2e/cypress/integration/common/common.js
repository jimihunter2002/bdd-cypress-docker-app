const locators = require('../../utilities/locators');
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given(`an applicant visits crew application`, () => {
  cy.visit('/');
});

Given(
  `an applicant {string} {string} and passed`,
  (applicant, initialStage) => {
    //verify applicant is in applied stage
    cy.visit('/');
    cy.get(locators.APP_COLUMN)
      .eq(locators[initialStage])
      .should('not.contain', applicant);
    cy.moveCardForward(0, applicant);

    //verify applicant has progressed to interview stage
    cy.get(locators.APP_COLUMN)
      .eq(locators[initialStage])
      .should('contain', 'emma stewart');
    cy.get(locators.APP_COLUMN)
      .eq(locators['APPLIED'])
      .should('not.contain', 'emma stewart');
  },
);

When(`applicant fills name {string} and city {string}`, (name, city) => {
  cy.fillApplicationForm(name, city);
});

When(
  `app user moves applicant {string} from {string} to {string} stage`,
  (applicant, start) => {
    cy.moveCardForward(locators[start], applicant);
  },
);
