import React from 'react';
import Header from './Header'; 
import { mount } from '@cypress/react';

  
    it('should render the Header component', () => {
      // Перевіряємо, чи заголовок рендериться
      cy.get('.header-title').contains('BookRoster').should('exist');
      // Перевіряємо, чи кнопка виходу рендериться
      cy.get('.header-button').should('exist');
    });
  
    it('should navigate to home on header title click', () => {
      // Клік на заголовок повинен переадресовувати на домашню сторінку
      cy.get('.header-title').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`); // Замініть на ваш базовий URL
    });
  
    it('should log out the user on button click', () => {
      // Сімітуємо вихід з облікового запису
      cy.get('.header-button').click();
  
      // Можливо, вам потрібно перевірити, чи переадресовує на домашню сторінку
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
      
      // Можливо, вам потрібно перевірити, що стан аутентифікації змінено.
      // Для цього можна зімітувати, що користувач більше не аутентифікований.
    });
  