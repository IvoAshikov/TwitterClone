import React, { useEffect, useState } from "react";
import TweetStyle from "./components-css/SingleTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { getBearerToken } from "../BearerToken";

function SingleTweet({ text, replies, likes, retweets, accountID }) {
  const [tweetName, setTweetName] = useState([]);
  const [moreOptions, setMoreOptions] = useState(false);
  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const handleClickOutside = (e) => {
    if (refOne.current !== null && !refOne.current.contains(e.target)) {
      setMoreOptions(false);
    }
  };

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(`http://localhost:8080/https://api.twitter.com/2/users/${accountID}?user.fields=profile_image_url,verified`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTweetName(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={TweetStyle.single_tweet_container}>
        {/* Profile Picture of the User */}
        <div className={TweetStyle.single_tweet_pic}>
          <img className={TweetStyle.profile_pic_single} src={tweetName.profile_image_url} alt="Profile Pic"></img>
        </div>
        {/* End of Profile Picture of the User */}
        {/* The Main Content of the Tweet */}
        <div className={TweetStyle.single_tweet_content_container}>
          <div className={TweetStyle.st_author}>
            <div className={TweetStyle.st_author_name}>
              {tweetName.name} {tweetName.verified && <i className="bi bi-patch-check-fill"></i>}
            </div>
            <div className={TweetStyle.st_author_tag}>@{tweetName.username}</div>
            <div className={TweetStyle.st_author_dot}>·</div>
            <div className={TweetStyle.st_author_timestamp}>20h</div>
            <div className={TweetStyle.st_author_more_icon_container} onClick={() => setMoreOptions(true)} ref={refOne}>
              <FontAwesomeIcon icon={faEllipsis} className={TweetStyle.st_more_icon} />
            </div>
            {/* Click on the Ellipsis */}
            {moreOptions && (
              <div className={TweetStyle.more_dropdown_container}>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-emoji-frown"></i>
                  <span className={TweetStyle.more_single_option_text}>Not interested in this Tweet</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-person-x"></i>
                  <span className={TweetStyle.more_single_option_text}>Unfollow @{tweetName.username}</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-card-list"></i>
                  <span className={TweetStyle.more_single_option_text}>Add/remove @{tweetName.username} from Lists</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-volume-mute"></i>
                  <span className={TweetStyle.more_single_option_text}>Mute @{tweetName.username}</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-slash-circle"></i>
                  <span className={TweetStyle.more_single_option_text}>Block @{tweetName.username}</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-code-slash"></i>
                  <span className={TweetStyle.more_single_option_text}>Embed Tweet</span>
                </div>
                <div className={TweetStyle.more_single_option}>
                  <i className="bi bi-flag"></i>
                  <span className={TweetStyle.more_single_option_text}>Report Tweet</span>
                </div>
              </div>
            )}
            {/* End of Ellipsis click */}
          </div>
          <div className={TweetStyle.st_main_content}>
            <p className={TweetStyle.st_main_content_text}>{text}</p>
          </div>
          <div className={TweetStyle.st_buttons_icons}>
            <div className={TweetStyle.st_reply}>
              <div className={TweetStyle.reply_helper}>
                <i className={`bi bi-chat ${TweetStyle.icons_helper}`}></i>
              </div>
              <span className={`${TweetStyle.number_helper} ${TweetStyle.number_helper1}`}>{replies}</span>
            </div>
            <div className={TweetStyle.st_retweet}>
              <div className={TweetStyle.retweet_helper}>
                <i className={`bi bi-arrow-left-right ${TweetStyle.icons_helper}`}></i>
              </div>
              <span className={`${TweetStyle.number_helper} ${TweetStyle.number_helper2}`}>{retweets}</span>
            </div>
            <div className={TweetStyle.st_like}>
              <div className={TweetStyle.like_helper}>
                <i className={`bi bi-heart ${TweetStyle.icons_helper}`}></i>
              </div>
              <span className={`${TweetStyle.number_helper} ${TweetStyle.number_helper3}`}>{likes}</span>
            </div>
            <div className={TweetStyle.st_share}>
              <div className={TweetStyle.share_helper}>
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

export default SingleTweet;
