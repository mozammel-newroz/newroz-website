import React from "react";
import styles from "./getintouch.module.css";
 
import { Link } from "react-router-dom";

const GetInTouch = ({title,description}) => {
  return (
    <div className={styles.container_bg}>
    <div className={styles.container}>
      <div className={styles.left_side}>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
      <div className={styles.right_side}>
      <Link to="/contact-us">
         
        <img
          src="/assets/images/get-in-touch@2x.png"
          alt=""
          className={styles.image}
        />
    
              </Link>{" "}
      </div>
    </div>
    </div>
  );
};

export default GetInTouch;
