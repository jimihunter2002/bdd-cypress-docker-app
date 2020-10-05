Feature: Form Validation

@sanity-tag
Scenario: Submit Application
    Given an applicant visits crew application
    When applicant fills name "Yusuf Ogunjimi" and city "London"
    Then application should be successful

@sanity-tags
Scenario: Clear Application Form
    Given an applicant visits crew application
    When applicant fills name "Yusuf Ogunjimi" and city "London"
    And applicant clears the input fileds
    Then input fields name "FORM_NAME" and city "FORM_CITY" should be empty

