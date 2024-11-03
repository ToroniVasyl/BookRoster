describe('Header Component', () => {
    beforeEach(() => {
      // Перед кожним тестом відкриваємо домашню сторінку або сторінку з заголовком
      cy.visit('/'); // Замість '/' вкажіть URL, де розміщено ваш заголовок
    });
  
    it('should display header with correct title', () => {
      // Перевіряємо, що заголовок містить певний текст
      cy.get('header') // Заміна на селектор вашого заголовка
        .should('exist') // Перевірка, що заголовок існує
        .and('contain', 'BookRoster'); // Заміна на текст у вашому заголовку
    });
  
    it('should have working navigation links', () => {
      // Перевірка, що посилання в заголовку працюють
      cy.get('header nav a') // Заміна на селектор всіх навігаційних посилань
        .each(link => {
          cy.wrap(link).should('have.attr', 'href').and('not.be.empty'); // Перевірка, що у кожного посилання є href
          cy.wrap(link).click(); // Клікаємо на посилання
          cy.url().should('not.be.empty'); // Перевірка, що URL не порожній після переходу
          cy.go('back'); // Повертаємося назад
        });
    });
  
    it('should display logo', () => {
      // Перевірка наявності логотипу
      cy.get('header .logo') // Заміна на селектор логотипу
        .should('exist') // Перевірка, що логотип існує
        .and('be.visible'); // Перевірка, що логотип видимий
    });
  
    it('should show dropdown menu when clicking on profile icon', () => {
      // Перевірка наявності випадаючого меню при натисканні на іконку профілю
      cy.get('header .profile-icon') // Заміна на селектор іконки профілю
        .click(); // Клікаємо на іконку профілю
      cy.get('header .dropdown-menu') // Заміна на селектор випадаючого меню
        .should('be.visible'); // Перевірка, що меню видиме
    });
  });
  