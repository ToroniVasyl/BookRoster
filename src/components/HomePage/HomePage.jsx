import React from 'react';
import './HomePage.css';
import image7 from '../img/image7.jpg'; 
import image8 from '../img/image8.jpg'; 
import image9 from '../img/image9.jpg'; 
import image10 from '../img/image10.jpg';
import image11 from '../img/image11.jpg';
import image12 from '../img/image12.jpg';
import images13 from '../img/images13.jpg';
import images14 from '../img/images14.jpg';
import images15 from '../img/images15.jpg';
import images16 from '../img/images16.jpg';
import images17 from '../img/images17.jpg';
import images18 from '../img/images18.jpg';

const HomePage = () => {
    const users = [
        { id: 1, nickname: '', description: 'Кожна книга — це як лист у пляшці, відправлений кимось у майбутнє, щоб знайти свого читача.', image: image7 },
        { id: 2, nickname: '', description: 'У книгах ми зустрічаємося з героями, яких неможливо зустріти в реальному житті, але які залишаються з нами назавжди', image: image8 },
        { id: 3, nickname: '', description: 'Читання — це чарівництво, що дозволяє нам побачити світ іншими очима.', image: image9 },
        { id: 4, nickname: '', description: 'Книги — це найкращі супутники, бо вони завжди поруч, коли хочеш втекти від реальності', image: image10 },
        { id: 5, nickname: '', description: 'Справжнє читання — це мистецтво подорожі в часі, де ми відкриваємо нові світи і живемо тисячі життів', image: image11 },
        { id: 6, nickname: '', description: 'Книги допомагають нам зрозуміти інших і віднайти самих себе серед рядків історій', image: image12 },
        { id: 7, nickname: '', description: 'Кожна книга — це портал у новий світ, варто лише перегорнути сторінку', image: images13 },
        { id: 8, nickname: '', description: 'Іноді одна прочитана сторінка здатна змінити ціле життя', image: images14 },
        { id: 9, nickname: '', description: 'Книга — це подарунок, який можна розгорнути тисячі разів', image: images15 },
        { id: 10, nickname: '', description: 'Справжня магія починається там, де слова оживають у нашій уяві', image: images16 },
        { id: 11, nickname: '', description: 'Бібліотека — це місце, де збираються історії, щоб знайти своїх слухачів', image: images17 },
        { id: 12, nickname: '', description: 'Книги допомагають нам знайти себе в інших і побачити світ новими очима', image: images18 },
    ];

    return (
        <div className="homepage">
            <div className="photo-grid">
                {users.map(user => (
                    <div key={user.id} className="photo-item">
                        <img src={user.image} alt={user.nickname} className="photo" />
                        <div className="user-info">
                            <h3 className="nickname">{user.nickname}</h3>
                            <p className="description">{user.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
