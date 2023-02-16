import React from "react";
import ListCreatedByYouStyle from "./components-css/ListCreatedByYou.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import twitterProfilePFP from "../images/twitter-profile-pic.png";

function ListCreatedByYou({ name, username, privateList, nameOfList }) {
  return (
    <div className={ListCreatedByYouStyle.single_list_container}>
      <div className={ListCreatedByYouStyle.icon_box_container}>
        <i
          className={`bi bi-card-list ${ListCreatedByYouStyle.white_list_icon}`}
        ></i>
      </div>
      <div className={ListCreatedByYouStyle.text_info_container_list}>
        <span className={ListCreatedByYouStyle.topic_list_text}>
          {nameOfList}
          {privateList && (
            <FontAwesomeIcon
              icon={faLock}
              className={ListCreatedByYouStyle.locker_icon_list}
            />
          )}
        </span>
        <div className={ListCreatedByYouStyle.topic_list_user}>
          <div className={ListCreatedByYouStyle.topic_list_pfp}>
            <img
              src={twitterProfilePFP}
              alt="Profile Picture"
              className={ListCreatedByYouStyle.lists_default_pfp}
            />
          </div>
          <span className={ListCreatedByYouStyle.topic_list_name}>{name}</span>
          <span className={ListCreatedByYouStyle.topic_list_username}>
            @{username}
          </span>
          <div className={ListCreatedByYouStyle.pin_list_container}>
            <i
              className={`bi bi-pin-fill ${ListCreatedByYouStyle.pin_list_icon}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCreatedByYou;
