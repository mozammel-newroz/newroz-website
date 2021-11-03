import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";
import GetInTouch from "./partial/GetInTouch";
import ClientCarousel from "./partial/ClientCarousel";
import CustomerCarousel from "./partial/CustomerCarousel";

export default function Home() {
  const [cardActive, setCardActive] = useState("Backend");
  const [clients, setClients] = useState([]);
 
  return (
    <React.Fragment>
      <div
        className={`${styles.home_banner_container} ${styles.sky_blue_gradiant}`}
      >
        <div className={styles.main}>
          <div className={styles.main_body}>
            <h1 className={styles.h1}>
              Transforming Business
              <br /> Using Technology
            </h1>

            <h3 className={styles.h3}>
              We help to build innovation solutions that serves the
              <br /> purpose of both customers and businesses.
            </h3>
            <div className={styles.button_div}>
              <Link to="/" className={styles.button}>
                 Get Started 
              </Link>
            </div>
          </div>
          {/* <img src="/assets/images/home_banner.svg" alt="" /> */}
        </div>
      </div>
      <div className={`${styles.banner_container}`}>
        <h2 className={styles.h2}>
          Secure, Scalable Application
          <br /> Starts Here
        </h2>
        <div className={styles.card_holder}>
          <div className={styles.card}>
            <img src="/assets/images/Ecom.svg" alt="" />

            <p>E-Commerce Application Development</p>
            <p style={{ fontWeight: 400 }}>
              E-wallet solution for easy banking.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/MobApp.svg" alt="" />

            <p>Mobile Application Development</p>
            <p style={{ fontWeight: 400 }}>
              Mobile app for adapting mobile centric world
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/AiDev.svg" alt="" />

            <p>
              AI/ML Development
              <br /> Services
            </p>
            <p style={{ fontWeight: 400 }}>
              Using Machine Learning to build AI driven apps
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/WebApp.svg" alt="" />

            <p>
              Web Application
              <br /> Development
            </p>
            <p style={{ fontWeight: 400 }}>
              Build web app for
              <br /> enterprises.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/DedSoft.svg" alt="" />

            <p>Dedicated Software Development Team</p>
            <p style={{ fontWeight: 400 }}>
              E-wallet solution for easy banking.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/API.svg" alt="" />

            <p>API Integration Development Services</p>
            <p style={{ fontWeight: 400 }}>
              Minimize cost by using API to share data
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/SoftTest.svg" alt="" />

            <p>
              Software Testing <br />
              Services
            </p>
            <p style={{ fontWeight: 400 }}>
              E-wallet solution for easy
              <br className={styles.br2}/> banking.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/LogDev.svg" alt="" />

            <p>
              Logistic Development
              <br /> Services
            </p>
            <p style={{ fontWeight: 400 }}>
              E-wallet solution for easy
              <br className={styles.br2}/> banking.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.bg_color_gradiant}`}>
        <div className={`${styles.banner_container} ${styles.flex_style}`}>
          <div className={styles.vision_sides}>
            <div className={styles.vision_sides_img_div}>
              <img
                src="/assets/images/DeshiPay@2x.png"
                alt=""
                className={styles.vision_image}
              />
            </div>
            <h3 className={styles.vision_sides_title}>DeshiPay</h3>
            <div className={styles.vision_card_title}>
              E-wallet & LifeStyle solution
            </div>
          </div>
          <div className={styles.vision_middle}>
            <h2 className={styles.h2}>
              Where Vision <br className={styles.br} /> Becomes Reality
            </h2>
            <h2 className={styles.h3}>
              We have been working with enterprises, startups all over The world
            </h2>
            <div className={styles.vision_mobile_view}>
              <div className={styles.mobile_vision_sides}>
                <div className={styles.vision_sides_img_div}>
                  <img
                    src="/assets/images/DeshiPay@2x.png"
                    alt=""
                    className={styles.vision_image}
                  />
                </div>
                <h3 className={styles.vision_sides_title}>DeshiPay</h3>
                <div className={styles.vision_card_title}>
                  E-wallet & LifeStyle solution
                </div>
              </div>

              <div className={styles.mobile_vision_sides}>
                <div className={styles.vision_sides_img_div}>
                  <img
                    src="/assets/images/dalkurd.png"
                    alt=""
                    className={styles.vision_image}
                  />
                </div>
                <h3 className={styles.vision_sides_title}>Dalkurd Fan App</h3>
                <div className={styles.vision_card_title}>Sports Solution</div>
              </div>
            </div>
            <div className={styles.button_div}>
              <Link to="/"  className={styles.button}>
              View Our Works 
              </Link>
            </div>
          </div>
          <div className={styles.vision_sides}>
            <div className={styles.vision_sides_img_div}>
              <img
                src="/assets/images/dalkurd.png"
                alt=""
                className={styles.vision_image}
              />
            </div>
            <h3 className={styles.vision_sides_title}>Dalkurd Fan App</h3>
            <div className={styles.vision_card_title}>Sports Solution</div>
          </div>
        </div>
      </div>
      <div className={styles.carousel_container}>
        <h2 className={styles.h2}>
          Trusted By Companies
          <br /> Around The Globe
        </h2>
        <h3 className={styles.h3}>
          We just don’t build we guarantees the successful <br />
          delivery of your project.
        </h3>
        <ClientCarousel/>
      </div>
      <div className={`${styles.sky_blue_gradiant}`}>
        <div className={styles.banner_container}>
          <h2 className={styles.h2}>
            Why Customers Love <br />
            Working With Us
          </h2>
          <div className={styles.customer_carousel_container}>
            <CustomerCarousel />
          </div>
        </div>
      </div>
      <div className={`${styles.banner_container}`}>
        <h2 className={styles.h2}>
          Software Development Lifecycle
          <br /> At Newroz
        </h2>
        <div className={styles.card_holder}>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #FFDBC3" }}
            >
              <img
                src="/assets/images/Requirement_Analysis.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Requirement Analysis</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/first_arrow.svg"
                alt=""
                className={styles.first_arrow}
              />
            </div>
          </div>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #C9A9EB" }}
            >
              <img
                src="/assets/images/Assembling_the_team.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Assembling the team</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/second_arrow.svg"
                alt=""
                className={styles.second_arrow}
              />
            </div>
          </div>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #E0B7B6" }}
            >
              <img
                src="/assets/images/Sprint_Planning.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Sprint Planning</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/third_arrow.svg"
                alt=""
                className={styles.third_arrow}
              />
            </div>
          </div>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #C5DE9B" }}
            >
              <img
                src="/assets/images/Iterative_delivery.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Iterative delivery</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/sixth_arrow.svg"
                alt=""
                className={styles.sixth_arrow}
              />
            </div>
          </div>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #84CCB3" }}
            >
              <img
                src="/assets/images/testing.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Testing</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/fifth_arrow.svg"
                alt=""
                className={styles.fifth_arrow}
              />
            </div>
          </div>
          <div className={styles.card_container}>
            <div
              className={`${styles.card_detail}`}
              style={{ border: "1px solid #8DC1F2" }}
            >
              <img
                src="/assets/images/development.svg"
                alt=""
                className={styles.card_icon}
              />
              <div className={styles.card_title}>Development</div>
              <p>
                Proper communication is the key to successful software. With the
                help of UX, we translate design into code.
              </p>
              <img
                src="/assets/images/forth_arrow.svg"
                alt=""
                className={styles.forth_arrow}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.sky_blue_gradiant}`}>
        <div className={`${styles.banner_container}`}>
          <h2 className={styles.h2}>Our Tech Friends</h2>

          <div className={styles.card_holder}>
            <div
              className={`${styles.card_title} ${
                cardActive === "Backend" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("Backend")}
            >
              Backend
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "Frontend" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("Frontend")}
            >
              Frontend
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "Databases" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("Databases")}
            >
              Databases
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "Cloud" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("Cloud")}
            >
              Cloud
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "Testing" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("Testing")}
            >
              Testing
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "DevOps" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("DevOps")}
            >
              DevOps
            </div>
            <div
              className={`${styles.card_title} ${
                cardActive === "UX" ? styles.card_title_active : null
              }`}
              onClick={() => setCardActive("UX")}
            >
              UX
            </div>
          </div>
          <br className={styles.br} />
          <div className={styles.card_holder}>
            <div className={`${styles.card_icon_div}`}>
              <img src="/assets/images/java_logo_home.png" alt="" />
            </div>
            <div className={`${styles.card_icon_div}`}>
              <img src="/assets/images/php_logo_home.png" alt="" />
            </div>
            <div className={`${styles.card_icon_div}`}>
              <img src="/assets/images/python_logo_home.png" alt="" />
            </div>
            <div className={`${styles.card_icon_div}`}>
              <img src="/assets/images/nodejs_logo_home.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch
        title={"Think Different. We make IT, Possible!"}
        description={
          "Are you sitting on an innovative/great idea? No matter how small or outlandish it may be, we The NewrozTech team will act on it and turn it into reality to shape your dream!"
        }
      />
    </React.Fragment>
  );
}
