import React, { useCallback, useEffect, useState } from "react";
import style from "./style.module.css";
import ItemReview from "./ItemReview";
import UserInfo from "./UserInfo";
import Services from "./Services";
import HeaderReview from "./HeaderReview";
import { dataUsers } from "../Data";

const Feedback = () => {
  const [dataReviews, setDataReviews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [viewAllReviews, setViewAllReviews] = useState(false);
  useEffect(() => {
    setDataReviews(dataUsers);
  }, []);

  const sendMessage = useCallback(() => {
    const data = [];
    dataReviews.forEach((elem) => {
      data.push(elem);
    });
    data.unshift({
      id: 12323,
      author: "Arthur Shevtsov",
      dateCreated: "28 Feb 2023",
      text: inputValue,
    });
    setDataReviews(data);
    setInputValue("");
  }, [inputValue]);

  return (
    <div className={style.wrapper}>
      {!viewAllReviews && (
        <>
          <UserInfo />
          <Services />
        </>
      )}
      <div className={style.reviews}>
        <HeaderReview
          viewAllReviews={viewAllReviews}
          setViewAllReviews={setViewAllReviews}
        />
        <div className={style.reviewsItems}>
          {dataReviews.map((elem) => (
            <ItemReview elem={elem} key={elem.id} />
          ))}
        </div>
      </div>
      <div className={style.submitBlock}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={style.input}
        />
        <div className={style.btnBlock}>
          <button onClick={sendMessage} className={style.btn}>
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
