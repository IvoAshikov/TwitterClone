import React, { useEffect, useState, useRef } from "react";
import SRStyle from "./components-css/SingleReTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getBearerToken } from "../BearerToken";

function SingleReTweet({ rtwtBy, replies, likes, retweets, ogTweetID, text }) {
  const [originalAuthor, setOriginalAuthor] = useState([]);
  const [rtwtByID, setRtwtById] = useState([]);
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

  // OG AUTHOR API

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(`http://localhost:8080/https://api.twitter.com/2/tweets/${ogTweetID}?user.fields=name,username,profile_image_url,verified&expansions=author_id`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOriginalAuthor(result.includes.users[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  // END OF OG AUTHOR API
  // FETCH USER API

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch(`http://localhost:8080/https://api.twitter.com/2/users/${rtwtBy}?user.fields=profile_image_url,verified`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRtwtById(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //END OF FETCH USER API
  return (
    <>
      <div className={SRStyle.single_retweet_container}>
        {/* Profile Picture of the User */}
        <div className={SRStyle.single_rtwt_container}>
          <div className={SRStyle.single_retweet_text}>
            <i className="bi bi-arrow-down-up"></i>
            <span className={SRStyle.rtwt_who}>{rtwtByID.name} Retweeted</span>
          </div>
        </div>
        {/* End of Profile Picture of the User */}
        {/* The Main Content of the Tweet */}
        <div className={SRStyle.single_tweet_helper}>
          <div className={SRStyle.single_tweet_pic}>
            <img className={SRStyle.profile_pic_single} src={originalAuthor.profile_image_url} alt="Profile Pic"></img>
          </div>
          <div className={SRStyle.single_tweet_content_container}>
            <div className={SRStyle.st_author}>
              <div className={SRStyle.st_author_name}>
                {originalAuthor.name}
                {originalAuthor.verified && <i className="bi bi-patch-check-fill"></i>}
              </div>
              <div className={SRStyle.st_author_tag}>@{originalAuthor.username}</div>
              <div className={SRStyle.st_author_dot}>·</div>
              <div className={SRStyle.st_author_timestamp}>20h</div>
              <div className={SRStyle.st_author_more_icon_container} onClick={() => setMoreOptions(true)} ref={refOne}>
                <FontAwesomeIcon icon={faEllipsis} className={SRStyle.st_more_icon} />
              </div>
              {/* Ellipsis click */}
              {moreOptions && (
                <div className={SRStyle.more_dropdown_container}>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-emoji-frown"></i>
                    <span className={SRStyle.more_single_option_text}>Not interested in this Tweet</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-person-x"></i>
                    <span className={SRStyle.more_single_option_text}>Unfollow @{originalAuthor.username}</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-card-list"></i>
                    <span className={SRStyle.more_single_option_text}>Add/remove @{originalAuthor.username} from Lists</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-volume-mute"></i>
                    <span className={SRStyle.more_single_option_text}>Mute @{originalAuthor.username}</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-slash-circle"></i>
                    <span className={SRStyle.more_single_option_text}>Block @{originalAuthor.username}</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-code-slash"></i>
                    <span className={SRStyle.more_single_option_text}>Embed Tweet</span>
                  </div>
                  <div className={SRStyle.more_single_option}>
                    <i className="bi bi-flag"></i>
                    <span className={SRStyle.more_single_option_text}>Report Tweet</span>
                  </div>
                </div>
              )}
              {/* End of Ellipsis click */}
            </div>
            <div className={SRStyle.st_main_content}>
              <p className={SRStyle.st_main_content_text}>{text}</p>
            </div>
            <div className={SRStyle.st_buttons_icons}>
              <div className={SRStyle.st_reply}>
                <div className={SRStyle.reply_helper}>
                  <i className={`bi bi-chat ${SRStyle.icons_helper}`}></i>
                </div>
                <span className={`${SRStyle.number_helper} ${SRStyle.number_helper1}`}>{replies}</span>
              </div>
              <div className={SRStyle.st_retweet}>
                <div className={SRStyle.retweet_helper}>
                  <i className={`bi bi-arrow-left-right ${SRStyle.icons_helper}`}></i>
                </div>
                <span className={`${SRStyle.number_helper} ${SRStyle.number_helper2}`}>{retweets}</span>
              </div>
              <div className={SRStyle.st_like}>
                <div className={SRStyle.like_helper}>
                  <i className={`bi bi-heart ${SRStyle.icons_helper}`}></i>
                </div>
                <span className={`${SRStyle.number_helper} ${SRStyle.number_helper3}`}>{likes}</span>
              </div>
              <div className={SRStyle.st_share}>
                <div className={SRStyle.share_helper}>
                  <i className="bi bi-box-arrow-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Main Content */}
      </div>
    </>
  );
}

export default SingleReTweet;
