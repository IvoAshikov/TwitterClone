import React from "react";
import SFOStyle from "./components-css/SingleFollowerOffer.module.css";

function SingleFollowerOffer({ name, username, profilepic, verified }) {
  return (
    <>
      <div className={SFOStyle.single_follow_offer}>
        <div className={SFOStyle.wtf_profile_information}>
          <div className={SFOStyle.wtf_profile_picture_container}>
            <img
              src={profilepic}
              alt="NBA LOGO"
              className={SFOStyle.wtf_profile_pic}
            />
          </div>
          <div className={SFOStyle.wtf_profile_info}>
            <p className={SFOStyle.wtf_profile_name}>
              {name} {verified && <i className="bi bi-patch-check-fill"></i>}
            </p>
            <p className={SFOStyle.wtf_profile_tag}>@{username}</p>
          </div>
        </div>
        <div className={SFOStyle.wtf_profile_follow_btn_container}>
          <button className={SFOStyle.wtf_follow_btn}>Follow</button>
        </div>
      </div>
    </>
  );
}

export default SingleFollowerOffer;
