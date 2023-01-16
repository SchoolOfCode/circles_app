describe('When not logged in yet...', () => {
  it('should still be able to click on Help and see FAQs', () => {
    cy.visit('https://circlesapp.netlify.app/')
    cy.get('[data-cy="help"]').click()
    

    cy.get('.hidden > :nth-child(3) > a').click();
    cy.get('.bg-gradient-to-b').click();
    cy.get(':nth-child(1) > .mt-1').click();
    cy.get('[data-cy="faq1heading"]').should('have.text', 'Lorem ipsum dolor sit amet.');
  })
})