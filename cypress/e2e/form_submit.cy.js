import data_Entry_PO  from '../pageObject/Data_Entry_PO.cy'
/// <reference types="cypress" />


describe('form submit test suite', () => {

  before(function () {
    cy.fixture("userData").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    data_Entry_PO.visitPage();
    
  });

  it('Should submit successfully', () => {

    data_Entry_PO.dataEntry();

  })
})