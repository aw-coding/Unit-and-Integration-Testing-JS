// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have display an updated running total', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '25')
  })

  it('should update display to show the results of an arithmetical operation', () =>{
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '18')
  })

  it('should be able to chain multitple arithmetic operations', () =>{
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '17')
  })

  it('be able to display negative numbered results of an arithmetical operation', () =>{
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('be able to display decimal results of an arithmetical operation', () =>{
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('be able to very large results of an arithmetical operation', () =>{
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click(); //that's ten zeros
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click(); //that's ten zeros
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8.1e+21')
  })

  it('should be able to display `infinity` when an number is divided by zero', () =>{
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Infinity')
  })
})
