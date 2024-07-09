class Data_Entry_PO {

    visitPage() {

        cy.log("Test Starting...");
        cy.visit(Cypress.env("google_url"));
        cy.log("Form opened");
    }

    dataEntry() {

        globalThis.data.forEach(function(ele) {
            cy.enter_data(ele.name, ele.age, ele.comment1, ele.chooseAoption, ele.comment2);
      
        })
    
    }

}

module.exports = new Data_Entry_PO();