import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/customerFeedbackCarousel.module.css";
import axios from "axios";

const CustomerFeedback = () => {
  const [clientFeedbacks, setClientFeedbacks] = useState([]);
  const getClientFeedbackList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/client-feedbacks`,
      });

      setClientFeedbacks(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClientFeedbackList();
  }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id="nextBtn"
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id="prevBtn"
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const next = () => {
    if (clientFeedbacks.length > 1) {
      document.getElementById("nextBtn").click();
    }
  };
  const prev = () => {
    if (clientFeedbacks.length > 1) {
      document.getElementById("prevBtn").click();
    }
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {clientFeedbacks &&
            clientFeedbacks.map((item, i) => (
              <div className={styles.main} key={i}>
                <div className={styles.card}>
                  <div className={styles.title_div}>
                    <div className={styles.img_section}>
                      <img
                        src={item.avatar}
                        alt=""
                        className={styles.card_img}
                      />
                    </div>{" "}
                    <div className={styles.title_section}>
                      <div className={styles.card_title}>{item.name}</div>
                      <div className={styles.detail}>
                        <p style={{ margin: "0px" }}>
                          {item.designation}, {item.client_name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.detail}>
                    <p>{item.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className={styles.arrow_section}>
        <span className={styles.spaces}>
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        </span>
        <img
          src="/assets/images/left-arrow.svg"
          alt=""
          className={styles.arrow}
          onClick={prev}
        />{" "}
        &nbsp; &nbsp; &nbsp;
        <img
          src="/assets/images/right-arrow.svg"
          alt=""
          className={styles.arrow}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default CustomerFeedback;
