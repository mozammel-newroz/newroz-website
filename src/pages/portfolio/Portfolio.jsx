import React, { useState, useEffect } from "react";
import styles from "../styles/portfolio.module.css";
import GetInTouch from "../partial/GetInTouch";
import axios from "axios";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [allData, setAllData] = useState();
  const [serviceTitles, setServiceTitles] = useState(allData);
  const [allProjects, setAllProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);
  // const [pageProduct, setPageProduct] = useState([]);
  const [active, setActive] = useState("All");
  // const [pageNo, setpageNo] = useState(1);
  // const [showingStartNo, setShowingStartNo] = useState();
  // const [showingEndtNo, setShowingEndNo] = useState();
  const [refresh, setRefresh] = useState(false);

  const getServiceList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/services`,
      });

      setAllData(responese.data.data);
      setServiceTitles(responese.data.data);
      let projects = [];

      responese.data.data.map(
        (item, i) =>
          item.projects &&
          item.projects.map((el, i) => {
            projects.push(el);
            setRefresh(!refresh);
          })
      );

      
        setAllProjects(projects);

        setDisplayProjects(projects);
  
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServiceList();
  }, []);

  // const totalProduct = displayProjects.length;
  // const showPerPage = 5;
  // const totalPage = Math.ceil(totalProduct / showPerPage);

  // const fnPageProduct = (prop) => {
  //   console.log("fnPageProduct");
  //   let newpageNo;
  //   if (prop === "next") {
  //     newpageNo = pageNo + 1;
  //   } else if (prop === "prev") {
  //     newpageNo = pageNo - 1;
  //   } else {
  //     newpageNo = 1;
  //   }
  
  //   if (newpageNo === 0 || newpageNo > totalPage) {
     
  //     return;
  //   } else {
  //     setpageNo(newpageNo);
     
  //     let end = newpageNo * showPerPage;
  //     let start = end - showPerPage;

  //     if (end > totalProduct) {
  //       end = totalProduct;
  //     }
  //     setShowingStartNo(start + 1);
  //     setShowingEndNo(end);

  //     const newdisplayProduct = displayProjects.slice(start, end);
    
  //     setPageProduct(newdisplayProduct);
  //   }
  // };

  const fnActive = (item) => {
    setActive(item);

    if (item === "All") {
      setDisplayProjects(allProjects);
    } else {
      allData &&
        allData.map((el, i) => {
          if (el.name === item) {
            setDisplayProjects(el.projects);
          }
        });
    }
  };

  // useEffect(() => {
  
  //   setpageNo(1);

  //   fnPageProduct();
  // }, [active]);

   
  return (
    <React.Fragment>
      <div className={styles.banner_container_bg}>
        <div className={styles.banner_container}>
          <div className={styles.banner_left_side}>
            <h1>PORTFOLIO</h1>
            <p>
              From idea to a successful product. Based on quality, security and
              high-performance.
            </p>
          </div>
          <div className={styles.banner_right_side}>
            <img
              src="/assets/images/portfolio-illustration.png"
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.menu_container}>
        <div
          className={`${styles.menu_item}  ${
            active === "All" ? styles.active : null
          }`}
          onClick={() => {
            fnActive("All");
          }}
        >
          {" "}
          All
        </div>
        {serviceTitles &&
          serviceTitles.map((item, i) => (
            <div
              className={`${styles.menu_item}  ${
                active === item.name ? styles.active : null
              }`}
              key={i}
              onClick={() => fnActive(item.name)}
            >
              {" "}
              {item.name}
            </div>
          ))}
      </div>

      {displayProjects &&
        displayProjects.map((pro, i) => {
          return (
            <React.Fragment key={i}>
              {i % 2 === 0 ? (
                <div className={styles.service_bg} key={i}>
                  <div className={styles.service_with_bg}>
                    <div className={styles.service_details_side}>
                      <h2> {pro.title}</h2>
                      <div style={{ marginBottom: "20px" }}>
                        <p style={{ marginBottom: "6px" }}>
                          <b>Overview :</b>
                        </p>
                        <p>{pro.description}</p>
                      </div>
                      <p style={{ marginBottom: "9px" }}>
                        <b>Features :</b>
                      </p>
                      <div className={styles.list_containter}>
                        {pro.features &&
                          pro.features.map((f, i) => (
                            <div className={styles.list_section} key={i}>
                              <div>
                                <img
                                  src="/assets/images/tick-success.svg"
                                  alt=""
                                  className={styles.list_icon}
                                />
                              </div>
                              <div className={styles.list_text}>{f.title}</div>
                            </div>
                          ))}
                      </div>
                      <div className={styles.read_button_div}>
                        <Link
                          to={"/portfolio/" + pro.id}
                          className={styles.read_button}
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>

                    <div className={styles.service_image_side}>
                      <img
                        src={pro.banner}
                        alt=""
                        className={styles.image_style}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.service} key={i}>
                  <div className={styles.reverse_service_details_side}>
                    <h2> {pro.title}</h2>
                    <div style={{ marginBottom: "20px" }}>
                      <p style={{ marginBottom: "6px" }}>
                        <b>Overview :</b>
                      </p>
                      <p>{pro.description}</p>
                    </div>
                    <p style={{ marginBottom: "9px" }}>
                      <b>Features :</b>
                    </p>
                    <div className={styles.list_containter}>
                      {pro.features &&
                        pro.features.map((f, i) => (
                          <div className={styles.list_section} key={i}>
                            <div>
                              <img
                                src="/assets/images/tick-success.svg"
                                alt=""
                                className={styles.list_icon}
                              />
                            </div>
                            <div className={styles.list_text}>{f.title}</div>
                          </div>
                        ))}
                    </div>
                    <div className={styles.read_button_div}>
                      <Link
                        to={"/portfolio/" + pro.id}
                        className={styles.read_button}
                      >
                        READ MORE
                      </Link>
                    </div>
                  </div>

                  <div className={styles.reverse_service_image_side}>
                    <img
                      src={pro.banner}
                      alt=""
                      className={styles.reverse_image_style}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}

      {/* <div className={styles.paging_container}>
        <label className={styles.paging_text}>
          {showingStartNo}-{showingEndtNo} of {totalProduct} Services
        </label>{" "}
        &nbsp; &nbsp; &nbsp;
        <img
          src="/assets/images/left-arrow.svg"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => fnPageProduct("prev")}
          className={styles.arrow}
        />{" "}
        &nbsp; &nbsp; &nbsp;&nbsp;
        <img
          src="/assets/images/right-arrow.svg"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => fnPageProduct("next")}
          className={styles.arrow}
        />
      </div> */}

      <GetInTouch
        title={"HAVE ANY PROJECT IN MIND?"}
        description={
          "If you have any idea in your mind but having trouble to put into practice! we would like to Connecting your dots from DESIGN to DEVELOPMENT to ensure your digital presence."
        }
      />
    </React.Fragment>
  );
};

export default Portfolio;
