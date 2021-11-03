import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [socialMediaLink, setSocialMediaLink] = useState({});
  const [contactAddress, setContactAddress] = useState({});
  const getContactList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/contacts`,
      });
     
      const social_media_link = JSON.parse(
        responese.data.data.social_media_link
      );
      setSocialMediaLink(social_media_link);
      const contact_address = JSON.parse(responese.data.data.contact_address);
      setContactAddress(contact_address);
    } catch (error) {
      console.log(error);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    getContactList();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.companyInfo}>
            <img
              src="/assets/images/fastsolution-logo@2x.svg"
              alt=""
              // height="50px"
              className={styles.logo}
            />
            <p style={{ letterSpacing: "0.9px" }}>
              Transforming Business Using Technology
            </p>
            <div className={styles.social_icon}>
              <div>
                <a href={socialMediaLink.facebook} target="_blank" rel="noreferrer">
                  <img
                    src="/assets/images/fb.svg"
                    alt=""
                    className={`${styles.icons}`}
                  />
                </a>
              </div>
              <div>
                <a href={socialMediaLink.twitter} target="_blank" rel="noreferrer">
                  <img
                    src="/assets/images/twitter.svg"
                    alt=""
                    className={`${styles.icons}`}
                  />
                </a>
              </div>
              <div>
                <a href={socialMediaLink.linkedin} target="_blank" rel="noreferrer">
                  <img
                    src="/assets/images/linkedin.svg"
                    alt=""
                    className={`${styles.icons}`}
                  />
                </a>
              </div>
              <div>
                <a href={socialMediaLink.instragram} target="_blank" rel="noreferrer">
                  <img
                    src="/assets/images/instagram.svg"
                    alt=""
                    className={`${styles.icons}`}
                  />
                </a>
              </div>
              <div>
                <a href={socialMediaLink.youtube} target="_blank" rel="noreferrer">
                  <img
                    src="/assets/images/youtube.svg"
                    alt=""
                    className={`${styles.icons}`}
                  />
                </a>
              </div>
            </div>

            <p>&copy; 2019-2020 Newroz Technologies Limited</p>
          </div>
          <div className={styles.contactStyle}>
            <div className={styles.title}>CONTACT US </div>

            <p>{contactAddress.us}</p>
            <p>{contactAddress.bd}</p>
            <p>{contactAddress.iq}</p>
            <p>{contactAddress.email}</p>
          </div>
          <div className={styles.linkStyle}>
            <div className={styles.link_title}>USEFUL LINKS</div>
            <p>
              <Link className={styles.link_item_style} to="/about-us">
                 About Us 
              </Link>{" "}
            </p>
            <p>Our Blog </p>
            <p>
              <Link className={styles.link_item_style} to="/portfolio">
             Protfolio 
              </Link>
            </p>
            <p>
              <Link className={styles.link_item_style} to="/contact-us">
                Work With us 
              </Link>{" "}
            </p>
          </div>

          <img
            src="/assets/images/scroller.svg"
            alt=""
            // height="50px"
            className={styles.scroller}
            onClick={scrollToTop}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
