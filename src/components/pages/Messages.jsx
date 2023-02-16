import React, { useState } from "react";
import MessagesStyle from "../components-css/Messages.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faBell, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import navbarst from "../components-css/Navbar.module.css";
import profilePicture from "../../images/twitter-profile-pic.png";

function Messages() {
  const [messagesSettings, setMessagesSettings] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [createrDropdown, setCreatorDropdown] = useState(false);
  const [professionalTools, setProfessionalTools] = useState(false);
  const [settingsAndSupport, setSettingsAndSupport] = useState(false);
  return (
    <>
      <div className={MessagesStyle.messages_page_container}>
        <div className={MessagesStyle.messages_central_part_container}>
          <div className={MessagesStyle.messages_nav_menu_container}>
            <div className={MessagesStyle.messages_header_container}>
              <div className={MessagesStyle.mobile_prof_pic_container} onClick={() => setSidebar(true)}>
                <img src={profilePicture} className={MessagesStyle.prof_pic_home} />
              </div>
              <span className={MessagesStyle.messages_header_text}>Messages</span>
            </div>
            <div className={MessagesStyle.messages_settings_container} onClick={() => setMessagesSettings(true)}>
              <i className="bi bi-gear"></i>
            </div>
            <div className={MessagesStyle.create_new_message_container}>
              <i className="bi bi-envelope-plus"></i>
            </div>
          </div>
          <div className={MessagesStyle.messages_main_content_container}>
            <div className={MessagesStyle.messages_welcome_box}>
              <span className={MessagesStyle.messages_welcome_text}>Welcome to your inbox!</span>
            </div>
            <div className={MessagesStyle.messages_welcome_info_box}>
              <span className={MessagesStyle.messages_welcome_info}>Drop a line, share Tweets and more with private conversations between you and others on Twitter.</span>
            </div>
            <button className={MessagesStyle.write_message_btn}>Write a message</button>
          </div>
        </div>
      </div>
      <div className={MessagesStyle.messages_right_part_container}>
        {messagesSettings === false && (
          <div className={MessagesStyle.messages_big_container}>
            <div className={MessagesStyle.messages_big_helper}>
              <div className={MessagesStyle.messages_select_message_container}>
                <span className={MessagesStyle.select_messages_header_text}>Select a message</span>
              </div>
              <div className={MessagesStyle.messages_select_info_container}>
                <span className={MessagesStyle.messages_select_info}>Choose from your existing conversations, start a new one, or just keep swimming.</span>
              </div>
              <div className={MessagesStyle.btn_helper}>
                <button className={MessagesStyle.new_message_btn}>New Message</button>
              </div>
            </div>
          </div>
        )}
        {messagesSettings && (
          <div className={MessagesStyle.direct_messages_settings_container}>
            <div className={MessagesStyle.direct_messages_nav_container}>
              <div className={MessagesStyle.direct_messages_back_container} onClick={() => setMessagesSettings(false)}>
                <i className={`bi bi-arrow-left ${MessagesStyle.direct_messages_back_icon}`}></i>
              </div>
              <div className={MessagesStyle.direct_messages_header_container}>
                <span className={MessagesStyle.direct_messages_header}>Direct Messages</span>
              </div>
            </div>
            <div className={MessagesStyle.direct_messages_small_info_container}>
              <span className={MessagesStyle.direct_messages_small_info}>Manage who can message you directly.</span>
            </div>
            <div className={MessagesStyle.direct_messages_single_setting_container}>
              <div className={MessagesStyle.dms_helper}>
                <div className={MessagesStyle.direct_messages_setting_header_container}>
                  <span className={MessagesStyle.single_setting_header}>Allow message requests from everyone</span>
                  <div className={MessagesStyle.setting_checkbox_container}>
                    <input type="checkbox" />
                  </div>
                </div>
                <div className={MessagesStyle.direct_messages_second_row_container}>
                  <span className={MessagesStyle.dmss_info}>
                    Let people who you don’t follow send you message requests and add you to group conversations. To reply to their messages, you need to accept the request.{" "}
                    <a href="https://help.twitter.com/en/using-twitter/direct-messages#receive" className={MessagesStyle.learn_more_messages_link}>
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className={MessagesStyle.direct_messages_single_setting_container}>
              <div className={MessagesStyle.dms_helper}>
                <div className={MessagesStyle.direct_messages_setting_header_container}>
                  <span className={MessagesStyle.single_setting_header}>Filter low-quality messages</span>
                  <div className={MessagesStyle.setting_checkbox_container}>
                    <input type="checkbox" defaultChecked={true} />
                  </div>
                </div>
                <div className={MessagesStyle.direct_messages_second_row_container}>
                  <span className={MessagesStyle.dmss_info}>
                    Hide message requests that have been detected as being potentially spam or low-quality. These will be sent to a separate inbox at the bottom of your message requests. You can still
                    access them if you want.{" "}
                    <a href="https://help.twitter.com/en/using-twitter/direct-messages" className={MessagesStyle.learn_more_messages_link}>
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className={MessagesStyle.direct_messages_single_setting_container}>
              <div className={MessagesStyle.dms_helper}>
                <div className={MessagesStyle.direct_messages_setting_header_container}>
                  <span className={MessagesStyle.single_setting_header}>Show read receipts</span>
                  <div className={MessagesStyle.setting_checkbox_container}>
                    <input type="checkbox" defaultChecked={true} />
                  </div>
                </div>
                <div className={MessagesStyle.direct_messages_second_row_container}>
                  <span className={MessagesStyle.dmss_info}>
                    Let people you’re messaging with know when you’ve seen their messages. Read receipts are not shown on message requests.{" "}
                    <a href="https://help.twitter.com/en/using-twitter/direct-messages" className={MessagesStyle.learn_more_messages_link}>
                      Learn more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={MessagesStyle.bottom_bar_mobile_container}>
        <div className={MessagesStyle.bottom_bar_helper}>
          <Link to="/home">
            <div className={MessagesStyle.mobile_home_icon_container}>
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={MessagesStyle.house_icon} />
            </div>
          </Link>
        </div>
        <div className={MessagesStyle.bottom_bar_helper}>
          <Link to="/explore">
            <div className={MessagesStyle.mobile_search_icon_container}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={MessagesStyle.magnifying_icon} />
            </div>
          </Link>
        </div>
        <div className={MessagesStyle.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={MessagesStyle.mobile_notifications_icon_container}>
              <FontAwesomeIcon icon={faBell} className={MessagesStyle.bell_icon} />
            </div>
          </Link>
        </div>
        <div className={MessagesStyle.bottom_bar_helper}>
          <Link to="/messages">
            <div className={MessagesStyle.mobile_messages_icon_container}>
              <FontAwesomeIcon icon={faEnvelope} className={MessagesStyle.messages_icon} />
            </div>
          </Link>
        </div>
      </div>
      {/* MOBILE SIDEBAR */}
      <div className={!sidebar ? `${MessagesStyle.mobile_sidebar_container} ${MessagesStyle.close_sidebar}` : `${MessagesStyle.mobile_sidebar_container} ${MessagesStyle.open_sidebar}`}>
        <div className={MessagesStyle.mobile_info_close_container}>
          <span className={MessagesStyle.mobile_info}>Account info</span>
          <div className={MessagesStyle.close_sidebar_icon_container} onClick={() => setSidebar(false)}>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
        <div className={MessagesStyle.mobile_profile_pic_add_container}>
          <img src={profilePicture} className={MessagesStyle.mobile_sidebar_pic} />
          <div className={MessagesStyle.mobile_add_icon_container}>
            <i className="bi bi-plus-lg"></i>
          </div>
        </div>
        <div className={MessagesStyle.mobile_account_info_container}>
          <span className={MessagesStyle.mobile_account_name}>Ivo Ashikov</span>
          <span className={MessagesStyle.mobile_account_username}>@IvoAshikov</span>
        </div>
        <div className={MessagesStyle.followers_container}>
          <span className={MessagesStyle.following}>
            346 <span className={MessagesStyle.blacked_out}>Following</span>
          </span>
          <span className={MessagesStyle.followers}>
            581 <span className={MessagesStyle.blacked_out}>Followers</span>
          </span>
        </div>
        <div className={MessagesStyle.mobile_option_container}>
          <div className={MessagesStyle.mobile_single_option_container}>
            <i className="bi bi-person fa-lg"></i>
            <span className={MessagesStyle.mobile_option_text}>Profile</span>
          </div>
          <div className={MessagesStyle.mobile_single_option_container}>
            <i className="bi bi-chat-left-text fa-lg"></i>
            <span className={MessagesStyle.mobile_option_text}>Topics</span>
          </div>
          <Link to="/bookmarks">
            <div className={MessagesStyle.mobile_single_option_container}>
              <i className="bi bi-bookmark fa-lg"></i>
              <span className={MessagesStyle.mobile_option_text}>Bookmarks</span>
            </div>
          </Link>
          <Link to="/lists">
            <div className={MessagesStyle.mobile_single_option_container}>
              <i className="bi bi-card-list fa-lg"></i>
              <span className={MessagesStyle.mobile_option_text}>Lists</span>
            </div>
          </Link>
          <div className={MessagesStyle.mobile_single_option_container}>
            <i className="bi bi-person-heart fa-lg"></i>
            <span className={MessagesStyle.mobile_option_text}>Twitter Circle</span>
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
      <div className={MessagesStyle.mobile_create_new_message}>
        <i className="bi bi-envelope-plus fa-lg"></i>
        <span className={MessagesStyle.mobile_create_text}>Direct Message</span>
      </div>
    </>
  );
}

export default Messages;
