import React, { useState, useEffect } from "react";
import styles from "./styles/contactus.module.css";
import axios from "axios";

export async function getServerSideProps() {
  try {
    const url = `${process.env.base_url}/api/v1/branches`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}

const ContactUs = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [branches, setBranches] = useState([]);
  const getBranchesList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/branches`,
      });

      setBranches(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBranchesList();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.banner_container_bg}>
        <div className={styles.banner_container}>
          <div className={styles.banner_left_side}>
            <h1>CONTACT US</h1>
            <p>
              Get in touch with Newoz to fulfill your requirements and hire our
              customized services which best match with your budget estimate-{" "}
              <b>
                <i>No matter where you are, We are here for you!</i>
              </b>
            </p>
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
      <div className={styles.message_container_bg}>
        <div className={styles.message_container}>
          <div className={styles.message_title}>
            <span>
              <img
                src="/assets/images/dotted.svg"
                alt=""
                className={styles.title_bg}
              />
            </span>
            <h2>LEAVE US A MESSAGE</h2>
            <hr />
          </div>
          <div className={styles.form}>
            <div className={styles.input_div}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input_style}
              />
            </div>
            <div className={styles.input_div2}>
              <input
                type="text"
                placeholder="Email"
                className={styles.input_style}
              />
            </div>
          </div>
          <div>
          <textarea
            placeholder="type your query here"
            className={styles.textarea_style}
            rows="25"
          />
           </div>
          <div className={styles.privacy_style}>
            <input
              type="checkbox"
              id="policy"
              name="vehicle1"
              value="Bike"
              className={styles.checkbox_style}
            />
            <label className={styles.label_style} htmlFor="policy">
              {" "}
              I have read and agree to the <b>Privacy Policy</b>
            </label>
          </div>
          <div className={styles.read_button_div}>
            <button className={styles.read_button}>SEND NOW</button>
          </div>
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_inner_container}>
          <h2>OUR LOCATIONS</h2>
          <div className={styles.card_holder}>
            {branches &&
              branches.map((item, i) => (
                <div className={styles.card} key={i}>
                  <img src={`${item.img}`} alt="" width="100%" />
                  <div className={styles.card_detail}>
                    <div style={{ margin: "6px 0 45px 0" }}>
                      {" "}
                      <h3>{item.address}</h3>
                      <h5>{item.branch_type}</h5>
                    </div>
                    <div style={{ marginBottom: "45px" }}>
                      <h4>{item.state}</h4>
                      <h6>View in map</h6>
                    </div>
                    <div>
                      <h5 style={{ marginBottom: "25px" }}>
                        <b>Email:</b> {item.email}
                      </h5>
                      <h5 style={{ marginBottom: "25px" }}>
                        <b>Phone:</b> {item.phone}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
