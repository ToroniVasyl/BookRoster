describe('RegistrationPage Component', () => {
    
  
    it('should render the RegistrationPage component', () => {
      // Перевіряємо, чи рендериться заголовок
      cy.get('h2').should('contain', 'Registration');
  
      // Перевіряємо, чи рендеряться поля вводу
      cy.get('.input-field').should('have.length', 3);
      cy.get('.input-field').first().should('have.attr', 'placeholder', 'Email');
      cy.get('.input-field').eq(1).should('have.attr', 'placeholder', 'password');
      cy.get('.input-field').last().should('have.attr', 'placeholder', 'password again');
  
      // Перевіряємо, чи рендериться кнопка "Continue"
      cy.get('.continue-button').should('exist');
    });
  
    it('should register a user with valid credentials', () => {
      // Заповнюємо поля вводу дійсними даними
      cy.get('.input-field').first().type('test@example.com'); // Заміна на дійсну електронну адресу
      cy.get('.input-field').eq(1).type('password123'); // Заміна на дійсний пароль
      cy.get('.input-field').last().type('password123'); // Повторіть пароль
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що користувача перенаправлено на домашню сторінку
      cy.url().should('eq', Cypress.config().baseUrl + '/'); // Переконайтесь, що базовий URL правильний
    });
  
    it('should show an error message if passwords do not match', () => {
      // Заповнюємо поля вводу
      cy.get('.input-field').first().type('test@example.com'); // Заміна на дійсну електронну адресу
      cy.get('.input-field').eq(1).type('password123'); // Заміна на дійсний пароль
      cy.get('.input-field').last().type('differentpassword'); // Неправильний повторений пароль
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що відображається повідомлення про помилку
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Passwords do not match');
      });
    });
  
    it('should show an error message if password is too short', () => {
      // Заповнюємо поля вводу
      cy.get('.input-field').first().type('test@example.com'); // Заміна на дійсну електронну адресу
      cy.get('.input-field').eq(1).type('short'); // Занадто короткий пароль
      cy.get('.input-field').last().type('short'); // Повторіть занадто короткий пароль
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що відображається повідомлення про помилку
      cy.get('.error').should('exist').and('contain', 'Password is too short');
    });
  
    it('should show an error message if registration fails', () => {
      // Заповнюємо поля вводу з даними, які можуть викликати помилку (наприклад, існуюча електронна адреса)
      cy.get('.input-field').first().type('existing@example.com'); // Замініть на існуючу електронну адресу
      cy.get('.input-field').eq(1).type('password123');
      cy.get('.input-field').last().type('password123');
  
      // Клікаємо на кнопку "Continue"
      cy.get('.continue-button').click();
  
      // Перевіряємо, що відображається повідомлення про помилку
      cy.get('.error').should('exist').and('contain', 'There was a problem with the registration.');
    });
  });
  