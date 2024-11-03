describe('HomePage Component', () => {
    beforeEach(() => {
      // Перед кожним тестом відкриваємо домашню сторінку
      cy.visit('/'); // Замість '/' вкажіть URL вашої домашньої сторінки
    });
  
    it('should display the correct title', () => {
      // Перевіряємо, що заголовок сторінки є правильним
      cy.title().should('include', 'BookRoster'); // Заміна на ваш заголовок
    });
  
    it('should display main content', () => {
      // Перевіряємо, що основний контент сторінки присутній
      cy.get('.main-content') // Заміна на селектор основного контенту
        .should('exist') // Перевірка, що основний контент існує
        .and('be.visible'); // Перевірка, що основний контент видимий
    });
  
    it('should have working navigation links', () => {
      // Перевірка, що навігаційні посилання працюють
      cy.get('nav a') // Заміна на селектор всіх навігаційних посилань
        .each(link => {
          cy.wrap(link).should('have.attr', 'href').and('not.be.empty'); // Перевірка, що у кожного посилання є href
          cy.wrap(link).click(); // Клікаємо на посилання
          cy.url().should('not.be.empty'); // Перевірка, що URL не порожній після переходу
          cy.go('back'); // Повертаємося назад
        });
    });
  
    it('should display featured books section', () => {
      // Перевірка наявності секції з рекомендованими книгами
      cy.get('.featured-books') // Заміна на селектор секції з книгами
        .should('exist') // Перевірка, що секція існує
        .and('be.visible'); // Перевірка, що секція видима
    });
  
    it('should load books correctly', () => {
      // Перевірка, що книги завантажуються
      cy.get('.book-item') // Заміна на селектор елементів книг
        .should('have.length.greaterThan', 0); // Перевірка, що є хоча б одна книга
    });
  
    it('should navigate to the login page when clicking the login button', () => {
      // Перевірка переходу на сторінку входу
      cy.get('.login-button') // Заміна на селектор кнопки входу
        .click(); // Клікаємо на кнопку
      cy.url().should('include', '/login'); // Перевірка URL для сторінки входу
    });
  });
  