import React, { useState, useEffect } from "react";
import styles from "./styles/services.module.css";

import GetInTouch from "./partial/GetInTouch";
import axios from "axios";
import { useParams } from "react-router-dom";
import PoductCarousel from "./partial/PoductCarousel";
 
const ServiceDetails = ( ) => {
  let { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});

  const getServiceDetailList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/servicedetails?slug=${id}`,
      });

      setServiceDetail(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceDetailList();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.banner_container_bg}>
        <div className={styles.banner_container}>
          <div className={styles.banner_left_side}>
            <h1>{serviceDetail.name}</h1>
            <p>{serviceDetail.overview}</p>
          </div>
          <div className={styles.banner_right_side}>
            <img
              src="/assets/images/contact-us-illustration.png"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.theme_bg}`}>
        <div className={`${styles.main_container}`}>
          <div className={`${styles.technology_style}`}>
            {" "}
            <div className={styles.breadcrumb_item}>Home</div>
            <div className={styles.breadcrumb_item}>{">"}</div>
            <div className={styles.breadcrumb_item}>Services</div>
            <div className={styles.breadcrumb_item}>{">"}</div>
            <div
              className={`${styles.breadcrumb_item} ${styles.breadcrumb_bg}`}
            >
              {serviceDetail.name}
            </div>{" "}
          </div>
          <h2 className={styles.h2}> {serviceDetail.subtitle}</h2>
          <h5 className={styles.h5}>{serviceDetail.description}</h5>
          <h3 className={styles.h3}>What we do?</h3>
          <div className={styles.list_containter}>
            {serviceDetail.works &&
              serviceDetail.works.map((item, i) => (
                <div className={styles.list_section} key={i}>
                  <div>
                    <img
                      src="/assets/images/tick-success.svg"
                      alt=""
                      className={styles.list_icon}
                    />
                  </div>
                  <div className={styles.list_text}>{item}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={`${styles.message_container} `}>
        <div className={styles.message_title}>
          <h2>TOGETHER WE ARE</h2>
        </div>
        <div className={styles.card_holder}>
          {serviceDetail.technologies &&
            serviceDetail.technologies.map((item, i) => (
              <div className={styles.card} key={i}>
                <img src={item.icon} alt="" className={styles.card_img} />

                <h3>{item.name}</h3>
              </div>
            ))}
        </div>
      </div>
      <div className={`${styles.theme_bg}`}>
        <div className={`${styles.message_container}`}>
          <div className={styles.message_title}>
            <h2>INDUSTRIES WE SERVED</h2>
          </div>

          <div className={styles.topic_container}>
            {serviceDetail.industries &&
              serviceDetail.industries.map((item, i) => (
                <div
                  className={styles.department}
                  // style={{ border: "1px solid green" }}
                  key={i}
                >
                  <img src={item.icon} alt="" className={styles.card_img} />

                  <h3 className={styles.department_title}>{item.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={`${styles.carousel_container}`}>
        <div className={styles.message_title}>
          <h2>FEATURED PRODUCTS</h2>
        </div>
        <div style={{ maxWidth: "90%", margin: "auto" }}>
          <PoductCarousel />
        </div>
      </div>

      <GetInTouch
        title={"HAVE SIMILAR IDEA IN MIND?"}
        description={
          "If you have similar ideas in your mind, just share with us, we will make it possible for you."
        }
      />
    </React.Fragment>
  );
};

export default ServiceDetails;
