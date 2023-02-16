import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import STStyle from "./components-css/SingleTrend.module.css";

function SingleTrend({ name, volume, url }) {
  return (
    <>
      <a href={url} target="_blank" className="trend_link">
        <div className={STStyle.single_trend}>
          <div className={STStyle.single_trend_text}>
            <p className={STStyle.type_of_trend}>Trending</p>
            <p className={STStyle.topic_trend}>{name}</p>
            <p className={STStyle.number_of_tweets}>
              {volume !== null ? volume : "Unkown Number Of"} Tweets
            </p>
          </div>
          <div className={STStyle.single_trend_more_container}>
            <FontAwesomeIcon
              icon={faEllipsis}
              className={STStyle.single_trend_more_icon}
            />
          </div>
        </div>
      </a>
    </>
  );
}

export default SingleTrend;
