const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig,
        },
        specPattern: ['src/**/*.cy.{js,jsx}'],
        setupNodeEvents(on, config) {
            // Налаштування @cypress/webpack-preprocessor з опціями Webpack
            const options = {
                webpackOptions: webpackConfig,
                watchOptions: {},
            };

            on('file:preprocessor', webpack(options));

            // Налаштування для покриття коду
            require('@cypress/code-coverage/task')(on, config);
            on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

            return config;
        },
    },
    e2e: {
        baseUrl: 'http://localhost:9000',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx}',
        setupNodeEvents(on, config) {
            // Додаткові налаштування для e2e тестів, якщо потрібно
            return config;
        },
    },
});
