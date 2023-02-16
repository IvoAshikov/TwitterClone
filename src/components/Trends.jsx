import React, { useEffect, useRef, useState } from "react";
import TrendsStyle from "./components-css/Trends.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleXmark, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import SingleTrend from "./SingleTrend";
import SingleFollowerOffer from "./SingleFollowerOffer";
import SearchSingleUser from "./SearchSingleUser";
import { getBearerToken } from "../BearerToken";

function Trends() {
  const refOne = useRef(null); // Ref for detecting click outside
  const [searchInputText, setSearchInputText] = useState(""); // State for the text in the input
  const [searchInputUsers, setSearchInputUsers] = useState([]); // State for showing search results
  const [showSearch, setShowSearch] = useState(false); // State for showing the search results container
  const [trends, setTrends] = useState([]); // State for 'Trends for you'
  const [whoToFollow, setWhoToFollow] = useState([]); // State for 'Who To Follow'
  const [showMore, setShowMore] = useState(false); // State for showing More Options in the footer

  // Detece click outside
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
  });

  const handleOutsideClick = (e) => {
    if (refOne !== null && !refOne.current.contains(e.target)) {
      setShowMore(false);
    }
  };
  // End detect click outside

  // WHO TO FOLLOW API
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://localhost:8080/https://api.twitter.com/2/users?ids=19923144,44196397,140070953&user.fields=profile_image_url,verified", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setWhoToFollow(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //END OF WHO TO FOLLOW API

  // SEARCH USER API
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    if (searchInputText !== "") {
      fetch(`http://localhost:8080/https://api.twitter.com/2/users/by?usernames=${searchInputText}&user.fields=description,name,profile_image_url,username,verified`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setSearchInputUsers(result.data);
        })
        .catch((error) => console.log("error", error));
    }
  }, [searchInputText]);
  // END OF SEARCH USER API

  // TRENDS API
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://localhost:8080/https://api.twitter.com/1.1/trends/place.json?id=23424977", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTrends(result[0].trends);
      })
      .catch((error) => console.log("error", error));
  }, []);
  //TRENDS API END

  const changeSearchInputTextHandler = (e) => {
    setSearchInputText(e.target.value);
  };

  return (
    <footer className={TrendsStyle.right_trends_bar}>
      {/* INPUT */}
      <div className={TrendsStyle.right_input_bar}>
        <div className={TrendsStyle.right_input_bar_helper}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={TrendsStyle.input_magnifying_icon} />
          <input
            value={searchInputText}
            className={TrendsStyle.rightbar_input}
            type="text"
            placeholder="Search Twitter"
            onChange={changeSearchInputTextHandler}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          {searchInputText.length !== 0 && <FontAwesomeIcon icon={faCircleXmark} className={TrendsStyle.delete_text_icon} onClick={() => setSearchInputText("")} />}
        </div>
      </div>
      {showSearch && (
        <div className={TrendsStyle.dropdown_search_container}>
          <div className={TrendsStyle.start_text_container}>
            {searchInputText.length !== 0 ? (
              searchInputUsers !== undefined &&
              searchInputUsers.map((user) => (
                <SearchSingleUser key={user.id} name={user.name} username={user.username} profilepic={user.profile_image_url} description={user.description} verified={user.verified} />
              ))
            ) : (
              <div className={TrendsStyle.start_search}>Try searching for people...</div>
            )}
          </div>
        </div>
      )}
      {/* END OF INPUT */}
      {/* TRENDS */}
      <div className={TrendsStyle.trends_for_you_container}>
        <div className={TrendsStyle.trends_heading_text}>Trends for you</div>
        {trends
          .filter((trend, index) => index < 10)
          .map((trend) => (
            <SingleTrend key={Math.floor(Math.random() * 100000000)} name={trend.name} volume={trend.tweet_volume} url={trend.url} />
          ))}
        <a href="https://twitter.com/i/trends" target="_blank">
          <div className={TrendsStyle.trends_show_more}>Show more</div>
        </a>
      </div>
      {/* END OF TRENDS */}
      {/* WHO TO FOLLOW */}
      <div className={TrendsStyle.who_to_follow_container}>
        <div className={TrendsStyle.who_to_follow_text}>Who to follow</div>
        {whoToFollow.map((follow) => (
          <SingleFollowerOffer key={follow.id} name={follow.name} username={follow.username} verified={follow.verified} profilepic={follow.profile_image_url} />
        ))}
        <a href="https://twitter.com/i/connect_people" target="_blank">
          <div className={TrendsStyle.wtf_show_more}>Show more</div>
        </a>
      </div>
      {/* END OF WHO TO FOLLOW */}
      {/* FOOTER */}
      <div className={TrendsStyle.right_footer_container}>
        <div className={TrendsStyle.right_footer}>
          <a href="https://twitter.com/en/tos" target="_blank" className={TrendsStyle.tos_link}>
            <span className={TrendsStyle.tos}>Terms of Service</span>
          </a>
          <a href="https://twitter.com/en/privacy" target="_blank">
            <span className={TrendsStyle.pp}>Privacy Policy</span>
          </a>
          <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank">
            <span className={TrendsStyle.cp}>Cookie Policy</span>
          </a>
          <a href="https://help.twitter.com/en/resources/accessibility" target="_blank">
            <span className={TrendsStyle.accessibility}>Accessibility</span>
          </a>
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            target="_blank"
          >
            <span className={TrendsStyle.ads_info}>Ads Info</span>
          </a>
          {showMore && (
            <div className={TrendsStyle.dropdown_more_container}>
              <a href="https://about.twitter.com/en" target="_blank" className={TrendsStyle.drpd_link}>
                <div className={TrendsStyle.dropdown_single_option}>
                  <span className={TrendsStyle.about}>About</span>
                </div>
              </a>
              <a href="https://status.twitterstat.us/" target="_blank" className={TrendsStyle.drpd_link}>
                <div className={TrendsStyle.dropdown_single_option}>
                  <span className={TrendsStyle.status}>Status</span>
                </div>
              </a>
              <a
                href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
                target="_blank"
                className={TrendsStyle.drpd_link}
              >
                <div className={TrendsStyle.dropdown_single_option}>
                  <span className={TrendsStyle.business}>Twitter for Business</span>
                </div>
              </a>
              <a href="https://developer.twitter.com/en" target="_blank" className={TrendsStyle.drpd_link}>
                <div className={TrendsStyle.dropdown_single_option}>
                  <span className={TrendsStyle.developers}>Developers</span>
                </div>
              </a>
            </div>
          )}
          <button className={TrendsStyle.footer_more} onClick={() => setShowMore(!showMore)} ref={refOne}>
            More
            <FontAwesomeIcon icon={faEllipsis} className={TrendsStyle.footer_more_icon} />
          </button>
        </div>
        <div className={TrendsStyle.footer_creator}>© 2022 Ivo Ashikov</div>
      </div>
      {/* END OF FOOTER */}
    </footer>
  );
}

export default Trends;
