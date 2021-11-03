import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
 

import { Link } from "react-router-dom";

import axios from "axios";

const Header = () => {
  const [serviceList, setServiceList] = useState([]);

  const getServiceList = async () => {
    try {
      let responese = await axios({
        method: "get",
        url: `/api/v1/services-list`,
      });
 
      setServiceList(responese.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("h");
  const [parcialActive, setParcialActive] = useState("");
  const handleDrawerOpen = () => {
   
    setDrawerOpen(!drawerOpen);
  };
  const fnActive = (item, parcial) => {
    setActive(item);
    if (parcial === "srvc") {
      setParcialActive("srvc");
    } else {
      setParcialActive("");
    }
  };
  const openMegaDropdown = () => {
    document.getElementById("megaDropdown").style.visibility = "visible";
    document.getElementById("megaDropdown").style.opacity = "1";
    document.getElementById("megaDropdown").style.marginTop = "0px";
    document.getElementById("megaDropdown").style.transition = " all .5s";
  };
  const closeMegaDropdown = () => {
    document.getElementById("megaDropdown").style.visibility = "hidden";
    document.getElementById("megaDropdown").style.opacity = "0";
    document.getElementById("megaDropdown").style.marginTop = "20px";
    document.getElementById("megaDropdown").style.transition = " all 0s";
  };
  return (
    <React.Fragment>
      <div className={`${styles.container} ${styles.mobile_view}`}>
        <div>
          <Link
            to="/"
            onClick={() => {
              fnActive("h");
            }}
          >
            <img
              src="/assets/images/fastsolution-logo@2x.svg"
              alt=""
              // height="50px"
              className={styles.logo}
            />
          </Link>
        </div>
        <div>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}

            // sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.navbar}>
            <Link
              to="/"
              onClick={() => {
                fnActive("h");
              }}
              style={{ padding: "9px 25px 9px 0" }}
            >
              <img
                src="/assets/images/fastsolution-logo@2x.svg"
                alt=""
                // height="50px"
                className={styles.logo}
              />
            </Link>

            <Link
              to="/about-us"
              onClick={() => {
                fnActive("au");
              }}
              className={active === "au" ? styles.active : ""}
            >
              ABOUT US
            </Link>
            <div
              className={styles.dropdown}
              onMouseOver={openMegaDropdown}
              onMouseLeave={closeMegaDropdown}
            >
              <button
                className={`${styles.dropbtn} ${
                  parcialActive === "srvc" ? styles.active : ""
                }`}
                style={{ marginRight: "16px" }}
              >
                <span style={{ marginRight: "5px" }}>SERVICES</span>

                <KeyboardArrowDownIcon className={styles.iconStyle} />
              </button>
              <div
                className={styles.dropdownContent}
                id="megaDropdown"
                onClick={closeMegaDropdown}
              >
                <div className={styles.header}></div>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <div className={styles.column_title}>
                      {" "}
                      <h3>Predictive Software Engineering</h3>
                    </div>
                    {serviceList &&
                      serviceList.map((item, i) => (
                        <Link
                          to={"/services/" + item.slug}
                          key={i}
                          onClick={() => {
                            fnActive(item.slug, "srvc");
                          }}
                          className={active === item.slug ? styles.active : ""}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                  <div className={styles.column}>
                    <div className={styles.column_title}>
                      {" "}
                      <h3>Dedicated Software Devolopment Teams</h3>
                    </div>
                    {/* <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a> */}
                  </div>
                  <div className={styles.column}>
                    <div className={styles.column_title}>
                      {" "}
                      <h3>Centers of Excellence</h3>{" "}
                    </div>
                    <Link to=''
                      onClick={() => {
                        fnActive("ttdr", "srvc");
                      }}
                      className={active === "ttdr" ? styles.active : ""}
                    >
                      TETRA: Tectnical Debt Reduction{" "}
                    </Link>
                    <Link to=''
                      onClick={() => {
                        fnActive("rpa", "srvc");
                      }}
                      className={active === "rpa" ? styles.active : ""}
                    >
                      Robotic Process Automation
                    </Link>
                    <Link to=''
                      onClick={() => {
                        fnActive("aiml", "srvc");
                      }}
                      className={active === "aiml" ? styles.active : ""}
                    >
                      Artificial Intelligence & Mechine Learning
                    </Link>
                    <Link to=''
                      onClick={() => {
                        fnActive("c", "srvc");
                      }}
                      className={active === "c" ? styles.active : ""}
                    >
                      Chatbots
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/portfolio"
              onClick={() => {
                fnActive("p");
              }}
              className={active === "p" ? styles.active : ""}
            >
              PORTFILIO
            </Link>
          </div>
        </div>

        <div>
          <div>
            <Link
              to="/contact-us"
              onClick={() => {
                fnActive("cu");
              }}
              className={styles.navbtn}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      <MobileNavbar drawerOpen={drawerOpen} />
    </React.Fragment>
  );
};

export default Header;
