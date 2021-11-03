import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 

const AppLayoutCarousel = () => {

  const demoArray =[
    {img:'/assets/images/Refer_a_friend.svg'},
    {img:'/assets/images/Topup_cards@2x.png'},
    {img:'/assets/images/Withdraw_Money _Suggestion.svg'},
    {img:'/assets/images/Refer_a_friend.svg'},
    {img:'/assets/images/Topup_cards@2x.png'},
    {img:'/assets/images/Withdraw_Money _Suggestion.svg'},
    {img:'/assets/images/Refer_a_friend.svg'},
    {img:'/assets/images/Topup_cards@2x.png'},
    {img:'/assets/images/Withdraw_Money _Suggestion.svg'},
  ]
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

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    autoplay: true,
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
  const next = () => {
   
      document.getElementById("nextBtn").click();
 
  };
  const prev = () => {
 
      document.getElementById("prevBtn").click();
 
  };
  return (
    <div>
    <div>
      <Slider {...settings} style={{padding:'30px'}}>
        {demoArray.map((item, i) => (
          <div key={i}>
            
            <div style={{maxWidth:'70%',margin:'auto'}}>
            <img  src={item.img} alt='' width='100%'/>
          </div>
          </div>
        ))}
      </Slider>
    </div>
    <div style={{marginTop:'30px',textAlign:'center'}}>
       
        <img
          src="/assets/images/left-arrow.svg"
          alt=""
        style={{cursor:'pointer'}}
          onClick={prev}
          
        />{" "}
        &nbsp; &nbsp; &nbsp;
        <img
          src="/assets/images/right-arrow.svg"
          alt=""
          style={{cursor:'pointer'}}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default AppLayoutCarousel;
