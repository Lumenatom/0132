import React, { useCallback } from "react";
import style from "./style.module.css";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";
import { ReactComponent as CommentIcon } from "../../assets/comment.svg";

const HeaderReview = ({ setViewAllReviews, viewAllReviews }) => {
  const handleChangeView = useCallback((el) => {
    setViewAllReviews(el);
  }, []);
  return (
    <div className={style.wrapperHeaderReview}>
      <div className={style.reviewsPeriod}>
        <button
          onClick={() => handleChangeView(false)}
          className={viewAllReviews ? style.reviewsAll : style.reviewsLast}
        >
          Latest reviews
        </button>
        <button
          onClick={() => handleChangeView(true)}
          className={viewAllReviews ? style.reviewsLast : style.reviewsAll}
        >
          All reviews
        </button>
      </div>
      <div className={style.blockLikeAndComent}>
        <div className={style.iconsFeedback}>
          <LikeIcon />
          <h2 className={style.valueFeedback}>131</h2>
        </div>
        <div className={style.iconsFeedback}>
          <CommentIcon />
          <h2 className={style.valueFeedback}>14</h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderReview;
