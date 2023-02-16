import React, { useEffect, useState } from "react";
import NPCNLStyle from "./components-css/NextPageCNL.module.css";
import { Link } from "react-router-dom";
import atlCalculator from "../images/calculator-egg.png";
import NewMemberSuggestion from "./NewMemberSuggestion";
import { getBearerToken } from "../BearerToken";

function NextPageCNL() {
  const [isActiveMembers, setIsActiveMembers] = useState(true);
  const [isActiveSuggested, setIsActiveSuggested] = useState(false);
  const [suggestedMembers, setIsSuggestedMembers] = useState([]);

  // API FOR SUGGESTED MEMBERS
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${getBearerToken()}`);
  myHeaders.append("Cookie", "guest_id=v1%3A166592738296802843");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    fetch("http://localhost:8080/https://api.twitter.com/2/users?ids=62603893,18208354,516464106&user.fields=profile_image_url,verified,name,username,description", requestOptions)
      .then((response) => response.json())
      .then((result) => setIsSuggestedMembers(result.data))
      .catch((error) => console.log("error", error));
  }, []);
  // END OF API FOR SUGGESTED MEMBERS

  return (
    <div className={NPCNLStyle.add_to_list_container}>
      <div className={NPCNLStyle.atl_controls_menu_container}>
        <Link to="/lists" style={{ color: "white" }}>
          <div className={NPCNLStyle.close_atl_container}>
            <i className={`bi bi-x ${NPCNLStyle.close_atl}`}></i>
          </div>
        </Link>
        <div className={NPCNLStyle.atl_header_container}>
          <span className={NPCNLStyle.atl_header}>Add to your List</span>
        </div>
        <Link to="/lists">
          <button className={NPCNLStyle.atl_done_btn}>Done</button>
        </Link>
      </div>
      <div className={NPCNLStyle.atl_bars_container}>
        <div
          className={NPCNLStyle.atl_members_container}
          onClick={() => {
            setIsActiveMembers(true);
            setIsActiveSuggested(false);
          }}
        >
          <span className={NPCNLStyle.atl_members_text}>Members(0)</span>
          {isActiveMembers && <div className={NPCNLStyle.underline3}></div>}
        </div>
        <div
          className={NPCNLStyle.atl_suggested_container}
          onClick={() => {
            setIsActiveMembers(false);
            setIsActiveSuggested(true);
          }}
        >
          <span className={NPCNLStyle.atl_suggested_text}>Suggested</span>
          {isActiveSuggested && <div className={NPCNLStyle.underline3}></div>}
        </div>
      </div>

      {isActiveMembers && (
        <div className={NPCNLStyle.atl_all_member_container}>
          <div className={NPCNLStyle.atl_image_container}>
            <img src={atlCalculator} alt="Calculator Picture" className={NPCNLStyle.atl_empty_calculator} />
          </div>
          <div className={NPCNLStyle.atl_members_text_container}>
            <div className={NPCNLStyle.atl_members_header_container}>
              <span className={NPCNLStyle.atl_members_header}>This List is lonely</span>
            </div>
            <div className={NPCNLStyle.atl_members_info_container}>
              <span className={NPCNLStyle.atl_members_info}>People added to this List will show up here.</span>
            </div>
          </div>
        </div>
      )}
      {isActiveSuggested && (
        <div className={NPCNLStyle.new_member_suggestion_container_parent}>
          {suggestedMembers.map((member) => (
            <NewMemberSuggestion key={member.id} name={member.name} username={member.username} profile_image={member.profile_image_url} verified={member.verified} description={member.description} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NextPageCNL;
