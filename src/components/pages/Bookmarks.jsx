import React from "react";
import BookmarkStyle from "../components-css/Bookmarks.module.css";
import Cage from "../../images/bird-cage.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faBell, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Bookmarks() {
  return (
    <>
      <div className={BookmarkStyle.bookmarks_container}>
        <div className={BookmarkStyle.sticky_top_bar}>
          <h2 className={BookmarkStyle.sticky_top_text}>Bookmarks</h2>
          <span className={BookmarkStyle.profile_tag}>@IvoAshikov</span>
        </div>
        <div className={BookmarkStyle.bookmarks_main_content_container}>
          <div className={BookmarkStyle.bookmarks_main_content_helper}>
            <div className={BookmarkStyle.image_container}>
              <img src={Cage} alt="Book and Cage" className={BookmarkStyle.cage_img} />
            </div>
            <div className={BookmarkStyle.text_container}>
              <h1 className={BookmarkStyle.text_header}>Save Tweets for later</h1>
              <p className={BookmarkStyle.text_info}>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={BookmarkStyle.bottom_bar_mobile_container}>
        <div className={BookmarkStyle.bottom_bar_helper}>
          <Link to="/home">
            <div className={BookmarkStyle.mobile_home_icon_container}>
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={BookmarkStyle.house_icon} />
            </div>
          </Link>
        </div>
        <div className={BookmarkStyle.bottom_bar_helper}>
          <Link to="/explore">
            <div className={BookmarkStyle.mobile_search_icon_container}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={BookmarkStyle.magnifying_icon} />
            </div>
          </Link>
        </div>
        <div className={BookmarkStyle.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={BookmarkStyle.mobile_notifications_icon_container}>
              <FontAwesomeIcon icon={faBell} className={BookmarkStyle.bell_icon} />
            </div>
          </Link>
        </div>
        <div className={BookmarkStyle.bottom_bar_helper}>
          <Link to="/messages">
            <div className={BookmarkStyle.mobile_messages_icon_container}>
              <FontAwesomeIcon icon={faEnvelope} className={BookmarkStyle.messages_icon} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
