describe('form submit test suite', () => {
  it('Should submit successfully', () => {

    cy.log("Test Starting...");
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');
    cy.log("Form opened");

    cy.get('input[type="text"]').type('MOOSA SHAIK');
    cy.log("Name entered");

    cy.get('div[data-value="18 or above" ][role="radio"]').click();
    cy.log("Selected radio button");

    cy.get('div[role="listbox"]').click();
    cy.get('div[data-value="Yes"][role="option"]').click();
    cy.log("Selected option Yes");

    cy.get('div[role="button"]').contains('Submit').click();
    cy.log("Clicked on Submit");

    cy.contains('Your response has been recorded.');
    cy.log("Confirmed Response");
    cy.log("Test ended");
    
  })
})