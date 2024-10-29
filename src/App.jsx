import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
    return (
        <Router>
            <div data-testid="app"> {/* Додайте data-testid тут */}
                <Header />
                <div id="tabs">
                    <div id="tab-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
                            <Route path="/note" element={<Note />} /> {/* Сторінка нотаток */}
                            <Route path="/login" element={<LoginPage />} /> {/* Сторінка входу */}
                            <Route path="/register" element={<RegistrationPage />} /> {/* Сторінка реєстрації */}
                            <Route path="/profile" element={<ProfilePage />} /> {/* Сторінка профілю */}
                            {/* Додайте інші маршрути за потребою */}
                        </Routes>
                        <Footer /> 
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
