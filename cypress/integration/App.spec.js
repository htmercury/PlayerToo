describe('Test App', () => {

    it('launches', () => {
        cy.visit('/');
    });

    // check content
    it('opens with app name', () => {
        cy.visit('/');
        cy.get('[data-cy=appTitle]').should('contain', 'Player, Too');
    });

    // check interaction, open sidebar and confirm user is correct
    it('interacts with sidebar and grab username', () => {
        cy.visit('/');
        cy.get('[data-cy=sideButton]').click();
        cy.get('[data-cy=userName]').should('contain', 'Andrea Silva');
    });
});