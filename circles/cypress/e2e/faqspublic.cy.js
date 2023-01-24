describe('When not logged in ...', () => {
  it('should still be able to click on Help and see FAQs', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="help"]').click()
    cy.get('[data-cy="faqheading"]').should('have.text', "Useful Links & FAQ's");
  })
})