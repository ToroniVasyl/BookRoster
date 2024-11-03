// cypress/integration/footer.cy.jsx
import React from 'react';
import Footer from './Footer'; 
import { mount } from '@cypress/react';

describe('Footer Component', () => {
  
  beforeEach(() => {
    mount(<Footer />); 
  });

  it('should render the footer', () => {
    cy.get('footer').should('exist'); 
  });
});
