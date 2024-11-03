// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Ігнорування помилок, пов'язаних зі стилями, під час тестування
Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Unknown word') || err.message.includes('Cannot find module')) {
      return false; // Ігноруємо помилки, пов'язані зі стилями
    }
    return true;
  });
  
  // Import commands.js using ES2015 syntax:
  import '@cypress/code-coverage/support';
  import './commands';
  
  // Alternatively you can use CommonJS syntax:
  // require('./commands')
  import { mount } from 'cypress/react18';
  
  Cypress.Commands.add('mount', mount);
  
  // Example use:
  // cy.mount(<MyComponent />)
  