describe('ProfilePage Component', () => {
    beforeEach(() => {
      // Перед кожним тестом відкриваємо сторінку профілю
      cy.visit('/profile'); // Замість '/profile' вкажіть URL вашої сторінки профілю
    });
  
    it('should display the profile icon', () => {
      // Перевіряємо, що іконка профілю відображається
      cy.get('.profile-icon') // Заміна на селектор іконки профілю
        .should('exist')
        .and('be.visible');
    });
  
    it('should display the nickname', () => {
      // Перевіряємо, що нікнейм відображається
      cy.get('.nickname') // Заміна на селектор для нікнейму
        .should('exist')
        .and('contain', '@nickname'); // Заміна на фактичний текст нікнейму
    });
  
    it('should display the counts for books, posts, and friends', () => {
      // Перевіряємо, що лічильники для книг, постів і друзів відображаються
      cy.get('.number-one') // Заміна на селектор для лічильника книг
        .should('exist')
        .and('be.visible');
        
      cy.get('.number-two') // Заміна на селектор для лічильника постів
        .should('exist')
        .and('be.visible');
  
      cy.get('.number-three') // Заміна на селектор для лічильника друзів
        .should('exist')
        .and('be.visible');
    });
  
    it('should have working My Books button', () => {
      // Перевірка, що кнопка "My Books" працює
      cy.get('.my-books-button') // Заміна на селектор кнопки "My Books"
        .click(); // Клікаємо на кнопку
      cy.url().should('include', '/my-books'); // Перевірка URL для сторінки з книгами
      cy.go('back'); // Повертаємося назад
    });
  
    it('should have working My Posts button', () => {
      // Перевірка, що кнопка "My Posts" працює
      cy.get('.my-books-button.second-button') // Заміна на селектор кнопки "My Posts"
        .click(); // Клікаємо на кнопку
      cy.url().should('include', '/my-posts'); // Перевірка URL для сторінки з постами
      cy.go('back'); // Повертаємося назад
    });
  
    it('should display the round add button', () => {
      // Перевіряємо, що кругла кнопка з плюсиком відображається
      cy.get('.round-button') // Заміна на селектор круглої кнопки
        .should('exist')
        .and('be.visible');
    });
  
    it('should navigate to the appropriate page when clicking the round add button', () => {
      // Перевірка переходу на відповідну сторінку при натисканні круглої кнопки
      cy.get('.round-button') // Заміна на селектор круглої кнопки
        .click(); // Клікаємо на кнопку
      cy.url().should('include', '/add'); // Заміна на URL для сторінки додавання
    });
  });
  