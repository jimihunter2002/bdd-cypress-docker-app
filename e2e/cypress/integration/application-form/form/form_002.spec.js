import { And, Then } from 'cypress-cucumber-preprocessor/steps';

And(`applicant clears the input fileds`, () => {
  cy.clearInputFields();
});

Then(
  `input fields name {string} and city {string} should be empty`,
  (nameLabel, cityLabel) => {
    cy.getInputText(nameLabel).should(nameValue => {
      expect(nameValue).not.to.eq('Yusuf Ogunjimi');
    });
    cy.getInputText(cityLabel).should(cityValue => {
      expect(cityValue).not.to.eq('London');
    });
  },
);
