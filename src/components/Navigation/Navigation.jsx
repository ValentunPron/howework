import React from "react"
import N from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={N.navigation}>
      <div className={N.menuItems}>
        <div>
          <a href="#">Главная</a>
          </div>
        <div>
          <a href="#">Галерея</a>
          </div>
        <div>
          <a href="#">Контакты</a>
          </div>
      </div>
    </nav>
  );
};

export default  Navigation; 