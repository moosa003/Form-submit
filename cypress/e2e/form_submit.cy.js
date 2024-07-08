describe('form submit test suite', () => {
  before(function() {
    cy.fixture('data').then(function(data) {

      globalThis.data = data;

    })
  })

  it('Should submit successfully', () => {

    cy.log("Test Starting...");
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');
    cy.log("Form opened");

    cy.xpath('//input[@type="text"]').type(data.name);
    cy.log("Name entered");

    cy.get(data.age).click();
    cy.log(data.comment1);

    cy.get('div[role="listbox"]').click();
    cy.get(data.chooseAoption).click();
    cy.log(data.comment2);

    cy.get('div[role="button"]').contains('Submit').click();
    cy.log("Clicked on Submit");

    cy.contains('Your response has been recorded.');
    cy.log("Confirmed Response");
    
    //cy.xpath('//a[text()="Submit another response"]').click();
    
  })
})