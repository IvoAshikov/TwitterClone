import React from "react";
import SNStyle from "./components-css/SingleNotification.module.css";
import NBALogo from "../images/nba-logo.png";

function SingleNotification() {
  return (
    <>
      <div className={SNStyle.single_notification_container}>
        <div className={SNStyle.icon_container}>
          <i className={`bi bi-person-fill ${SNStyle.notification_person}`}></i>
        </div>
        <div className={SNStyle.main_content_container}>
          <div className={SNStyle.profile_pic_container}>
            <img
              src={NBALogo}
              alt="Profile Picture"
              className={SNStyle.notification_prof_image}
            />
          </div>
          <div className={SNStyle.main_text_container}>
            <span className={SNStyle.notification_text}>
              <span className={SNStyle.bold_notification_text}>NBA</span>{" "}
              followed you
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleNotification;
