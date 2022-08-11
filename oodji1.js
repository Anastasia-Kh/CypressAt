describe('Тестирование Oodji', function () {
    
    it('Дохожу до корзины в Oodji', function () {
        cy.visit('https://www.oodji.com/');
        cy.get('#title-search-input').type('блузка').type('{enter}');
        cy.get('[data-product-id="121593"] > .name > .gtmProductClick').click();
        cy.get('.sizes > .inputGroup > :nth-child(1) > label').click();
        cy.get(':nth-child(2) > .button').click();
        cy.get('.gotocart').click();
        cy.contains('Блузка базовая из вискозы');
    })
})