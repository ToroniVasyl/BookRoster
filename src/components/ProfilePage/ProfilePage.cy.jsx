describe('ProfilePage Component', () => {
    beforeEach(() => {
      // Зайти на сторінку з ProfilePage перед кожним тестом
      cy.visit('/profile'); // Заміна на правильний маршрут вашого компонента
    });
  
    it('should render the ProfilePage component', () => {
      // Перевіряємо, чи рендериться загальний контейнер
      cy.get('.profile-page').should('exist');
      
      // Перевіряємо, чи відображається іконка профілю
      cy.get('.profile-icon').should('exist');
  
      // Перевіряємо, що нікнейм відображається
      cy.get('.nickname').should('contain', '@nickname');
    });
  
    it('should display numbers for books, posts, and users', () => {
      // Перевіряємо, що значення для книг, постів та користувачів рівні 0
      cy.get('.number-one').should('contain', '0');
      cy.get('.number-two').should('contain', '0');
      cy.get('.number-three').should('contain', '0');
    });
  
    it('should render buttons', () => {
      // Перевіряємо, чи рендеряться кнопки
      cy.get('.my-books-button').should('exist');
      cy.get('.my-books-button.second-button').should('exist');
      cy.get('.round-button').should('exist');
      
      // Перевіряємо, що текст на кнопках правильний
      cy.get('.my-books-button').should('contain', 'My Books');
      cy.get('.my-books-button.second-button').should('contain', 'My Posts');
    });
  
    it('should have a round button with a plus icon', () => {
      // Перевіряємо, що кругла кнопка з іконкою плюсика відображається
      cy.get('.round-button').should('exist');
      cy.get('.plus-icon').should('exist');
    });
  });
  