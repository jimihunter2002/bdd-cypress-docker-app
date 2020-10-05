import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import locators from '../../../utilities/locators';

And(
  `app user decides to move applicant {string} back to {string} stage`,
  applicant => {
    //move applicant from hired to interview
    cy.moveCardBackward(locators.HIRED, applicant);
    cy.get(locators.APP_COLUMN)
      .eq(locators.INTERVIEWED)
      .should('contain', applicant);
    cy.get(locators.APP_COLUMN)
      .eq(locators.HIRED)
      .should('not.contain', applicant);

    //move applicant from interview back to applied stage
    cy.moveCardBackward(locators.INTERVIEWED, applicant);
  },
);
Then(
  `applicant {string} should be moved successfully to {string} stage`,
  (applicant, stage) => {
    //verify applicant has been moved back to applied stage
    cy.get(locators.APP_COLUMN)
      .eq(locators.HIRED)
      .should('not.contain', applicant);
    cy.get(locators.APP_COLUMN)
      .eq(locators[stage])
      .should('contain', applicant);
  },
);
