import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'; // Імпортуй компонент Home
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
    return (
        <div data-testid="app"> {/* Додайте data-testid тут */}
            <Header />
            <div id="tabs">
                <div id="tab-content">

                    <ProfilePage /> 
                    <Footer /> 

                </div>
            </div>
        </div>
    );
};

export default App;
