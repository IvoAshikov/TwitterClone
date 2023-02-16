import React, { useState } from "react";
import NotificationsStyle from "../components-css/Notifications.module.css";
import SingleNotification from "../SingleNotification";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faBell, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navbarst from "../components-css/Navbar.module.css";
import profilePicture from "../../images/twitter-profile-pic.png";

function Notifications() {
  const [isAllActive, setIsAllActive] = useState(true);
  const [isMentionsActive, setIsMentionsActive] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [createrDropdown, setCreatorDropdown] = useState(false);
  const [professionalTools, setProfessionalTools] = useState(false);
  const [settingsAndSupport, setSettingsAndSupport] = useState(false);
  return (
    <>
      <div className={NotificationsStyle.notifications_container}>
        <div className={NotificationsStyle.sticky_top_part}>
          <div className={NotificationsStyle.notifications_first_row}>
            <div className={NotificationsStyle.mobile_prof_pic_container} onClick={() => setSidebar(true)}>
              <img src={profilePicture} className={NotificationsStyle.prof_pic_home} />
            </div>
            <span className={NotificationsStyle.notifications_header}>Notifications</span>
            <div className={NotificationsStyle.gear_icon_container}>
              <i className={`bi bi-gear ${NotificationsStyle.gear_icon_notifications}`}></i>
            </div>
          </div>
          <div className={NotificationsStyle.notifications_second_row}>
            <div
              className={NotificationsStyle.all_part_container}
              onClick={() => {
                setIsMentionsActive(false);
                setIsAllActive(true);
              }}
            >
              <span className={NotificationsStyle.all_text}>All</span>
              {isAllActive && <div className={NotificationsStyle.underline}></div>}
            </div>
            <div
              className={NotificationsStyle.mentions_part_container}
              onClick={() => {
                setIsMentionsActive(true);
                setIsAllActive(false);
              }}
            >
              <span className={NotificationsStyle.mentions_text}>Mentions</span>
              {isMentionsActive && <div className={NotificationsStyle.underline2}></div>}
            </div>
          </div>
        </div>
        <div className={NotificationsStyle.notification_helper}>
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
          <SingleNotification />
        </div>
      </div>
      <div className={NotificationsStyle.bottom_bar_mobile_container}>
        <div className={NotificationsStyle.bottom_bar_helper}>
          <Link to="/home">
            <div className={NotificationsStyle.mobile_home_icon_container}>
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={NotificationsStyle.house_icon} />
            </div>
          </Link>
        </div>
        <div className={NotificationsStyle.bottom_bar_helper}>
          <Link to="/explore">
            <div className={NotificationsStyle.mobile_search_icon_container}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={NotificationsStyle.magnifying_icon} />
            </div>
          </Link>
        </div>
        <div className={NotificationsStyle.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={NotificationsStyle.mobile_notifications_icon_container}>
              <FontAwesomeIcon icon={faBell} className={NotificationsStyle.bell_icon} />
            </div>
          </Link>
        </div>
        <div className={NotificationsStyle.bottom_bar_helper}>
          <Link to="/messages">
            <div className={NotificationsStyle.mobile_messages_icon_container}>
              <FontAwesomeIcon icon={faEnvelope} className={NotificationsStyle.messages_icon} />
            </div>
          </Link>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {
        <div
          className={
            !sidebar ? `${NotificationsStyle.mobile_sidebar_container} ${NotificationsStyle.close_sidebar}` : `${NotificationsStyle.mobile_sidebar_container} ${NotificationsStyle.open_sidebar}`
          }
        >
          <div className={NotificationsStyle.mobile_info_close_container}>
            <span className={NotificationsStyle.mobile_info}>Account info</span>
            <div className={NotificationsStyle.close_sidebar_icon_container} onClick={() => setSidebar(false)}>
              <i className="bi bi-x-lg"></i>
            </div>
          </div>
          <div className={NotificationsStyle.mobile_profile_pic_add_container}>
            <img src={profilePicture} className={NotificationsStyle.mobile_sidebar_pic} />
            <div className={NotificationsStyle.mobile_add_icon_container}>
              <i className="bi bi-plus-lg"></i>
            </div>
          </div>
          <div className={NotificationsStyle.mobile_account_info_container}>
            <span className={NotificationsStyle.mobile_account_name}>Ivo Ashikov</span>
            <span className={NotificationsStyle.mobile_account_username}>@IvoAshikov</span>
          </div>
          <div className={NotificationsStyle.followers_container}>
            <span className={NotificationsStyle.following}>
              346 <span className={NotificationsStyle.blacked_out}>Following</span>
            </span>
            <span className={NotificationsStyle.followers}>
              581 <span className={NotificationsStyle.blacked_out}>Followers</span>
            </span>
          </div>
          <div className={NotificationsStyle.mobile_option_container}>
            <div className={NotificationsStyle.mobile_single_option_container}>
              <i className="bi bi-person fa-lg"></i>
              <span className={NotificationsStyle.mobile_option_text}>Profile</span>
            </div>
            <div className={NotificationsStyle.mobile_single_option_container}>
              <i className="bi bi-chat-left-text fa-lg"></i>
              <span className={NotificationsStyle.mobile_option_text}>Topics</span>
            </div>
            <Link to="/bookmarks">
              <div className={NotificationsStyle.mobile_single_option_container}>
                <i className="bi bi-bookmark fa-lg"></i>
                <span className={NotificationsStyle.mobile_option_text}>Bookmarks</span>
              </div>
            </Link>
            <Link to="/lists">
              <div className={NotificationsStyle.mobile_single_option_container}>
                <i className="bi bi-card-list fa-lg"></i>
                <span className={NotificationsStyle.mobile_option_text}>Lists</span>
              </div>
            </Link>
            <div className={NotificationsStyle.mobile_single_option_container}>
              <i className="bi bi-person-heart fa-lg"></i>
              <span className={NotificationsStyle.mobile_option_text}>Twitter Circle</span>
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
      }
    </>
  );
}

export default Notifications;
