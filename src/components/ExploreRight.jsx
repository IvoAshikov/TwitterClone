import React, { useEffect, useRef, useState } from "react";
import ExploreRightStyle from "./components-css/ExploreRight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCircleXmark, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import SingleFollowerOffer from "./SingleFollowerOffer";
import SearchSingleUser from "./SearchSingleUser";
import { getBearerToken } from "../BearerToken";

function ExploreRight() {
  const refOne = useRef(null);
  const [searchInputText, setSearchInputText] = useState("");
  const [searchInputUsers, setSearchInputUsers] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [whoToFollow, setWhoToFollow] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
  });

  const handleOutsideClick = (e) => {
    if (refOne !== null && !refOne.current.contains(e.target)) {
      setShowMore(false);
    }
  };

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

  const changeSearchInputTextHandler = (e) => {
    setSearchInputText(e.target.value);
  };

  return (
    <div className={ExploreRightStyle.right_trends_bar}>
      {/* INPUT */}
      <div className={ExploreRightStyle.right_input_bar}>
        <div className={ExploreRightStyle.right_input_bar_helper}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={ExploreRightStyle.input_magnifying_icon} />
          <input
            value={searchInputText}
            className={ExploreRightStyle.rightbar_input}
            type="text"
            placeholder="Search Twitter"
            onChange={changeSearchInputTextHandler}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          {searchInputText.length !== 0 && <FontAwesomeIcon icon={faCircleXmark} className={ExploreRightStyle.delete_text_icon} />}
        </div>
      </div>
      {showSearch && (
        <div className={ExploreRightStyle.dropdown_search_container}>
          <div className={ExploreRightStyle.start_text_container}>
            {searchInputText.length !== 0 ? (
              searchInputUsers !== undefined &&
              searchInputUsers.map((user) => (
                <SearchSingleUser key={user.id} name={user.name} username={user.username} profilepic={user.profile_image_url} description={user.description} verified={user.verified} />
              ))
            ) : (
              <div className={ExploreRightStyle.start_search}>Try searching for people...</div>
            )}
          </div>
        </div>
      )}
      {/* END OF INPUT */}
      {/* WHO TO FOLLOW */}
      <div className={ExploreRightStyle.who_to_follow_container_copy}>
        <div className={ExploreRightStyle.who_to_follow_text}>Who to follow</div>
        {whoToFollow.map((follow) => (
          <SingleFollowerOffer key={follow.id} name={follow.name} username={follow.username} verified={follow.verified} profilepic={follow.profile_image_url} />
        ))}
        <a href="https://twitter.com/i/connect_people" target="_blank">
          <div className={ExploreRightStyle.wtf_show_more}>Show more</div>
        </a>
      </div>
      {/* END OF WHO TO FOLLOW */}
      <div className={ExploreRightStyle.right_footer_container}>
        <div className={ExploreRightStyle.right_footer}>
          <a href="https://twitter.com/en/tos" target="_blank" className={ExploreRightStyle.tos_link}>
            <span className={ExploreRightStyle.tos}>Terms of Service</span>
          </a>
          <a href="https://twitter.com/en/privacy" target="_blank">
            <span className={ExploreRightStyle.pp}>Privacy Policy</span>
          </a>
          <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank">
            <span className={ExploreRightStyle.cp}>Cookie Policy</span>
          </a>
          <a href="https://help.twitter.com/en/resources/accessibility" target="_blank">
            <span className={ExploreRightStyle.accessibility}>Accessibility</span>
          </a>
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            target="_blank"
          >
            <span className={ExploreRightStyle.ads_info}>Ads Info</span>
          </a>
          {showMore && (
            <div className={ExploreRightStyle.dropdown_more_container}>
              <a href="https://about.twitter.com/en" target="_blank" className={ExploreRightStyle.drpd_link}>
                <div className={ExploreRightStyle.dropdown_single_option}>
                  <span className={ExploreRightStyle.about}>About</span>
                </div>
              </a>
              <a href="https://status.twitterstat.us/" target="_blank" className={ExploreRightStyle.drpd_link}>
                <div className={ExploreRightStyle.dropdown_single_option}>
                  <span className={ExploreRightStyle.status}>Status</span>
                </div>
              </a>
              <a
                href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
                target="_blank"
                className={ExploreRightStyle.drpd_link}
              >
                <div className={ExploreRightStyle.dropdown_single_option}>
                  <span className={ExploreRightStyle.business}>Twitter for Business</span>
                </div>
              </a>
              <a href="https://developer.twitter.com/en" target="_blank" className={ExploreRightStyle.drpd_link}>
                <div className={ExploreRightStyle.dropdown_single_option}>
                  <span className={ExploreRightStyle.developers}>Developers</span>
                </div>
              </a>
            </div>
          )}
          <button className={ExploreRightStyle.footer_more} onClick={() => setShowMore(!showMore)} ref={refOne}>
            More
            <FontAwesomeIcon icon={faEllipsis} className={ExploreRightStyle.footer_more_icon} />
          </button>
        </div>
        <div className={ExploreRightStyle.footer_creator}>© 2022 AVOKA, Inc.</div>
      </div>
    </div>
  );
}

export default ExploreRight;
