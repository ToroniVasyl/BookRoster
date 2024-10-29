import React from 'react';
import './ProfilePage.css'; // Імпортуємо файл стилів
import { AiOutlineUser } from "react-icons/ai"; // Імпорт іконки
import { BsBookFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai"; // Іконка плюсика

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-image-container">
        <div className="profile-icon">
          <AiOutlineUser /> {/* Іконка профілю */}
        </div>
      </div>
      <div className="nickname">{"@nickname"}</div>
      <div className="numbers-container">
        <div className="number-one">
          <BsBookFill />
          0
        </div>
        <div className="number-two">
          <AiOutlineUsergroupAdd />
          0
        </div>
        <div className="number-three">
          <AiOutlineUser />
          0
        </div>
      </div>
      {/* Перша кнопка */}
      <button className="my-books-button">My Books</button>
      {/* Друга кнопка */}
      <button className="my-books-button second-button">My Books</button>
      {/* Кругла кнопка з плюсиком */}
      <button className="round-button">
        <AiOutlinePlus className="plus-icon" />
      </button>
    </div>
  );
};

export default ProfilePage;
