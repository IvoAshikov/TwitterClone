import React, { useRef, useState, useEffect } from "react";
import ListsStyle from "../components-css/Lists.module.css";
import defaultPfp from "../../images/default-pfp.png";
import { Link } from "react-router-dom";
import ListCreatedByYou from "../ListCreatedByYou";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow, faBell, faMagnifyingGlass, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Lists({ ogData }) {
  const [showDropdownLists, setShowDropdownLists] = useState(false);
  const [helperArray, setHelperArray] = useState([]);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const handleClickOutside = (e) => {
    if (refOne.current !== null && !refOne.current.contains(e.target)) {
      setShowDropdownLists(false);
    }
  };

  useEffect(() => {
    setHelperArray(ogData);
  }, [ogData]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([]));
    } else {
      let localItem = JSON.parse(localStorage.getItem("list"));
      setHelperArray(localItem);
    }
  };

  return (
    <>
      <div className={ListsStyle.lists_container}>
        <div className={ListsStyle.sticky_top_lists_container}>
          <Link to="/bookmarks" style={{ color: "white" }}>
            <div className={ListsStyle.back_button_container}>
              <i className={`bi bi-arrow-left-short ${ListsStyle.left_arrow_s}`}></i>
            </div>
          </Link>
          <div className={ListsStyle.lists_top_text_container}>
            <span className={ListsStyle.lists_top_header}>Lists</span>
            <span className={ListsStyle.lists_top_tag}>@IvoAshikov</span>
          </div>
          <div className={ListsStyle.lists_top_icon_container}>
            <Link to="create" style={{ color: "white" }}>
              <div className={ListsStyle.new_list_container}>
                <i className={`bi bi-file-earmark-plus ${ListsStyle.add_list}`}></i>
              </div>
            </Link>
            <div className={ListsStyle.lists_more_container} onClick={() => setShowDropdownLists(true)}>
              <i className={`bi bi-three-dots ${ListsStyle.more_icon_list}`}></i>
            </div>
            {showDropdownLists && (
              <div className={ListsStyle.dropdown_lists_youre_on} ref={refOne}>
                <i className={`bi bi-card-list ${ListsStyle.lists_youre_on_icon}`}></i>
                <span className={ListsStyle.lists_youre_on_text}>Lists you're on</span>
              </div>
            )}
          </div>
        </div>
        <div className={ListsStyle.pinned_lists_container}>
          <div className={ListsStyle.pinned_lists_header}>
            <h2 className={ListsStyle.header_text}>Pinned Lists</h2>
          </div>
          <div className={ListsStyle.pinned_lists_main_content}>
            <span className={ListsStyle.pinned_lists_text}>Nothing to see here yet — pin your favorite Lists to access them quickly.</span>
          </div>
        </div>
        <div className={ListsStyle.discover_lists_container}>
          <div className={ListsStyle.discover_lists_header_container}>
            <h2 className={ListsStyle.discover_lists_header}>Discover new Lists</h2>
          </div>
          <div className={ListsStyle.single_list_container}>
            <div className={ListsStyle.icon_box_container}>
              <i className={`bi bi-card-list ${ListsStyle.white_list_icon}`}></i>
            </div>
            <div className={ListsStyle.text_info_container}>
              <span className={ListsStyle.topic_list_text}>csgo</span>
              <div className={ListsStyle.topic_list_user}>
                <div className={ListsStyle.topic_list_pfp}>
                  <img src={defaultPfp} alt="Profile Picture" className={ListsStyle.lists_default_pfp} />
                </div>
                <span className={ListsStyle.topic_list_name}>Mads</span>
                <span className={ListsStyle.topic_list_username}>@madsercool95</span>
              </div>
            </div>
            <button className={ListsStyle.follow_list_btn}>Follow</button>
          </div>
          <div className={ListsStyle.single_list_container}>
            <div className={ListsStyle.icon_box_container}>
              <i className={`bi bi-card-list ${ListsStyle.white_list_icon}`}></i>
            </div>
            <div className={ListsStyle.text_info_container}>
              <span className={ListsStyle.topic_list_text}>CounterStrike</span>
              <div className={ListsStyle.topic_list_profile_pic}>
                <img src={defaultPfp} alt="Profile Picture" className={ListsStyle.lists_default_pfp} />
                <span className={ListsStyle.topic_list_name}>Proxi</span>
                <span className={ListsStyle.topic_list_username}>@ProxicOn</span>
              </div>
            </div>
            <button className={ListsStyle.follow_list_btn}>Follow</button>
          </div>
          <div className={ListsStyle.single_list_container}>
            <div className={ListsStyle.icon_box_container}>
              <i className={`bi bi-card-list ${ListsStyle.white_list_icon}`}></i>
            </div>
            <div className={ListsStyle.text_info_container}>
              <span className={ListsStyle.topic_list_text}>Faze Members</span>
              <div className={ListsStyle.topic_list_profile_pic}>
                <img src={defaultPfp} alt="Profile Picture" className={ListsStyle.lists_default_pfp} />
                <span className={ListsStyle.topic_list_name}>Peesco</span>
                <span className={ListsStyle.topic_list_username}>@AimAssistUser</span>
              </div>
            </div>
            <button className={ListsStyle.follow_list_btn}>Follow</button>
          </div>
          <div className={ListsStyle.discover_lists_show_more_container}>
            <span className={ListsStyle.show_more_text}>Show more</span>
          </div>
        </div>
        <div className={ListsStyle.your_lists_container}>
          <div className={ListsStyle.your_lists_header_container}>
            <h3 className={ListsStyle.your_lists_header_text}>Your Lists</h3>
          </div>
          {helperArray !== undefined &&
            helperArray.length !== 0 &&
            helperArray.map((list) => <ListCreatedByYou key={list.id} name={list.name} nameOfList={list.nameOfList} username={list.username} privateList={list.private} />)}
          {helperArray === undefined || helperArray.length === 0 ? (
            <div className={ListsStyle.your_lists_main_content_container}>
              <span className={ListsStyle.your_lists_text}>You haven't created or followed any Lists. When you do, they'll show up here.</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={ListsStyle.bottom_bar_mobile_container}>
        <div className={ListsStyle.bottom_bar_helper}>
          <Link to="/home">
            <div className={ListsStyle.mobile_home_icon_container}>
              <FontAwesomeIcon icon={faHouseChimneyWindow} className={ListsStyle.house_icon} />
            </div>
          </Link>
        </div>
        <div className={ListsStyle.bottom_bar_helper}>
          <Link to="/explore">
            <div className={ListsStyle.mobile_search_icon_container}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={ListsStyle.magnifying_icon} />
            </div>
          </Link>
        </div>
        <div className={ListsStyle.bottom_bar_helper}>
          <Link to="/notifications">
            <div className={ListsStyle.mobile_notifications_icon_container}>
              <FontAwesomeIcon icon={faBell} className={ListsStyle.bell_icon} />
            </div>
          </Link>
        </div>
        <div className={ListsStyle.bottom_bar_helper}>
          <Link to="/messages">
            <div className={ListsStyle.mobile_messages_icon_container}>
              <FontAwesomeIcon icon={faEnvelope} className={ListsStyle.messages_icon} />
            </div>
          </Link>
        </div>
      </div>
      <Link to="create" style={{ color: "white" }}>
        <div className={ListsStyle.mobile_create_new_list}>
          <i className={`bi bi-file-earmark-plus fa-lg ${ListsStyle.add_list}`}></i>
          <span className={ListsStyle.mobile_create_text}>New List</span>
        </div>
      </Link>
    </>
  );
}

export default Lists;
