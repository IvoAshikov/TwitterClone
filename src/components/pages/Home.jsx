import { faAt, faEarth, faUserCheck, faHouseChimneyWindow, faMagnifyingGlass, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef } from "react";
import HomeStyle from "../components-css/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SingleTweet from "../SingleTweet";
import SingleReTweet from "../SingleRetweet";
import SingleTweetCreatedByYou from "../SingleTweetCreatedByYou";
import HomeReverse from "../HomeReverse.json";
import profilePicture from "../../images/twitter-profile-pic.png";
import { Link } from "react-router-dom";
import navbarst from "../components-css/Navbar.module.css";

function Home() {
  const [newTweets, setNewTweets] = useState([]); // Putting the new post in this empty array
  const [inputTrue, setInputTrue] = useState(false);
  const refOne = useRef(null); // Ref for handling click outside
  const refTwo = useRef(null); // Ref for handling click outside
  const refThree = useRef(null); // Ref for handling click outside
  const [newTweetText, setNewTweetText] = useState(""); // The text from the input for creating new post
  const [audience, setAudience] = useState(false); // State for opening and closing the Choose Audience menu
  const [wcReply, setWCReply] = useState(false); // State for opening and closing the Who can reply menu
  const [audienceOption1Check, setAudienceOption1Check] = useState(true); // State for hiding the checkmark for Audience menu
  const [audienceOption2Check, setAudienceOption2Check] = useState(false); // State for hiding the checkmark for Audience menu
  const [wcrOption1, setWcrOption1] = useState(true); // State for hiding the checkmark for WhoCanReply menu
  const [wcrOption2, setWcrOption2] = useState(false); // State for hiding the checkmark for WhoCanReply menu
  const [wcrOption3, setWcrOption3] = useState(false); // State for hiding the checkmark for WhoCanReply menu
  const [stars, setStars] = useState(false); // State for the stars dropdown at the top
  const [createrDropdown, setCreatorDropdown] = useState(false); // Dropdown for mobile sidebar
  const [professionalTools, setProfessionalTools] = useState(false); // Dropdown for mobile sidebar
  const [settingsAndSupport, setSettingsAndSupport] = useState(false); // Dropdown for mobile sidebar
  const [sidebar, setSidebar] = useState(false); // State for showing sidebar for mobile

  // Handling Click Outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const handleClickOutside = (e) => {
    if (refOne.current !== null && !refOne.current.contains(e.target)) {
      setAudience(false);
    }
    if (refTwo.current !== null && !refTwo.current.contains(e.target)) {
      setWCReply(false);
    }
    if (refThree.current !== null && !refThree.current.contains(e.target)) {
      setStars(false);
    }
  };

  // End of Handle Click Outside

  const newTweetTextHandler = (e) => {
    setNewTweetText(e.target.value);
  };

  // Create new Tweet

  const newTweetsHandler = (e) => {
    e.preventDefault();
    setNewTweets([
      ...newTweets,
      {
        id: Math.floor(Math.random() * 10000000),
        text: newTweetText,
        replies: 0,
        retweets: 0,
        likes: 0,
        name: "Ivo Ashikov",
        username: "IvoAshikov",
        verified: false,
      },
    ]);
    setNewTweetText("");
  };

  // End of create new Tweet

  return (
    <>
      <main className={HomeStyle.center_container}>
        <div className={HomeStyle.home_top_bar}>
          {/* Mobile Sticky top bar with profile picture */}
          <div className={HomeStyle.mobile_prof_pic_container} onClick={() => setSidebar(true)}>
            <img src={profilePicture} className={HomeStyle.prof_pic_home} />
          </div>
          {/* End of Mobile Sticky top bar with profile picture */}
          <p className={HomeStyle.home_top_bar_text}>Home</p>
          <div className={HomeStyle.top_bar_for_hover} onClick={() => setStars(!stars)}>
            <i className={`bi bi-stars ${HomeStyle.clickable_bi_stars}`}></i>
          </div>
          {/* Stars dropdown */}
          {stars && (
            <div className={HomeStyle.stars_container} ref={refThree}>
              <div className={HomeStyle.top_part_container}>
                <i className={`bi bi-stars ${HomeStyle.big_star}`}></i>
                <div className={HomeStyle.top_part_helper}>
                  <p className={HomeStyle.stars_show_first}>Home shows you top Tweets first</p>
                </div>
              </div>
              <div className={HomeStyle.stars_single_option}>
                <i className={`bi bi-arrow-left-right ${HomeStyle.stars_arrows}`}></i>
                <div className={HomeStyle.stars_single_option_text}>
                  <p className={HomeStyle.stars_normal_text}>See latest Tweets instead</p>
                  <p className={HomeStyle.stars_small_text}>You'll see Tweets show up as they happen.</p>
                </div>
              </div>
              <div className={HomeStyle.stars_single_option}>
                <i className={`bi bi-gear ${HomeStyle.gear_content}`}></i>
                <p className={HomeStyle.stars_normal_text}>View content preferences</p>
              </div>
            </div>
          )}
          {/* End of stars dropdown */}
        </div>
        {/* Create new Tweet */}
        <div className={HomeStyle.create_new_post_container}>
          <div className={HomeStyle.cnp_first_row}>
            <img src={profilePicture} alt="Profile Picture" className={HomeStyle.cnp_profile_pic} />
            <div className={HomeStyle.helper_for_dropdown}>
              <div className={HomeStyle.dropdown}>
                {inputTrue && (
                  <button className={audienceOption1Check === true ? `${HomeStyle.dropdown_btn_everyone}` : `${HomeStyle.dropdown_btn_circle}`} onClick={() => setAudience(!audience)}>
                    {audienceOption1Check === true ? "Everyone" : "Twitter Circle"}
                    <i className="bi bi-caret-down"></i>
                  </button>
                )}
                {/* Audience Dropdown */}
                {audience && (
                  <div className={HomeStyle.dropdown_content} ref={refOne}>
                    <p className={HomeStyle.dropdown_header}>Choose audience</p>
                    <div
                      className={HomeStyle.drpd_option1}
                      onClick={() => {
                        setAudienceOption1Check(true);
                        setAudienceOption2Check(false);
                        setAudience(false);
                      }}
                    >
                      <div className={HomeStyle.drpd_everyone}>
                        <FontAwesomeIcon icon={faEarth} className={HomeStyle.earth_icon} />
                      </div>
                      <p>Everyone</p>
                      {audienceOption1Check && <i className={`bi bi-check-lg ${HomeStyle.checkmark_drpd1}`}></i>}
                    </div>
                    <div
                      className={HomeStyle.drpd_option2}
                      onClick={() => {
                        setAudienceOption1Check(false);
                        setAudienceOption2Check(true);
                        setAudience(false);
                      }}
                    >
                      <div className={HomeStyle.drpd_twtcircle}>
                        <i className="bi bi-person-heart"></i>
                      </div>
                      <div className={HomeStyle.drpd_option2_helper}>
                        <p>Twitter Circle</p>
                        <p className={HomeStyle.twt_circle_2nd}>
                          <span className={HomeStyle.bold}>0</span> People
                          <span className={HomeStyle.bold_underline}>Edit</span>
                        </p>
                      </div>
                      {audienceOption2Check && <i className="bi bi-check-lg"></i>}
                    </div>
                  </div>
                )}
                {/* End of Audience Dropdown */}
              </div>
              {/* Create new Tweet - Input */}
              <input value={newTweetText} className={HomeStyle.cnp_input} type="text" placeholder="What's happening?" onChange={newTweetTextHandler} onClick={() => setInputTrue(true)} />
              {/* End of Create new Tweet - Input */}
              {/* Who can Reply Dropdown */}
              <div className={HomeStyle.who_can_reply} ref={refTwo}>
                {inputTrue && (
                  <div className={HomeStyle.visible_who_can_reply} onClick={() => setWCReply(!wcReply)}>
                    {wcrOption1 && (
                      <>
                        <FontAwesomeIcon icon={faEarth} className={HomeStyle.who_can_reply_world_icon} />
                        <span className={HomeStyle.who_can_reply_visible_text}>Everyone can reply</span>
                      </>
                    )}
                    {wcrOption2 && (
                      <>
                        <FontAwesomeIcon icon={faUserCheck} className={HomeStyle.who_can_reply_world_icon} />
                        <span className={HomeStyle.who_can_reply_visible_text}>People you follow can reply</span>
                      </>
                    )}
                    {wcrOption3 && (
                      <>
                        <FontAwesomeIcon icon={faAt} className={HomeStyle.who_can_reply_world_icon} />
                        <span className={HomeStyle.who_can_reply_visible_text}>Only people you mention can reply</span>
                      </>
                    )}
                  </div>
                )}
                {wcReply && (
                  <div className={HomeStyle.dropdown_who_can_reply}>
                    <div className={HomeStyle.who_can_reply_top_text}>
                      <p className={HomeStyle.dropdown_wcr_header}>Who can reply?</p>
                      <p className={HomeStyle.dropdown_info}>Choose who can reply to this Tweet.</p>
                      <p className={HomeStyle.dropdown_info}>Anyone mentioned can always reply.</p>
                    </div>
                    <div
                      className={HomeStyle.single_option}
                      onClick={() => {
                        setWcrOption1(true);
                        setWcrOption2(false);
                        setWcrOption3(false);
                        setWCReply(false);
                      }}
                    >
                      <div className={HomeStyle.earth_icon_wcr}>
                        <FontAwesomeIcon icon={faEarth} className={HomeStyle.earth_icon} />
                      </div>
                      <span className={HomeStyle.option_text}>Everyone</span>
                      {wcrOption1 && <i className="bi bi-check-lg"></i>}
                    </div>
                    <div className={HomeStyle.wcr_options}>
                      <div
                        className={HomeStyle.single_option}
                        onClick={() => {
                          setWcrOption1(false);
                          setWcrOption2(true);
                          setWcrOption3(false);
                          setWCReply(false);
                        }}
                      >
                        <div className={HomeStyle.person_icon_wcr}>
                          <i className="bi bi-person-check"></i>
                        </div>
                        <span className={HomeStyle.option_text}>People you follow</span>
                        {wcrOption2 && <i className="bi bi-check-lg"></i>}
                      </div>
                      <div
                        className={`${HomeStyle.single_option} ${HomeStyle.single_option2}`}
                        onClick={() => {
                          setWcrOption1(false);
                          setWcrOption2(false);
                          setWcrOption3(true);
                          setWCReply(false);
                        }}
                      >
                        <div className={HomeStyle.at_icon_wcr}>
                          <i className="bi bi-at"></i>
                        </div>
                        <span className={HomeStyle.option_text}>Only people you mention</span>
                        {wcrOption3 && <i className="bi bi-check-lg"></i>}
                      </div>
                    </div>
                  </div>
                )}
                {/* End of Who Can Reply */}
              </div>
            </div>
          </div>
          {/* Attach Files */}
          <div className={HomeStyle.cnp_second_row}>
            <div className={HomeStyle.cnp_icons}>
              <div className={HomeStyle.image_icon_container} title="Media">
                <i className={`bi bi-image ${HomeStyle.sr_i}`}></i>
              </div>
              <div className={HomeStyle.gif_icon_container} title="GIF">
                <i className={`bi bi-filetype-gif ${HomeStyle.sr_i}`}></i>
              </div>
              <div className={HomeStyle.poll_icon_container} title="Poll">
                <i className={`bi bi-bar-chart-steps ${HomeStyle.sr_i}`}></i>
              </div>
              <div className={HomeStyle.emoji_icon_container} title="Emoji">
                <i
                  className={`bi bi-emoji-smile 
                ${HomeStyle.sr_i}`}
                ></i>
              </div>
              <div className={HomeStyle.schedule_icon_container} title="Schedule">
                <i className={`bi bi-calendar4-event ${HomeStyle.sr_i}`}></i>
              </div>
              <div className={`${HomeStyle.location_icon_container} ${HomeStyle.blacked_out_div}`}>
                <i className={`bi bi-geo-alt ${HomeStyle.blacked_out_icon}`}></i>
              </div>
            </div>
            {newTweetText.length === 0 ? (
              <button className={HomeStyle.cnp_tweet_btn_unactive} onClick={newTweetsHandler}>
                Tweet
              </button>
            ) : (
              <button className={HomeStyle.cnp_tweet_btn_active} onClick={newTweetsHandler}>
                Tweet
              </button>
            )}
          </div>
          {/* End of Attach Files */}
        </div>
        {/* End of Create new Tweet */}
        {/* Recent Tweets */}
        <div className={HomeStyle.tweets_container}>
          {newTweets.reverse().map((newtweet) => (
            <SingleTweetCreatedByYou
              key={newtweet.id}
              text={newtweet.text}
              replies={newtweet.replies}
              likes={newtweet.likes}
              retweets={newtweet.retweets}
              name={newtweet.name}
              username={newtweet.username}
              profile_image_url={newtweet.profile_image}
              verified={newtweet.verified}
            />
          ))}
          {HomeReverse.data.map((tweet) =>
            Object.keys(tweet).includes("referenced_tweets") && tweet.referenced_tweets[0].type == "retweeted" ? (
              <SingleReTweet
                key={tweet.id}
                rtwtBy={tweet.author_id}
                replies={tweet.public_metrics.reply_count}
                likes={tweet.public_metrics.like_count}
                retweets={tweet.public_metrics.retweet_count}
                ogTweetID={tweet.referenced_tweets[0].id}
                text={tweet.text.replace(/^[RT]+\s.[a-z]+.\s/gim, "")}
              />
            ) : (
              <SingleTweet
                key={tweet.id}
                text={tweet.text}
                replies={tweet.public_metrics.reply_count}
                likes={tweet.public_metrics.like_count}
                retweets={tweet.public_metrics.retweet_count}
                accountID={tweet.author_id}
              />
            )
          )}
        </div>
        {/* End of Recent Tweets */}
        {/* MOBILE */}
        {/* Bottom Navigation */}
        <div className={HomeStyle.bottom_bar_mobile_container}>
          <div className={HomeStyle.bottom_bar_helper}>
            <Link to="/home">
              <div className={HomeStyle.mobile_home_icon_container}>
                <FontAwesomeIcon icon={faHouseChimneyWindow} className={HomeStyle.house_icon} />
              </div>
            </Link>
          </div>
          <div className={HomeStyle.bottom_bar_helper}>
            <Link to="/explore">
              <div className={HomeStyle.mobile_search_icon_container}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={HomeStyle.magnifying_icon} />
              </div>
            </Link>
          </div>
          <div className={HomeStyle.bottom_bar_helper}>
            <Link to="/notifications">
              <div className={HomeStyle.mobile_notifications_icon_container}>
                <FontAwesomeIcon icon={faBell} className={HomeStyle.bell_icon} />
              </div>
            </Link>
          </div>
          <div className={HomeStyle.bottom_bar_helper}>
            <Link to="/messages">
              <div className={HomeStyle.mobile_messages_icon_container}>
                <FontAwesomeIcon icon={faEnvelope} className={HomeStyle.messages_icon} />
              </div>
            </Link>
          </div>
        </div>
        {/* End of Bottom Navigation */}
        <div className={HomeStyle.create_new_tweet_container}>
          <i className="bi bi-pen-fill fa-lg"></i>
          <span className={HomeStyle.mobile_tweet_text}>Tweet</span>
        </div>
        {
          // SIDEBAR
          <div className={!sidebar ? `${HomeStyle.mobile_sidebar_container} ${HomeStyle.close_sidebar}` : `${HomeStyle.mobile_sidebar_container} ${HomeStyle.open_sidebar}`}>
            <div className={HomeStyle.mobile_info_close_container}>
              <span className={HomeStyle.mobile_info}>Account info</span>
              <div className={HomeStyle.close_sidebar_icon_container} onClick={() => setSidebar(false)}>
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
            <div className={HomeStyle.mobile_profile_pic_add_container}>
              <img src={profilePicture} className={HomeStyle.mobile_sidebar_pic} />
              <div className={HomeStyle.mobile_add_icon_container}>
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <div className={HomeStyle.mobile_account_info_container}>
              <span className={HomeStyle.mobile_account_name}>Ivo Ashikov</span>
              <span className={HomeStyle.mobile_account_username}>@IvoAshikov</span>
            </div>
            <div className={HomeStyle.followers_container}>
              <span className={HomeStyle.following}>
                346 <span className={HomeStyle.blacked_out}>Following</span>
              </span>
              <span className={HomeStyle.followers}>
                581 <span className={HomeStyle.blacked_out}>Followers</span>
              </span>
            </div>
            <div className={HomeStyle.mobile_option_container}>
              <div className={HomeStyle.mobile_single_option_container}>
                <i className="bi bi-person fa-lg"></i>
                <span className={HomeStyle.mobile_option_text}>Profile</span>
              </div>
              <div className={HomeStyle.mobile_single_option_container}>
                <i className="bi bi-chat-left-text fa-lg"></i>
                <span className={HomeStyle.mobile_option_text}>Topics</span>
              </div>
              <Link to="/bookmarks">
                <div className={HomeStyle.mobile_single_option_container}>
                  <i className="bi bi-bookmark fa-lg"></i>
                  <span className={HomeStyle.mobile_option_text}>Bookmarks</span>
                </div>
              </Link>
              <Link to="/lists">
                <div className={HomeStyle.mobile_single_option_container}>
                  <i className="bi bi-card-list fa-lg"></i>
                  <span className={HomeStyle.mobile_option_text}>Lists</span>
                </div>
              </Link>
              <div className={HomeStyle.mobile_single_option_container}>
                <i className="bi bi-person-heart fa-lg"></i>
                <span className={HomeStyle.mobile_option_text}>Twitter Circle</span>
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
                    <Link to="/settings/account" style={{ color: "white" }}>
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
          //End of Sidebar
        }
      </main>
    </>
  );
}

export default Home;
