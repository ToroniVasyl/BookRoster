describe('Note Component', () => {
   
  
    it('should render the Note component', () => {
      // Перевіряємо, чи рендериться загальний контейнер
      cy.get('.text-input-page').should('exist');
      
      // Перевіряємо, що кнопка додавання з'являється
      cy.get('.add-button').should('exist');
      cy.get('.button-label').should('contain', 'Add new note');
    });
  
    it('should open modal on button click', () => {
      // Клік на кнопку, щоб відкрити модальне вікно
      cy.get('.add-button').click();
  
      // Перевіряємо, що модальне вікно відкрите
      cy.get('.input-modal').should('exist');
    });
  
    it('should add a new note', () => {
      // Клік на кнопку, щоб відкрити модальне вікно
      cy.get('.add-button').click();
  
      // Введення тексту в текстове поле
      cy.get('.text-input').type('Тестова нотатка');
  
      // Клік на кнопку створення нотатки
      cy.get('.input-modal button').contains('Create').click();
  
      // Перевіряємо, що нова нотатка з'являється в списку
      cy.get('.entries .entry').should('contain', 'Тестова нотатка');
    });
  
    it('should not add an empty note', () => {
      // Клік на кнопку, щоб відкрити модальне вікно
      cy.get('.add-button').click();
  
      // Клік на кнопку створення нотатки без введення тексту
      cy.get('.input-modal button').contains('Create').click();
  
      // Перевіряємо, що список нотаток все ще порожній
      cy.get('.entries .entry').should('have.length', 0);
    });
  });
  