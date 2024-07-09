// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("enter_data", (name, age, c1, chooseAoption, c2) => {
    
    
  
    cy.xpath('//input[@type="text"]').type(name);
    cy.log("Name entered");
  
    cy.get(age).click();
    cy.log(c1);
  
    cy.get('div[role="listbox"]').click();
    cy.get(chooseAoption).click();
    cy.log(c2);
  
    cy.get('div[role="button"]').contains('Submit').click();
    cy.log("Clicked on Submit");
  
    cy.contains('Your response has been recorded.');
    cy.log("Confirmed Response");
    cy.go('back');
})


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
