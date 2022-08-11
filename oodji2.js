describe('Тестирование Oodji', function () {
    
    it('Авторизация в Oodji', function () {
        cy.visit('https://www.oodji.com/');
        cy.get('[data-src="#popup_login"]').click();
        cy.get('#login > :nth-child(5) > input').type('валидный@gmail');
        cy.get(':nth-child(6) > input').type('валидный пароль');
        cy.get('#login > .btn > .button').click();
        cy.get('[href="/personal/"]').click();
        cy.contains('ЛИЧНЫЙ КАБИНЕТ');
    })
})