import React, { useState, useEffect } from "react";
import ExploreStyles from "../components-css/Explore.module.css";
import SingleTrend from "../SingleTrend";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faBell, faMagnifyingGlass, faEnvelope, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import SearchSingleUser from "../SearchSingleUser";
import navbarst from "../components-css/Navbar.module.css";
import profilePicture from "../../images/twitter-profile-pic.png";
import { getBearerToken } from "../../BearerToken";

function Explore() {
  const [trends, setTrends] = useState([]); // State for Trends
  const [searchInputText, setSearchInputText] = useState(""); // State for Searching Users
  const [showSearch, setShowSearch] = useState(false);
  const [searchInputUsers, setSearchInputUsers] = useState([]); // State for results after searching Users
  const [sidebar, setSidebar] = useState(false); // State for Mobile Sidebar
  const [createrDropdown, setCreatorDropdown] = useState(false); // State for Dropdown
  const [professionalTools, setProfessionalTools] = useState(false); // State for Dropdown
  const [settingsAndSupport, setSettingsAndSupport] = useState(false); // State for Dropdown

  const changeSearchInputTextHandler = (e) => {
    setSearchInputText(e.target.value);
  };

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
  // END OF TRENDS API

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

  return (
    <>
      <div className={ExploreStyles.explore_page_container}>
        <div className={ExploreStyles.explore_header_container}>
          <span className={ExploreStyles.explore_header}>Trends for you</span>
        </div>
        <div className={ExploreStyles.explore_trends_contaienr}>
          {trends.map((trend) => (
            <SingleTrend key={Math.floor(Math.random() * 100000000)} name={trend.name} volume={trend.tweet_volume} url={trend.url} />
          ))}
        </div>
      </div>
      {/* MOBILE */}
      {/* BOTTOM NAVIGATION BAR */}
      <div className={ExploreStyles.bottom_bar_mobile_container}>
        <div className={ExploreStyles.bottom_bar_helper}>
          <Link to="/home">
            <div className={ExploreStyles.mobile_home_icon_container}>
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={ExploreStyles.house_icon} />
            </div>
          </Link>
        </div>
        <div className={ExploreStyles.bottom_bar_helper}>
          <Link to="/explore">
            <div className={ExploreStyles.mobile_search_icon_container}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={ExploreStyles.magnifying_icon} />
            </div>
          </Link>
        </div>
        <div className={ExploreStyles.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={ExploreStyles.mobile_notifications_icon_container}>
              <FontAwesomeIcon icon={faBell} className={ExploreStyles.bell_icon} />
            </div>
          </Link>
        </div>
        <div className={ExploreStyles.bottom_bar_helper}>
          <Link to="/messages">
            <div className={ExploreStyles.mobile_messages_icon_container}>
              <FontAwesomeIcon icon={faEnvelope} className={ExploreStyles.messages_icon} />
            </div>
          </Link>
        </div>
      </div>
      {/* END OF BOTTOM NAVIGATION BAR */}
      {/* SEARCH */}
      <div className={ExploreStyles.right_input_bar}>
        <div className={ExploreStyles.mobile_prof_pic_container} onClick={() => setSidebar(true)}>
          <img src={profilePicture} className={ExploreStyles.prof_pic_home} />
        </div>

        <div className={ExploreStyles.right_input_bar_helper}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={ExploreStyles.input_magnifying_icon} />
          <input
            value={searchInputText}
            className={ExploreStyles.rightbar_input}
            type="text"
            placeholder="Search Twitter"
            onChange={changeSearchInputTextHandler}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          {searchInputText.length !== 0 && <FontAwesomeIcon icon={faCircleXmark} className={ExploreStyles.delete_text_icon} />}
        </div>
      </div>
      {showSearch && (
        <div className={ExploreStyles.dropdown_search_container}>
          <div className={ExploreStyles.start_text_container}>
            {searchInputText.length !== 0 ? (
              searchInputUsers !== undefined &&
              searchInputUsers.map((user) => (
                <SearchSingleUser key={user.id} name={user.name} username={user.username} profilepic={user.profile_image_url} description={user.description} verified={user.verified} />
              ))
            ) : (
              <div className={ExploreStyles.start_search}>Try searching for people...</div>
            )}
          </div>
        </div>
      )}
      {/* END OF SEARCH */}
      {/* MOBILE SIDEBAR */}
      {
        <div className={!sidebar ? `${ExploreStyles.mobile_sidebar_container} ${ExploreStyles.close_sidebar}` : `${ExploreStyles.mobile_sidebar_container} ${ExploreStyles.open_sidebar}`}>
          <div className={ExploreStyles.mobile_info_close_container}>
            <span className={ExploreStyles.mobile_info}>Account info</span>
            <div className={ExploreStyles.close_sidebar_icon_container} onClick={() => setSidebar(false)}>
              <i className="bi bi-x-lg"></i>
            </div>
          </div>
          <div className={ExploreStyles.mobile_profile_pic_add_container}>
            <img src={profilePicture} className={ExploreStyles.mobile_sidebar_pic} />
            <div className={ExploreStyles.mobile_add_icon_container}>
              <i className="bi bi-plus-lg"></i>
            </div>
          </div>
          <div className={ExploreStyles.mobile_account_info_container}>
            <span className={ExploreStyles.mobile_account_name}>Ivo Ashikov</span>
            <span className={ExploreStyles.mobile_account_username}>@IvoAshikov</span>
          </div>
          <div className={ExploreStyles.followers_container}>
            <span className={ExploreStyles.following}>
              346 <span className={ExploreStyles.blacked_out}>Following</span>
            </span>
            <span className={ExploreStyles.followers}>
              581 <span className={ExploreStyles.blacked_out}>Followers</span>
            </span>
          </div>
          <div className={ExploreStyles.mobile_option_container}>
            <div className={ExploreStyles.mobile_single_option_container}>
              <i className="bi bi-person fa-lg"></i>
              <span className={ExploreStyles.mobile_option_text}>Profile</span>
            </div>
            <div className={ExploreStyles.mobile_single_option_container}>
              <i className="bi bi-chat-left-text fa-lg"></i>
              <span className={ExploreStyles.mobile_option_text}>Topics</span>
            </div>
            <Link to="/bookmarks">
              <div className={ExploreStyles.mobile_single_option_container}>
                <i className="bi bi-bookmark fa-lg"></i>
                <span className={ExploreStyles.mobile_option_text}>Bookmarks</span>
              </div>
            </Link>
            <Link to="/lists">
              <div className={ExploreStyles.mobile_single_option_container}>
                <i className="bi bi-card-list fa-lg"></i>
                <span className={ExploreStyles.mobile_option_text}>Lists</span>
              </div>
            </Link>
            <div className={ExploreStyles.mobile_single_option_container}>
              <i className="bi bi-person-heart fa-lg"></i>
              <span className={ExploreStyles.mobile_option_text}>Twitter Circle</span>
            </div>
          </div>
          <div className={navbarst.more_dropdown_container_small}>
            <div
              className={navbarst.more_single_option_small_container}
              onClick={() => {
                setSettingsAndSupport(false);
                setCreatorDropdown(!createrDropdown);
                setProfessionalTools(false);
              }}
            >
              <span className={navbarst.more_single_option_text}>Creater Studio</span>
              {createrDropdown ? (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right}  ${navbarst.animation_start}`}></i>
              ) : (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right} ${navbarst.animation_end} `}></i>
              )}
            </div>
            {createrDropdown && (
              <div className={navbarst.creater_studio_dropdown_container}>
                <div className={navbarst.cr_studio_single_option_container}>
                  <i className={`bi bi-lightning ${navbarst.cr_light}`}></i>
                  <span className={navbarst.creater_studio_text}>Moments</span>
                </div>
                <div className={navbarst.cr_studio_single_option_container}>
                  <i className={`bi bi-newspaper ${navbarst.cr_newsp}`}></i>
                  <span className={navbarst.creater_studio_text}>Newsletters</span>
                </div>
                <div className={navbarst.cr_studio_single_option_container}>
                  <i className={`bi bi-bar-chart-fill ${navbarst.cr_chart}`}></i>
                  <a href="https://analytics.twitter.com/user/scleepsrt/home" target="_blank" className={navbarst.more_dpd_link}>
                    <span className={navbarst.creater_studio_text}>Analytics</span>
                  </a>
                </div>
              </div>
            )}
            <div
              className={navbarst.more_single_option_small_container}
              onClick={() => {
                setSettingsAndSupport(false);
                setCreatorDropdown(false);
                setProfessionalTools(!professionalTools);
              }}
            >
              <span className={navbarst.more_single_option_text}>Professional Tools</span>
              {professionalTools ? (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right}  ${navbarst.animation_start}`}></i>
              ) : (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right} ${navbarst.animation_end} `}></i>
              )}
            </div>
            {professionalTools && (
              <div className={navbarst.professional_tools_dropdown_container}>
                <div className={navbarst.pr_tools_single_option_container}>
                  <i className={`bi bi-dpad ${navbarst.pr_rocket}`}></i>
                  <span className={navbarst.professional_tools_text}>Twitter for Professionals</span>
                </div>
                <div className={navbarst.pr_tools_single_option_container}>
                  <i className={`bi bi-arrow-up-right-square ${navbarst.pr_arrow}`}></i>
                  <a href="https://ads.twitter.com/onboarding/18ce55j86qz/welcome?ref=gl-tw-tw-twitter-ads-rweb" target="_blank" className={navbarst.more_dpd_link}>
                    <span className={navbarst.professional_tools_text}>Twitter Ads</span>
                  </a>
                </div>
                <div className={navbarst.pr_tools_single_option_container}>
                  <i className={`bi bi-cash-coin ${navbarst.pr_money}`}></i>
                  <span className={navbarst.professional_tools_text}>Monetization</span>
                </div>
              </div>
            )}

            <div
              className={navbarst.more_single_option_small_container}
              onClick={() => {
                setCreatorDropdown(false);
                setProfessionalTools(false);
                setSettingsAndSupport(!settingsAndSupport);
              }}
            >
              <span className={navbarst.more_single_option_text}>Settings and Support</span>
              {settingsAndSupport ? (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right}  ${navbarst.animation_start}`}></i>
              ) : (
                <i className={`bi bi-caret-down-fill ${navbarst.more_right} ${navbarst.animation_end} `}></i>
              )}
            </div>

            {settingsAndSupport && (
              <div className={navbarst.settings_support_dropdown_container}>
                <div className={navbarst.sas_single_option_container}>
                  <i className={`bi bi-gear ${navbarst.sas_gear}`}></i>
                  <Link to="settings/account" style={{ color: "white" }}>
                    <span className={navbarst.settings_support_text}>Settings and Privacy</span>
                  </Link>
                </div>
                <div className={navbarst.sas_single_option_container}>
                  <i className={`bi bi-question-circle ${navbarst.sas_qmark}`}></i>
                  <a href="https://help.twitter.com/en" target="_blank" className={navbarst.more_dpd_link}>
                    <span className={navbarst.settings_support_text}>Help Center</span>
                  </a>
                </div>
                <div className={navbarst.sas_single_option_container}>
                  <i className={`bi bi-brush ${navbarst.sas_brush}`}></i>
                  <span className={navbarst.settings_support_text}>Display</span>
                </div>
                <div className={navbarst.sas_single_option_container}>
                  <i className={`bi bi-person-bounding-box ${navbarst.sas_person}`}></i>
                  <span className={navbarst.settings_support_text}>Keyboard Shortcuts</span>
                </div>
              </div>
            )}
          </div>
        </div>
      }
      {/* END OF MOBILE SIDEBAR */}
    </>
  );
}

export default Explore;
