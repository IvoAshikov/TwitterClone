import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import STCBYStyle from "./components-css/SingleTweetCreatedByYou.module.css";
import profilePicture from "../images/twitter-profile-pic.png";

function SingleTweetCreatedByYou({
  text,
  replies,
  likes,
  retweets,
  name,
  username,
  verified,
}) {
  return (
    <>
      <div className={STCBYStyle.single_tweet_container}>
        {/* Profile Picture of the User */}
        <div className={STCBYStyle.single_tweet_pic}>
          <img
            className={STCBYStyle.profile_pic_single}
            src={profilePicture}
            alt="Profile Pic"
          ></img>
        </div>
        {/* End of Profile Picture of the User */}
        {/* The Main Content of the Tweet */}
        <div className={STCBYStyle.single_tweet_content_container}>
          <div className={STCBYStyle.st_author}>
            <div className={STCBYStyle.st_author_name}>
              {name} {verified && <i className="bi bi-patch-check-fill"></i>}
            </div>
            <div className={STCBYStyle.st_author_tag}>@{username}</div>
            <div className={STCBYStyle.st_author_dot}>·</div>
            <div className={STCBYStyle.st_author_timestamp}>20h</div>
            <div className={STCBYStyle.st_author_more_icon_container}>
              <FontAwesomeIcon
                icon={faEllipsis}
                className={STCBYStyle.st_more_icon}
              />
            </div>
          </div>
          <div className={STCBYStyle.st_main_content}>
            <p className={STCBYStyle.st_main_content_text}>{text}</p>
          </div>
          <div className={STCBYStyle.st_buttons_icons}>
            <div className={STCBYStyle.st_reply}>
              <div className={STCBYStyle.reply_helper}>
                <i className={`bi bi-chat ${STCBYStyle.icons_helper}`}></i>
              </div>
              <span
                className={`${STCBYStyle.number_helper} ${STCBYStyle.number_helper1}`}
              >
                {replies}
              </span>
            </div>
            <div className={STCBYStyle.st_retweet}>
              <div className={STCBYStyle.retweet_helper}>
                <i
                  className={`bi bi-arrow-left-right ${STCBYStyle.icons_helper}`}
                ></i>
              </div>
              <span
                className={`${STCBYStyle.number_helper} ${STCBYStyle.number_helper2}`}
              >
                {retweets}
              </span>
            </div>
            <div className={STCBYStyle.st_like}>
              <div className={STCBYStyle.like_helper}>
                <i className={`bi bi-heart ${STCBYStyle.icons_helper}`}></i>
              </div>
              <span
                className={`${STCBYStyle.number_helper} ${STCBYStyle.number_helper3}`}
              >
                {likes}
              </span>
            </div>
            <div className={STCBYStyle.st_share}>
              <div className={STCBYStyle.share_helper}>
                <i className="bi bi-box-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
        {/* End of Main Content */}
      </div>
    </>
  );
}

export default SingleTweetCreatedByYou;
