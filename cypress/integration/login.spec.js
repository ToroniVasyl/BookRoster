describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/login'); // Замініть на URL вашої сторінки логіна
    });
  
    it('should log in successfully with valid credentials', () => {
      cy.get('input[type="email"]').type('your_email@example.com'); // Заміна на ваш email
      cy.get('input[type="password"]').type('your_password'); // Заміна на ваш пароль
      cy.get('.continue-button').click(); // Заміна на клас вашої кнопки входу
  
      // Перевірка, що ви перенаправлені на домашню сторінку
      cy.url().should('include', '/'); // Замініть на URL домашньої сторінки
      cy.contains('Welcome'); // Перевірка наявності тексту "Welcome" або будь-якого іншого тексту на домашній сторінці
    });
  
    it('should show an error for invalid credentials', () => {
      cy.get('input[type="email"]').type('invalid_email@example.com');
      cy.get('input[type="password"]').type('wrong_password');
      cy.get('.continue-button').click();
  
      // Перевірка наявності помилки
      cy.get('.error').should('contain', "Sorry, could not find your account");
    });
  });
  