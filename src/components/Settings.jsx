import React, { useState } from "react";
import SettingsStyle from "./components-css/Settings.module.css";
import SettingsRight from "./SettingsRight";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faBell,
  faMagnifyingGlass,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Settings() {
  const [yourAccountSettings, setYourAccountSettings] = useState(true);
  const [security, setSecurity] = useState(false);
  const [privacyAndSafety, setPrivacyAndSafety] = useState(false);
  const [notifications, setNotificiations] = useState(false);
  const [accessibilityDisplayLanguage, setAccessibilityDisplayLanguage] =
    useState(false);
  const [additionalResources, setAdditionalResources] = useState(false);
  return (
    <>
      <div className={SettingsStyle.settings_container}>
        <div className={SettingsStyle.settings_middle_container}>
          <div className={SettingsStyle.settings_header_container}>
            <span className={SettingsStyle.settings_header}>Settings</span>
          </div>
          <div
            className={
              yourAccountSettings
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(true);
              setSecurity(false);
              setPrivacyAndSafety(false);
              setNotificiations(false);
              setAccessibilityDisplayLanguage(false);
              setAdditionalResources(false);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Your account
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_container}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
          <div
            className={
              security
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(false);
              setSecurity(true);
              setPrivacyAndSafety(false);
              setNotificiations(false);
              setAccessibilityDisplayLanguage(false);
              setAdditionalResources(false);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Security and account access
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_containet}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
          <div
            className={
              privacyAndSafety
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(false);
              setSecurity(false);
              setPrivacyAndSafety(true);
              setNotificiations(false);
              setAccessibilityDisplayLanguage(false);
              setAdditionalResources(false);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Privacy and Safety
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_containet}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
          <div
            className={
              notifications
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(false);
              setSecurity(false);
              setPrivacyAndSafety(false);
              setNotificiations(true);
              setAccessibilityDisplayLanguage(false);
              setAdditionalResources(false);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Notifications
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_containet}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
          <div
            className={
              accessibilityDisplayLanguage
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(false);
              setSecurity(false);
              setPrivacyAndSafety(false);
              setNotificiations(false);
              setAccessibilityDisplayLanguage(true);
              setAdditionalResources(false);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Accessibility, display and language
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_containet}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
          <div
            className={
              additionalResources
                ? `${SettingsStyle.settings_single_setting_container} ${SettingsStyle.active_option}`
                : `${SettingsStyle.settings_single_setting_container}`
            }
            onClick={() => {
              setYourAccountSettings(false);
              setSecurity(false);
              setPrivacyAndSafety(false);
              setNotificiations(false);
              setAccessibilityDisplayLanguage(false);
              setAdditionalResources(true);
            }}
          >
            <div
              className={SettingsStyle.settings_single_setting_name_container}
            >
              <span className={SettingsStyle.single_setting_name}>
                Additional resources
              </span>
            </div>
            <div className={SettingsStyle.single_setting_icon_containet}>
              <i
                className={`bi bi-caret-right ${SettingsStyle.caret_settings}`}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className={SettingsStyle.mobile_right_bar}>
        <SettingsRight
          yourAccountSettings={yourAccountSettings}
          security={security}
          privacyAndSafety={privacyAndSafety}
          notifications={notifications}
          accessibilityDisplayLanguage={accessibilityDisplayLanguage}
          additionalResources={additionalResources}
        />
      </div>
      <div className={SettingsStyle.bottom_bar_mobile_container}>
        <div className={SettingsStyle.bottom_bar_helper}>
          <Link to="/home">
            <div className={SettingsStyle.mobile_home_icon_container}>
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                className={SettingsStyle.house_icon}
              />
            </div>
          </Link>
        </div>
        <div className={SettingsStyle.bottom_bar_helper}>
          <Link to="/explore">
            <div className={SettingsStyle.mobile_search_icon_container}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={SettingsStyle.magnifying_icon}
              />
            </div>
          </Link>
        </div>
        <div className={SettingsStyle.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={SettingsStyle.mobile_notifications_icon_container}>
              <FontAwesomeIcon
                icon={faBell}
                className={SettingsStyle.bell_icon}
              />
            </div>
          </Link>
        </div>
        <div className={SettingsStyle.bottom_bar_helper}>
          <Link to="/messages">
            <div className={SettingsStyle.mobile_messages_icon_container}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={SettingsStyle.messages_icon}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Settings;
