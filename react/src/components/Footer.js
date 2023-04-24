import React from "react";
import { css, StyleSheet } from "aphrodite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Social.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  const style = StyleSheet.create({
    container: {
      paddingBottom: 20,
      maxWidth: "100%",
      margin: "0 auto",
    },
    footer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: 15,
      flexDirection: "row",
    },
    socialIcon: {
      marginTop: 10,
    },
  });

  return (
    <div className={css(style.container)}>
      <div className={css(style.footer)}>
        <div className={css(style.socialIcon)}>
          <Link to="https://www.youtube.com" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Link>
        </div>
        <div className={css(style.socialIcon)}>
          <Link to="https://www.facebook.com" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </Link>
        </div>
        <div className={css(style.socialIcon)}>
          <Link to="https://www.twitter.com" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Link>
        </div>
        <div className={css(style.socialIcon)}>
          <Link to="https://www.instagram.com" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
}