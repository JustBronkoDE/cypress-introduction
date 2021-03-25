describe('Form', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('has form fields', () => {
        cy.getBySelector('gender').should('be.visible')
        cy.getBySelector('name').should('be.visible')
        cy.getBySelector('email').should('be.visible')
        cy.getBySelector('password').should('be.visible')
        cy.getBySelector('checkbox').should('be.visible')
        cy.getBySelector('submit').should('be.visible')
    })

    it('cannot submit invalid input data', () => {
        cy.getBySelector('submit').click()

        cy.getBySelector('gender').parent().find('.invalid-feedback').should('be.visible')
        cy.getBySelector('name').parent().find('.invalid-feedback').should('be.visible')
        cy.getBySelector('email').parent().find('.invalid-feedback').should('be.visible')
        cy.getBySelector('password').parent().find('.invalid-feedback').should('be.visible')
        cy.getBySelector('checkbox').parent().find('.invalid-feedback').should('be.visible')
    })

    it('submits the form with valid input data', () => {
        const name = 'Lamine Dia'

        cy.getBySelector('gender').select('Male')
        cy.getBySelector('name').type(name)
        cy.getBySelector('email').type('lamine.dia@visuellverstehen.de')
        cy.getBySelector('password').type('password123')
        cy.getBySelector('checkbox').check()
        cy.getBySelector('submit').click()

        cy.location('href').should('include', 'success.html')
        cy.get('body').should('contain', `Thank you ${name}!`)
    })
})