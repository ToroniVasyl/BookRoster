describe('LoginPage Component', () => {
  
    it('should render the LoginPage component', () => {
      // Перевіряємо, чи рендериться заголовок
      cy.get('h2').should('contain', 'Login');
  
      // Перевіряємо, чи рендеряться поля вводу
      cy.get('.input-field').should('have.length', 2);
      cy.get('.input-field').first().should('have.attr', 'placeholder', 'Email');
      cy.get('.input-field').last().should('have.attr', 'placeholder', 'password');
      
      // Перевіряємо, чи рендериться кнопка "Continue"
      cy.get('.continue-button').should('exist');
      
      // Перевіряємо, чи рендериться кнопка для створення нового акаунта
      cy.get('.create-account-button').should('exist');
      
      // Перевіряємо, чи рендериться посилання на відновлення пароля
      cy.get('.forgot-password').should('exist');
    });
  
    it('should log in user with valid credentials', () => {
      // Заповнюємо поля вводу
      cy.get('.input-field').first().type('test@example.com'); // Замініть на дійсну електронну адресу
      cy.get('.input-field').last().type('password123'); // Замініть на дійсний пароль
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що користувача перенаправлено на домашню сторінку
      cy.url().should('eq', Cypress.config().baseUrl + '/'); // Переконайтесь, що базовий URL правильний
    });
  
    it('should show an error message for invalid credentials', () => {
      // Заповнюємо поля вводу неправильною інформацією
      cy.get('.input-field').first().type('wrong@example.com'); // Неправильна електронна адреса
      cy.get('.input-field').last().type('wrongpassword'); // Неправильний пароль
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що відображається повідомлення про помилку
      cy.get('#error').should('exist'); // Перевірте, що ID правильний
      cy.get('#error').should('contain', "Sorry, could not find your account");
    });
  });
  