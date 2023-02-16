import React from "react";
import SSUStyle from "./components-css/SearchSingleUser.module.css";

function SearchSingleUser({
  name,
  username,
  description,
  profilepic,
  verified,
}) {
  return (
    <>
      <div className={SSUStyle.container_for_one_user}>
        <div className={SSUStyle.prof_pic_container}>
          <img src={profilepic} className={SSUStyle.profile_picture} />
        </div>
        <div className={SSUStyle.search_text_container}>
          <div className={SSUStyle.search_profile_info}>
            <p className={SSUStyle.search_name}>
              {name} {verified && <i className="bi bi-patch-check-fill"></i>}
            </p>
            <p className={SSUStyle.search_username}>@{username}</p>
          </div>
          <p className={SSUStyle.search_description}>
            {description.length !== 0 ? description : "No Description"}
          </p>
        </div>
      </div>
    </>
  );
}

export default SearchSingleUser;
