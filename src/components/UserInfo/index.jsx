import React from "react";
import style from "./style.module.css";
import UserPhoto from "../../assets/user_photo.png";
const UserInfo = () => {
  return (
    <div className={style.mainInfoUser}>
      <img className={style.image} src={UserPhoto} alt="user" />
      <div className={style.description}>
        <h2 className={style.name}>Eva Jonson</h2>
        <h2 className={style.role}>Sales Manager</h2>
        <div className={style.wrapperStatus}>
          <h2 className={style.status}>
            I will find the best offers for you. My services are absolutely
            free.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
