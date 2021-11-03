import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/clientCarousel.module.css";
import axios from "axios";

const ClientCarousel = () => {
  const [clients, setClients] = useState([]);
 

  const getClientList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/clients`,
      });
   
      setClients(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClientList();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
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
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    // dots: true,
    className: "center",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    centerMode: true,
    pauseOnHover: false,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {clients &&
            clients.map((item, i) => (
              <div key={i}>
                <div className={styles.main}>
                  <div>
                    <img src={item.logo} alt="" />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCarousel;
