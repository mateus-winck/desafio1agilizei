/// <reference types="cypress" />

describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
        cy.fixture("listavazia").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        cy.get('table tbody tr').should('have.length', 0
        )
    });
    it('Quando houver cadastros, então a listagem deve exibir os cadastros', () => {
        cy.fixture("lista").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit('https://form-agilizei.netlify.app/listagem.html')

        cy.get('table tbody tr').should('have.length', 3)
    });
});