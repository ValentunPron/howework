import React from "react";
import H from "../Header/Header.module.css";
import image from "../../imgs/logo1.png"

const Header = () => {
  return (
    <header className={H.header}>
      <div className={H.wrapper}>
        <p className={H.headerText}>Электрик | Видеонаблюдение | Автоматизация</p>
      </div>
      <div className={H.pic}>
        <img src={image} alt="" />
      </div>

    </header>
  );
};

export default Header;
