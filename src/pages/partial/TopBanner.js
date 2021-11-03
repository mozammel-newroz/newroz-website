import React from "react";
import styles from '../../styles/topbanner.module.css'

const TopBanner = ({title,description,image}) => {
  return (

    <div className={styles.banner_container}>
      <div className={styles.banner_left_side}>
        <h1>
          PORTFOLIO
        </h1>
        <p>
          From idea to a successful product. Based on quality, security and
          high-performance.
        </p>
      </div>
      <div className={styles.banner_right_side}>
        <img
          src="/assets/images/portfolio-illustration.png"
          alt=""
          // height="50px"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default TopBanner;
