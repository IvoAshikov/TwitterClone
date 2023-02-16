import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimneyWindow, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import navbarst from "./components-css/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);
  const [isMessagesActive, setIsMessagesActive] = useState(false);
  const [isBookmarksActive, setIsBookmarksActive] = useState(false);
  const [isListsActive, setIsListsActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [createrDropdown, setCreatorDropdown] = useState(false);
  const [professionalTools, setProfessionalTools] = useState(false);
  const [settingsAndSupport, setSettingsAndSupport] = useState(false);

  const refOne = useRef(null);
  const refTwo = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const handleClickOutside = (e) => {
    if (refOne.current !== null && !refOne.current.contains(e.target)) {
      setShowMoreOptions(false);
    }
    if (refTwo.current !== null && !refTwo.current.contains(e.target)) {
      setMoreDropdown(false);
    }
  };

  return (
    <>
      <header className={navbarst.navigationbar_container}>
        <div className={navbarst.left_navbar}>
          <div className={navbarst.helper}>
            <Link to="/home">
              <div className={navbarst.snavbar_twitter}>
                <FontAwesomeIcon icon={faTwitter} className={navbarst.navbar_twitter_logo} />
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="/home" className={navbarst.link_navbar}>
              <div
                className={isHomeActive ? `${navbarst.navbar_home} ${navbarst.active}` : `${navbarst.navbar_home}`}
                onClick={() => {
                  setIsHomeActive(true);
                  setIsExploreActive(false);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(false);
                  setIsListsActive(false);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faHouseChimneyWindow} className={navbarst.house_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Home</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="/explore" className={navbarst.link_navbar}>
              <div
                className={isExploreActive ? `${navbarst.navbar_explore} ${navbarst.active}` : `${navbarst.navbar_explore}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(true);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(false);
                  setIsListsActive(false);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faHashtag} className={navbarst.hashtag_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Explore</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="notifications" className={navbarst.link_navbar}>
              <div
                className={isNotificationsActive ? `${navbarst.navbar_notifications} ${navbarst.active}` : `${navbarst.navbar_notifications}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(false);
                  setIsNotificationsActive(true);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(false);
                  setIsListsActive(false);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faBell} className={navbarst.bell_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Notifications</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="messages" className={navbarst.link_navbar}>
              <div
                className={isMessagesActive ? `${navbarst.navbar_messages} ${navbarst.active}` : `${navbarst.navbar_messages}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(false);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(true);
                  setIsBookmarksActive(false);
                  setIsListsActive(false);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className={navbarst.messages_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Messages</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="bookmarks" className={navbarst.link_navbar}>
              <div
                className={isBookmarksActive ? `${navbarst.navbar_bookmarks} ${navbarst.active}` : `${navbarst.navbar_bookmarks}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(false);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(true);
                  setIsListsActive(false);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faBookmark} className={navbarst.bookmarks_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Bookmarks</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="lists" className={navbarst.link_navbar}>
              <div
                className={isListsActive ? `${navbarst.navbar_lists} ${navbarst.active}` : `${navbarst.navbar_lists}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(false);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(false);
                  setIsListsActive(true);
                  setIsProfileActive(false);
                }}
              >
                <FontAwesomeIcon icon={faList} className={navbarst.lists_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Lists</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={navbarst.helper}>
            <Link to="profile" className={navbarst.link_navbar}>
              <div
                className={isProfileActive ? `${navbarst.navbar_profile} ${navbarst.active}` : `${navbarst.navbar_profile}`}
                onClick={() => {
                  setIsHomeActive(false);
                  setIsExploreActive(false);
                  setIsNotificationsActive(false);
                  setIsMessagesActive(false);
                  setIsBookmarksActive(false);
                  setIsListsActive(false);
                  setIsProfileActive(true);
                }}
              >
                <FontAwesomeIcon icon={faUser} className={navbarst.profile_icon} />
                <div className={navbarst.navbar_text_container}>
                  <span className={navbarst.navbar_text}>Profile</span>
                </div>
              </div>
            </Link>
          </div>
          {/* asjdakfdshj */}
          {moreDropdown && (
            <div className={navbarst.more_dropdown_container} ref={refTwo}>
              <div className={navbarst.more_dropdown_container_big}>
                <div className={navbarst.more_single_option_container}>
                  <i className={`bi bi-chat-left-text ${navbarst.more_topics_icon}`}></i>
                  <span className={navbarst.more_topics_text}>Topics</span>
                </div>
                <div className={navbarst.more_single_option_container}>
                  <i className={`bi bi-person-heart ${navbarst.more_person_icon}`}></i>
                  <span className={navbarst.more_person_text2}>Twitter Circle</span>
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
                {/*  */}
              </div>
            </div>
          )}
          <div className={navbarst.helper}>
            <div className={navbarst.navbar_more} onClick={() => setMoreDropdown(true)}>
              <FontAwesomeIcon icon={faEllipsis} className={navbarst.more_icon} />
              <div className={navbarst.navbar_text_container}>
                <span className={navbarst.navbar_text}>More</span>
              </div>
            </div>
          </div>
        </div>
        <div className={navbarst.navbar_tweet_button}>
          <button className={navbarst.navbar_tweet_btn}>Tweet</button>
          <div className={navbarst.helper}></div>
        </div>
        {showMoreOptions && (
          <div className={navbarst.dropdown_nav_acc_container} ref={refOne}>
            <div className={navbarst.one_option_container_border}>
              <span className={navbarst.single_acc_option}>Add an existing account</span>
            </div>
            <div className={navbarst.one_option_container}>
              <span className={navbarst.single_acc_option}>Log out @IvoAshikov</span>
            </div>
          </div>
        )}
        <div className={navbarst.helper}>
          <div className={navbarst.navbar_account_info} onClick={() => setShowMoreOptions(true)}>
            <div className={navbarst.navbar_account_pic}>
              <img src={require("../images/twitter-profile-pic.png")} alt="Twitter Account Picture" className={navbarst.navbar_acc_pic} />
            </div>
            <div className={navbarst.navbar_account_name_tag}>
              <div className={navbarst.navbar_account_name}>Ivo Ashikov</div>
              <div className={navbarst.navbar_account_tag}>@IvoAshikov</div>
            </div>
            <div className={navbarst.navbar_acc_more}>
              <FontAwesomeIcon icon={faEllipsis} className={navbarst.navbar_account_more} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
