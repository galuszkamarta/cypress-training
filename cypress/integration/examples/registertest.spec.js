describe('Test if we can create an account', () => {
    it('Test if we can create an account', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication');
        cy.url().should('include', 'authentication');
        cy.get('[id="email_create"]').type('galuszka.marta@wp.pl');
        //cy.pause();
        cy.get("button").contains('Create an account').click();
        cy.get('[id="customer_firstname"]').type('Marta');
        cy.get('[id="customer_lastname"]').type('Test');
        cy.get("button").contains('Register');
    });
})