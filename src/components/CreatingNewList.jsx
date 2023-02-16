import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewListStyle from "./components-css/CreatingNewList.module.css";

function CreatingNewList({ myFunc }) {
  const [inputNameText, setInputNameText] = useState("");
  const [inputDescriptionText, setInputDescriptionText] = useState("");
  const [showNameCharLimit, setShowNameCharLimit] = useState(false);
  const [nameAnimationDiv, setNameAnimationDiv] = useState(false);
  const [descriptionAnimationDiv, setDescriptionAnimationDiv] = useState(false);
  const [showDescriptionCharLimit, setShowDescriptionCharLimit] = useState(false);
  const [newList, setNewList] = useState([]);
  const func = () => {
    myFunc(newList);
  };
  let isChecked = false;
  const onCheckBoxCheck = (e) => {
    if (e.target.checked) {
      isChecked = true;
    } else {
      isChecked = false;
    }
  };

  const newListHandler = () => {
    setNewList([
      {
        id: Math.floor(Math.random() * 10000000),
        nameOfList: inputNameText,
        name: "Ivo Ashikov",
        username: "IvoAshikov",
        private: isChecked,
      },
    ]);
  };

  useEffect(() => {
    func(newList);
    saveToLocalStorage();
  }, [newList]);

  const nameChangeHandler = (e) => {
    setInputNameText(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setInputDescriptionText(e.target.value);
  };

  const saveToLocalStorage = () => {
    if (newList.length !== 0) {
      localStorage.setItem("list", JSON.stringify(newList));
    }
  };

  return (
    <>
      <div className={NewListStyle.create_new_list_container}>
        <div className={NewListStyle.cnl_navigation_container}>
          <Link to="/lists" style={{ color: "white" }}>
            <div className={NewListStyle.close_icon_container}>
              <i className={`bi bi-x ${NewListStyle.close_dropdown_icon}`}></i>
            </div>
          </Link>
          <div className={NewListStyle.cnl_header_container}>
            <span className={NewListStyle.cnl_header_text}>Create a new List</span>
          </div>
          {inputNameText.length !== 0 ? (
            // <Link to="/lists/members">
            <button className={NewListStyle.cnl_next_btn_active} onClick={newListHandler}>
              Next
            </button>
          ) : (
            // </Link>
            <button className={NewListStyle.cnl_next_btn}>Next</button>
          )}
        </div>
        <div className={NewListStyle.cnl_insert_picture_container}>
          <div className={NewListStyle.cnl_insert_icon_container}>
            <i className={`bi bi-camera ${NewListStyle.camera_icon}`}></i>
          </div>
        </div>
        <div className={NewListStyle.cnl_name_input_container}>
          <div className={NewListStyle.cnl_input_helper}>
            <div className={NewListStyle.hidden_input_text}>
              {nameAnimationDiv ? <span className={NewListStyle.hidden_name_text_animation}>Name</span> : <span className={NewListStyle.hidden_name_text}>Name</span>}
              {showNameCharLimit && <span className={NewListStyle.hidden_char_limit}>{inputNameText.length} / 25</span>}
            </div>
            <input
              value={inputNameText}
              onChange={nameChangeHandler}
              onBlur={() => {
                if (inputNameText.length === 0) {
                  setShowNameCharLimit(false);
                  setNameAnimationDiv(false);
                }
              }}
              onFocus={() => {
                setNameAnimationDiv(true);
                setShowNameCharLimit(true);
              }}
              type="text"
              className={NewListStyle.cnl_name_input}
              maxLength={25}
            />
          </div>
        </div>
        <div className={NewListStyle.cnl_description_input_container}>
          <div className={NewListStyle.cnl_description_helper}>
            <div className={NewListStyle.hidden_input_description}>
              {descriptionAnimationDiv ? (
                <span className={NewListStyle.hidden_name_description_animation}>Description</span>
              ) : (
                <span className={NewListStyle.hidden_name_description}>Description</span>
              )}
              {showDescriptionCharLimit && <span className={NewListStyle.hidden_char_limit_description}>{inputDescriptionText.length} / 100</span>}
            </div>
            <input
              onChange={descriptionChangeHandler}
              onClick={() => setDescriptionAnimationDiv(true)}
              onBlur={() => {
                if (inputDescriptionText.length === 0) {
                  setDescriptionAnimationDiv(false);
                  setShowDescriptionCharLimit(false);
                }
              }}
              onFocus={() => setShowDescriptionCharLimit(true)}
              type="text"
              className={NewListStyle.cnl_description_input}
              maxLength={100}
            />
          </div>
        </div>
        <div className={NewListStyle.cnl_private_container}>
          <div className={NewListStyle.cnl_private_text}>
            <span className={NewListStyle.cnl_option_text}>Make Private</span>
            <span className={NewListStyle.cnl_info_text}>When you make a List private, only you can see it.</span>
          </div>
          <div className={NewListStyle.cnl_private_checkbox_container}>
            <input type="checkbox" className={NewListStyle.cnl_checkbox} onClick={onCheckBoxCheck} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatingNewList;
