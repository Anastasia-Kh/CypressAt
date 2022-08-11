describe('Тестирование Joom', function () {
    
    it('Авторизация в Oodji (негатив)', function () {
        cy.visit('https://www.oodji.com/');
        cy.get('[data-src="#popup_login"]').click();
        cy.get('#login > :nth-child(5) > input').type('валидный@gmail');
        cy.get(':nth-child(6) > input').type('невалидный пароль');
        cy.get('#login > .btn > .button').click();
        cy.contains('Неверный логин или пароль');
    })
})