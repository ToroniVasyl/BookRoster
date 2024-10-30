import './bootsrap'; // Перевірте правильність шляху до bootstrap

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Отримуємо DOM-елемент для рендеринга React додатку
const domNode = document.querySelector('#react-app');

// Створюємо корінь React
const root = createRoot(domNode);

// Рендеримо компонент App
root.render(<App />);
