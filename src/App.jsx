import React from 'react';

import Header from './components/Header/Header';

const App = () => {
    return (
        <div data-testid="app"> {/* Додайте data-testid тут */}
            <Header />
            <div id="tabs">
                <div id="tab-content"></div>
            </div>
        </div>
    );
};

export default App;
