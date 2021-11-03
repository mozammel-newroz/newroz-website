import React, { useState, useEffect } from "react";
import styles from "./styles/aboutus.module.css";
import GetInTouch from "./partial/GetInTouch";
import CustomerFeedbackCarousel from "./partial/CustomerFeedbackCarousel";
import axios from "axios";
 

const AboutUs = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartmentList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/departments`,
      });

      setDepartments(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDepartmentList();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.banner_container_bg}>
        <div className={styles.banner_container}>
          <div className={styles.banner_left_side}>
            <h1>ABOUT US</h1>
            <p>
              NewrozTech enjoys connecting the dots between the organizational
              needs and with the immense potential power of technology. We have
              honed to take challenge to shape your ideas into digital
              transformation.
            </p>
          </div>
          <div className={styles.banner_right_side}>
            <img
              src="/assets/images/about-us-illustration.png"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={` ${styles.theme_bg}`}>
        <div className={`${styles.message_container} `}>
          <div className={styles.message_title}>
            <span>
              <img
                src="/assets/images/dotted.svg"
                alt=""
                className={styles.title_bg}
              />
            </span>
            <h2>TOGETHER WE ARE</h2>
            <hr />
          </div>
          <div className={styles.card_holder}>
            <div className={styles.card}>
              <img src="/assets/images/established-icon.svg" alt="" />

              <h3>Established in 2019</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/employees-icon.svg" alt="" />

              <h3>70+ Employees</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/customer-icon.svg" alt="" />

              <h3>30+ Customers</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/community-icon.svg" alt="" />

              <h3>5K+ Community Members</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/project-icon.svg" alt="" />

              <h3>50+ Project Completed appsicon</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/apps-icon.svg" alt="" />

              <h3>15+ Apps Developed</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/glove.svg" alt="" />

              <h3>Global Presence</h3>
            </div>
            <div className={styles.card}>
              <img src="/assets/images/customer-service-icon.svg" alt="" />

              <h3>24/7 Customer Support</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.message_container}`}>
        <div className={styles.mission_container}>
          <div className={styles.mission_detail_side}>
            <div className={styles.message_title}>
              <h2>OUR MISSION</h2>
            </div>
            <p>
              Shaping a Dream By Transforming Business Using Technology To
              Accelerate Your Digital Transformation.
            </p>
          </div>
          <div className={styles.mission_image_side}>
            <img
              src="/assets/images/mission.png"
              alt=""
              className={styles.mission_image}
            />
          </div>
        </div>
      </div>
      <div className={` ${styles.theme_bg}`}>
        <div className={`${styles.message_container} `}>
          <div className={styles.message_title}>
            <h2>WHAT WE BELIEVE</h2>
            <hr />
          </div>

          <div className={styles.topic_container}>
            <div className={styles.topic}>
              <div className={styles.topic_image_side}>
                <img
                  src="/assets/images/commitment.svg"
                  alt=""
                  className={styles.topic_image}
                />
              </div>
              <div className={styles.topic_detail_side}>
                <h3> Customer Commitment</h3>
                <h4>
                  {" "}
                  We know, It takes years to build trust and only seconds to
                  destroy it. And so, we care about our customer needs to
                  deliver best solutions by continually improving our services.
                </h4>
              </div>
            </div>
            <div className={styles.topic}>
              <div className={styles.topic_image_side}>
                <img
                  src="/assets/images/quality.svg"
                  alt=""
                  className={styles.topic_image}
                />
              </div>
              <div className={styles.topic_detail_side}>
                <h3>Quality</h3>
                <h4>
                  {" "}
                  We strive to delight our customers with the best quality
                  services because we believe our future sustainability lies in
                  the hands of our valued customers.
                </h4>
              </div>
            </div>
            <div className={styles.topic}>
              <div className={styles.topic_image_side}>
                <img
                  src="/assets/images/teamwork.svg"
                  alt=""
                  className={styles.topic_image}
                />
              </div>
              <div className={styles.topic_detail_side}>
                <h3> Teamwork</h3>
                <h4>
                  {" "}
                  We The Newroztech team like to work well together toward a
                  common vision and goals. Team bonding among our people
                  enhances our team potential which is the beauty & strength of
                  our gradual success.
                </h4>
              </div>
            </div>
            <div className={styles.topic}>
              <div className={styles.topic_image_side}>
                <img
                  src="/assets/images/integrity.svg"
                  alt=""
                  className={styles.topic_image}
                />
              </div>
              <div className={styles.topic_detail_side}>
                <h3> Integrity</h3>
                <h4>
                  {" "}
                  Commitment without integrity is equal to Zero. We prefer to
                  offer tailor-made and industry-specific services within your
                  reach, your means and off course which is challenging but
                  doable.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.message_container}`}
        style={{ paddingBottom: "0px" }}
      >
        <div className={styles.message_title} style={{ textAlign: "center" }}>
          <h2>Brain Behind Newoz</h2>
        </div>

        <div className={styles.topic_container}>
          {departments &&
            departments.map((item, i) => (
              <div
                className={styles.department}
                // style={{ border: "1px solid green" }}
                key={i}
              >
                <div className={styles.department_img}>
                  <img src="/assets/images/ideate.png" alt="" width="100%" />
                </div>
                <h3 className={styles.department_title}> {item.name}</h3>
              </div>
            ))}
        </div>
      </div>
      <div className={`${styles.carousel_container_bg}`}>
        <div className={`${styles.carousel_container}`}>
          <div className={styles.carousel_container_datail_side}>
            <div className={styles.message_title}>
              <h2>CLIENT FEEDBACKS</h2>
            </div>
            <p>
              At NewrozTech, we treat client feedback as a guide that influences
              our decision making and continuous improvement of existing
              products and services.
            </p>
          </div>
          <div className={styles.carousel_container_corousel_side}>
            <div>
              <CustomerFeedbackCarousel />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch
        title={"HAVE ANY PROJECT IN MIND?"}
        description={
          "If you have any idea in your mind but having trouble to put into practice! we would like to Connecting your dots from DESIGN to DEVELOPMENT to ensure your digital presence."
        }
      />
    </React.Fragment>
  );
};

export default AboutUs;
