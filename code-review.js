describe("Kiwi page check - desktop", () => { //Name of tests are too general, maybe Kiwi - main page or landing page are better
                                              //
  before(() => {  //It is better use before each method, because we need to call Kiwi main page before each test, tests must be independented on each other
    cy.visit("https://kiwi.com/en/")
    cy.log("Accept cookies")
    cy.contains("Accept").click() //The method will not work because for pop up Accept Cookies I call log, which is a method for cypress command/print message 
                                  //and then call click on accept button, probably will not work due to insufficient identification of the element on the page
                                  //it is better to call element using class, id or name identificator
                                  //also use cy.get() method to get and click on element
  })
  it("should check filters", () => {
    cy.get("[data-test=FilterA]").as("modeFilter")//According to Cypress best practices, the syntax is not suitable, because I store an element on the page in a variable and then work with it
    cy.get("@modeFilter").click()
    cy.get("[data-test=FilterB]").as("baggageFilter")
    cy.get("@baggageFilter").should("exist").click() //In this first is Assert and then action
    cy.contains("Search").click() //For use find and the use button element on the page it is better to use cy.get() method
    //If I don´t consider last step as assert, your test works only with one assertion, line 13. It is better to use more asserts in UI tests, because one assert is more like for unit tests
  })
  it("should be redirected to search/results page", () => {//This test is probably dependent on previous test, this is not good solution, I mentioned also at line 3
    cy.get("[data-test=FlightResults]").should("exist")
      .should("be.visible") //Should exist/should be visible, the same result is likely to occur
    cy.log("Book button should be on the page") //I do the log first and then the contains should be the other way around
    cy.contains("Book")
  })

  //Overall you are on the good way with Cypress framework, but you need to think more about asserts in tests, cy.get() patterns and independence of tests
  //I can recommend you to study best practices by Cypress, you can search these tips in Cypress documentation
  //If you have any more question about my code review, feel free to call me or we can make face to face meeting