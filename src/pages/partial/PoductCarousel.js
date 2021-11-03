import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/PoductCarousel.module.css";
import axios from "axios";

const PoductCarousel = () => {
  const [projects, setProjects] = useState([]);

  const getProjectsList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/services`,
      });
    
      let projects = [];

       responese.data.data.map(
        (item, i) =>
          item.projects &&
          item.projects.map((el, i) => {
            projects.push(el);
          })
      );

  
            setProjects(projects)
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectsList();
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
    document.getElementById("nextBtn").click();
  };
  const prev = () => {
    document.getElementById("prevBtn").click();
  };
  const settings = {
    // dots: true,

    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       borderRadius: "10px",
    //       // padding: "10px",
    //       position: "absolute",
    //       top: "-75px",
    //     }}
    //   >

    //     <ul style={{ margin: "10px auto" }} className={styles.li_style}>

    //       {dots}{" "}
    //     </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       height:'30px',
    //       // color: "blue",
    //       border: "1px solid #3c516f",
    //       margin:'0 -25px',
    //       borderRadius:'50%',
    //       background:'green'
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {projects &&
            projects.map((pro, i) => (
              <div key={i}>
                <div className={styles.service_with_bg}>
                  <div className={styles.service_image_side}>
                    <img
                      src={pro.banner}
                      alt=""
                      className={styles.image_style}
                    />
                  </div>
                  <div className={styles.service_details_side}>
                    <h2> {pro.title}</h2>

                    <p>{pro.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div className={styles.arrow_section}>
        <img
          src="/assets/images/left-arrow.svg"
          alt=""
          className={styles.arrow}
          onClick={prev}
        />{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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

export default PoductCarousel;
