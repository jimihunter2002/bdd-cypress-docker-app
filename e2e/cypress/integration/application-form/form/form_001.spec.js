const locators = require('../../../utilities/locators');
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Then(`application should be successful`, () => {
  cy.get(locators.APP_CONTAINER).should($appContainer => {
    expect($appContainer, 'app container').to.contain(
      'Application successfully submitted',
    );
  });
});
