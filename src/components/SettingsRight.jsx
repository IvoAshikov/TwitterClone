import React, { useState } from "react";
import SRStyle from "./components-css/SettingsRight.module.css";

function SettingsRight({
  yourAccountSettings,
  security,
  privacyAndSafety,
  notifications,
  accessibilityDisplayLanguage,
  additionalResources,
}) {
  return (
    <>
      <div className={SRStyle.account_right_container}>
        {yourAccountSettings && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>Your Account</span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                See information about your account, download an archive of your
                data, or learn about your account deactivation options
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-person ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Account Information
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    See your account information like your phone number and
                    email address.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-key ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Change your password
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Change your password at any time.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-download ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Download an archive of your data.
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Get insights into the type of information stored for your
                    account.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-people ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    TweetDeck Teams
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Invite anyone to Tweet from this account using the teams
                    feature in TweetDeck.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-heartbreak ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Deactivate your account
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Find out how you can deactivate your account.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}
        {/* END OF YOUR ACCOUNT SETTINGS END OF YOUR ACCOUNT SETTINGS END OF YOUR ACCOUNT SETTINGS */}
        {security && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>
                Security and account acces
              </span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                Manage your account’s security and keep track of your account’s
                usage including apps that you have connected to your account.
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-lock ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Security
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage your account's security
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-layers ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Apps and sessions
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    See information about when you logged into your account and
                    the apps you connected to your account.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-arrow-left-right ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Connect accounts
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage Google or Apple accounts connected to Twitter to log
                    in.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}

        {privacyAndSafety && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>
                Privacy and safety
              </span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                Manage what information you see and share on Twitter.
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-people ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Audience and tagging
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage what information you allow other people on Twitter to
                    see.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-pencil ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Your Tweets
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage the information associated with your Tweets.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-window-stack ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Content you see
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Decide what you see on Twitter based on your preferences
                    like Topics and interests
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-volume-mute ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Mute and block
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage the accounts, words, and notifications that you’ve
                    muted or blocked.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-envelope ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Direct messages
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage who can message you directly.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-filter-circle ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Spaces
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage who can see your Spaces listening activity
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-search ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Discoverability and contacts
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Control your discoverability settings and manage contacts
                    you’ve imported.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
            <div className={SRStyle.header_text_data_sharing}>
              Data sharing and personalization
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <div
                className={SRStyle.account_right_single_setting_icon_container}
              >
                <i
                  className={`bi bi-arrow-up-right-square ${SRStyle.left_side_icon}`}
                ></i>
              </div>
              <div
                className={SRStyle.account_right_single_setting_name_container}
              >
                <span className={SRStyle.account_right_single_setting_text}>
                  Ads preferences
                </span>
                <span className={SRStyle.account_right_single_setting_info}>
                  Manage your ads experience on Twitter.
                </span>
              </div>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <div
                className={SRStyle.account_right_single_setting_icon_container}
              >
                <i className={`bi bi-cup-hot ${SRStyle.left_side_icon}`}></i>
              </div>
              <div
                className={SRStyle.account_right_single_setting_name_container}
              >
                <span className={SRStyle.account_right_single_setting_text}>
                  Cookie preferences
                </span>
                <span className={SRStyle.account_right_single_setting_info}>
                  Manage your cookie experience on Twitter.
                </span>
              </div>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <div
                className={SRStyle.account_right_single_setting_icon_container}
              >
                <i className={`bi bi-activity ${SRStyle.left_side_icon}`}></i>
              </div>
              <div
                className={SRStyle.account_right_single_setting_name_container}
              >
                <span className={SRStyle.account_right_single_setting_text}>
                  Inferred identity
                </span>
                <span className={SRStyle.account_right_single_setting_info}>
                  Allow Twitter to personalize your experience with your
                  inferred activity, e.g. activity on devices you haven’t used
                  to log in to Twitter.
                </span>
              </div>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <div
                className={SRStyle.account_right_single_setting_icon_container}
              >
                <i
                  className={`bi bi-arrow-left-right ${SRStyle.left_side_icon}`}
                ></i>
              </div>
              <div
                className={SRStyle.account_right_single_setting_name_container}
              >
                <span className={SRStyle.account_right_single_setting_text}>
                  Data sharing with business partners
                </span>
                <span className={SRStyle.account_right_single_setting_info}>
                  Allow sharing of additional information with Twitter’s
                  business partners.
                </span>
              </div>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <div
                className={SRStyle.account_right_single_setting_icon_container}
              >
                <i className={`bi bi-geo-alt ${SRStyle.left_side_icon}`}></i>
              </div>
              <div
                className={SRStyle.account_right_single_setting_name_container}
              >
                <span className={SRStyle.account_right_single_setting_text}>
                  Location information
                </span>
                <span className={SRStyle.account_right_single_setting_info}>
                  Manage the location information Twitter uses to personalize
                  your experience.
                </span>
              </div>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.header_text_data_sharing}>
              Learn more about privacy on Twitter
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <a
                href="https://privacy.twitter.com/en"
                target="_blank"
                className={SRStyle.account_link_privacy}
              >
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Privacy center
                  </span>
                </div>
              </a>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <a
                href="https://twitter.com/en/privacy"
                target="_blank"
                className={SRStyle.account_link_privacy}
              >
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Privacy policy
                  </span>
                </div>
              </a>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
            <div className={SRStyle.account_right_single_setting_container}>
              <a
                href="https://help.twitter.com/en/forms/privacy"
                target="_blank"
                className={SRStyle.account_link_privacy}
              >
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Contact us
                  </span>
                </div>
              </a>
              <div className={SRStyle.right_icon_container}>
                <i
                  className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                ></i>
              </div>
            </div>
          </>
        )}
        {notifications && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>
                Notifications
              </span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                Select the kinds of notifications you get about your activities,
                interests, and recommendations.
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-toggles2 ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Filters
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Choose the notifications you’d like to see — and those you
                    don’t.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-phone-vibrate ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Preferences
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Select your preferences by notification type.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}
        {accessibilityDisplayLanguage && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>
                Accessibility, display and languages
              </span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                Manage how Twitter content is displayed to you.
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-eye-slash ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Accessibility
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage aspects of your Twitter experience such as limiting
                    color contrast and motion.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i className={`bi bi-brush ${SRStyle.left_side_icon}`}></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Display
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage your font size, color, and background. These settings
                    affect all the Twitter accounts on this browser.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-translate ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Languages
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Manage which languages are used to personalize your Twitter
                    experience.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <div
                  className={
                    SRStyle.account_right_single_setting_icon_container
                  }
                >
                  <i
                    className={`bi bi-bar-chart ${SRStyle.left_side_icon}`}
                  ></i>
                </div>
                <div
                  className={
                    SRStyle.account_right_single_setting_name_container
                  }
                >
                  <span className={SRStyle.account_right_single_setting_text}>
                    Data usage
                  </span>
                  <span className={SRStyle.account_right_single_setting_info}>
                    Limit how Twitter uses some of your network data. These
                    settings affect all the Twitter accounts on this browser.
                  </span>
                </div>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-caret-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}
        {additionalResources && (
          <>
            <div className={SRStyle.account_right_header_container}>
              <span className={SRStyle.account_right_header}>
                Additional resources
              </span>
            </div>
            <div className={SRStyle.account_right_info_container}>
              <span className={SRStyle.account_right_info_text}>
                Check out other places for helpful information to learn more
                about Twitter products and services.
              </span>
            </div>
            <div className={SRStyle.release_notes_container}>
              <span className={SRStyle.release_notes_header}>
                Release Notes
              </span>
            </div>
            <div className={SRStyle.account_right_main_content_container}>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://twitter.com/i/release_notes"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Release Notes
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.release_notes_container2}>
                <span className={SRStyle.release_notes_header2}>Legal</span>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Ads info
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Cookie Policy
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://twitter.com/en/privacy"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Privacy Policy
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://twitter.com/en/tos"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Terms of Service
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.release_notes_container2}>
                <span className={SRStyle.release_notes_header2}>
                  Miscellaneous
                </span>
              </div>

              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://about.twitter.com/en"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      About
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://help.twitter.com/en/resources/accessibility"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Accessibility
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://ads.twitter.com/onboarding/18ce55j86qz/welcome?ref=gl-tw-tw-twitter-advertise"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Advertising
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://blog.twitter.com/"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Blog
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://about.twitter.com/en/who-we-are/brand-toolkit"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Brand Resources
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://careers.twitter.com/"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Carreers
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://developer.twitter.com/en"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Developers
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://twitter.com/en/tos"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Directory
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://help.twitter.com/en"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Help Center
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://marketing.twitter.com/en"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Marketing
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://status.twitterstat.us/"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Status
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
              <div className={SRStyle.account_right_single_setting_container}>
                <a
                  href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
                  target="_blank"
                  className={SRStyle.account_link_privacy}
                >
                  <div
                    className={
                      SRStyle.account_right_single_setting_name_container
                    }
                  >
                    <span className={SRStyle.account_right_single_setting_text}>
                      Twitter for Business
                    </span>
                  </div>
                </a>
                <div className={SRStyle.right_icon_container}>
                  <i
                    className={`bi bi-arrow-up-right ${SRStyle.caret_right_right}`}
                  ></i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SettingsRight;
