Feature: Application Stages

Scenario:  Applicant moved to interview stage
    Given an applicant "emma stewart" has "APPLIED" and qualified for interview
    When app user moves applicant "emma stewart" from "APPLIED" to "interview" stage
    Then applicant "emma stewart" should move from "APPLIED" to "INTERVIEWED" stage
 
Scenario: Applicant moved to hired stage
    Given an applicant "emma stewart" "INTERVIEWED" and passed
    When app user moves applicant "emma stewart" from "INTERVIEWED" to "hired" stage
    Then applicant "emma stewart" should move from "INTERVIEWED" to "HIRED" stage


Scenario: Applicant moved from hired back to Applied stage
    Given an applicant "emma stewart" "INTERVIEWED" and passed
    When app user moves applicant "emma stewart" from "INTERVIEWED" to "hired" stage
    And app user decides to move applicant "emma stewart" back to "APPLIED" stage
    Then applicant "emma stewart" should be moved successfully to "APPLIED" stage