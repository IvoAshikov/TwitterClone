import React from "react";
import NMSStyle from "./components-css/NewMemberSuggestion.module.css";

function NewMemberSuggestion({
  name,
  username,
  profile_image,
  verified,
  description,
}) {
  return (
    <div className={NMSStyle.new_member_suggestion_container}>
      <div className={NMSStyle.new_member_container_helper}>
        <div className={NMSStyle.helper_n2}>
          <div className={NMSStyle.member_profile_picture_container}>
            <img
              src={profile_image}
              alt="Profile picture"
              className={NMSStyle.member_profile_picture}
            />
          </div>
          <div className={NMSStyle.member_profile_info_container}>
            <div className={NMSStyle.member_profile_name_container}>
              <span className={NMSStyle.member_profile_name}>
                {name}
                {verified && (
                  <i
                    className={`bi bi-patch-check-fill ${NMSStyle.verified_badge_icon}`}
                  ></i>
                )}
              </span>
              <span className={NMSStyle.member_profile_username}>
                @{username}
              </span>
            </div>
            <button className={NMSStyle.new_member_add_btn}>Add</button>
          </div>
        </div>
        <div className={NMSStyle.description_helper}>
          <span className={NMSStyle.member_description}>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default NewMemberSuggestion;
