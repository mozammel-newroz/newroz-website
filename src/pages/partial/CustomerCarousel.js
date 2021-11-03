import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/customerCarousel.module.css";
import axios from "axios";

const CustomerCarousel = () => {
  const [clientFeedbacks, setClientFeedbacks] = useState([]);

  const getClientFeedbackList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/client-feedbacks`,
      });

      setClientFeedbacks(responese);
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
        style={{ ...style, display: "block", background: "rgba(0,0,0,0)" }}
        onClick={onClick}
      >
        <img src="/assets/images/right_arrow.svg" alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id="prevBtn"
        className={className}
        style={{ ...style, display: "block", background: "rgba(0,0,0,0)" }}
        onClick={onClick}
      >
        <img src="/assets/images/left_arrow.svg" alt="" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,

    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className={styles.slider_styles}>
        {[1, 2, 3, , 4, 5, 6, 7, 8, 9].map((item, i) => (
          <div key={i}>
            <div style={{ position: "relative", padding: "5px 10px" }}>
              <div className={styles.img_div}>
                <img
                  src="/assets/images/user1.png"
                  alt=""
                  className={styles.card_img}
                />
              </div>
              <div className={styles.card}>
                <div className={styles.card_title}>Hens Peterson</div>
                <div className={styles.card_title} style={{ fontWeight: 400 }}>
                  CEO, RPay
                </div>
                <div className={styles.detail}>
                  <img
                    src="/assets/images/cot.png"
                    alt=""
                    className={styles.detail_img}
                  />
                  <p>
                    Duis vestibulum elit vel neque pharetra vulputate. Quisque
                    scelerisque nisi urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerCarousel;
