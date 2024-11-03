describe('Footer Component', () => {
    beforeEach(() => {
      
      cy.visit('/'); 
    });
  
    it('should display footer with correct text', () => {
      // Перевіряємо, що футер містить певний текст
      cy.get('footer') // Заміна на селектор вашого футера
        .should('exist') // Перевірка, що футер існує
        .and('contain', '© 2024 BookRoster'); // Заміна на текст у вашому футері
    });
  
    it('should have working links in the footer', () => {
      // Перевірка, що посилання у футері працюють
      cy.get('footer a') // Заміна на селектор всіх посилань у футері
        .each(link => {
          cy.wrap(link).should('have.attr', 'href').and('not.be.empty'); // Перевірка, що у кожного посилання є href
          cy.wrap(link).click(); // Клікаємо на посилання
          cy.url().should('not.be.empty'); // Перевірка, що URL не порожній після переходу
          cy.go('back'); // Повертаємося назад
        });
    });
  
    it('should display social media links', () => {
      // Перевірка наявності соціальних медіа посилань
      cy.get('footer .social-links') // Заміна на селектор елементів соціальних медіа
        .should('exist') // Перевірка, що блок соціальних медіа існує
        .find('a') // Знаходимо всі посилання
        .should('have.length.greaterThan', 0); // Перевіряємо, що є хоча б одне посилання
    });
  });
  