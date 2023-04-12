/// <reference types="cypress" />

var Chance = require('chance');



describe('Cadastro', () => {
    it('Quando Eu informo os dados e finalizar, então o cadastro deve ser efetuado', () => {
        
        cy.visit('https://form-agilizei.netlify.app/index.html')
        cy.get('input[name="firstName"]').type(chance.first({gender: "male"}))
        cy.get('input[name="lastName"]').type(chance.last({gender: "male"}))
        var testando = cy.get('textarea[name="adress"]').type(chance.address()).toString()
        cy.get('input[name="emailAdress"]').type(chance.email())
        cy.get('input[name="radioGender"]').check('m')
        cy.get('input[id="checkbox1"]').check()
        cy.get('input[id="checkbox2"]').check()
        cy.get('input[id="checkbox3"]').check()
        cy.get('select#countries').select('Japão', { force: true })
        cy.get('select#years').select('1983', { force: true })
        cy.get('select#months').select('Outubro', { force: true })
        cy.get('select#days').select('22', { force: true })
        cy.get('input#firstpassword').type('Aa22456')
        cy.get('input#secondpassword').type('Aa22456')
        cy.get('button#submitbtn').click()

        cy.url().should('be.equal', 'https://form-agilizei.netlify.app/listagem.html')
        cy.contains('Listagem').should('be.visible')
        
    });
});