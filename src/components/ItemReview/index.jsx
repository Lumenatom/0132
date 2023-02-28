import React from "react";
import style from "./style.module.css";

const ItemReview = ({ elem }) => {
  return (
    <div className={style.wrapperItem}>
      <div className={style.topBlockItem}>
        <div className={style.author}>{elem.author}</div>
        <div className={style.dateCreated}>{elem.dateCreated}</div>
      </div>
      <div className={style.text}>{elem.text}</div>
    </div>
  );
};

export default ItemReview;
