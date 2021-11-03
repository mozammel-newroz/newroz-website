import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styles from "./mobileNavbar.module.css"; 
import Collapse from "@mui/material/Collapse"; 
import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
 
import axios from "axios";
 
import { Link } from "react-router-dom";

export default function MobileNavbar({ drawerOpen }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);
  const [active, setActive] = useState("h");
  const [parcialActive, setParcialActive] = useState("");
  const [activeUseEffect, setActiveUseEffect] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const [serviceList, setServiceList] = useState([]);
  const getServiceList = async () => {
    let responese = await axios({
      method: "get",
      url: `/api/v1/services-list`,
    });
   
    setServiceList(responese.data.data);
  };

  const fnActive = (item, parcial) => {
    setActive(item);
    if (parcial === "srvc") {
      setParcialActive("srvc");
    } else {
      setParcialActive("");
    }
    document.getElementById("closeBtn").click();
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    
    closeAllCollapse();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  useEffect(() => {
    getServiceList();
  }, []);
  const closeAllCollapse = () => {
    setChecked(false);
    setCol1(false);
    setCol2(false);
    setCol3(false);
  };
  useEffect(() => {
    if (activeUseEffect) {
      document.getElementById("drawerBtn").click();
    }
    setActiveUseEffect(true);
  }, [drawerOpen]);

  const list = (anchor) => (
    <Box
      sx={{ height: "100vh" }}
      //   sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250  }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
      className={styles.drawerStyle}
    >
      <div>
        <IconButton
          style={{
            background: "#FCD8C8",
            color: "#3c516f",
            position: "absolute",
            right: 40,
            top: 20,
          }}
          id="closeBtn"
          onClick={toggleDrawer(anchor, false)}
        >
          <Clear />
        </IconButton>
      </div>

      <div className={styles.navbar}>
        <br />
        <br />
        <br />
        <Link to="/"    onClick={() => {
              fnActive("h");
            }}
            className={active === "h" ? styles.active : ""}>
         
            HOME
          
        </Link>
        <Link to="/about-us"  onClick={() => {
              fnActive("au");
            }}
            className={active === "au" ? styles.active : ""}>
        
            ABOUT US
      
        </Link>
        <div className={styles.dropdown}>
          <button
            className={`${styles.dropbtn} ${
              parcialActive === "srvc" ? styles.active : ""
            }`}
            onClick={handleChange}
          >
            <span style={{ marginRight: "10px" }}>SERVICES</span>
            {checked ? (
              <KeyboardArrowUpIcon style={{ position: "absolute" }} />
            ) : (
              <KeyboardArrowDownIcon style={{ position: "absolute" }} />
            )}
          </button>
          <Collapse in={checked}>
            <div className={styles.dropdownContent}>
              <div className={styles.header}></div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <h3 onClick={() => setCol1(!col1)}>
                    Predictive Software Engineering
                    {col1 ? (
                      <KeyboardArrowUpIcon style={{ position: "absolute" }} />
                    ) : (
                      <KeyboardArrowDownIcon style={{ position: "absolute" }} />
                    )}
                  </h3>
                  <Collapse
                    in={col1}
                    className={styles.collapseStyle}
                    style={{ marginBottom: col1 ? "15px" : "0px" }}
                  >
                    {serviceList &&
                      serviceList.map((item, i) => (
                        <Link to={"/services/" + item.slug} key={i}  onClick={() => {
                          fnActive(item.slug, "srvc");
                        }}
                        className={
                          active === item.slug ? styles.active : ""
                        }>
                          
                            {item.name}
                       
                        </Link>
                      ))}
                  </Collapse>
                </div>
                <div className={styles.column} style={{ marginBottom: "26px" }}>
                  <h3 onClick={() => setCol2(!col2)}>
                    Dedicated Software Devolopment Teams
                    {/* {col2 ? (
                      <KeyboardArrowUpIcon style={{ position: "absolute" }} />
                    ) : (
                      <KeyboardArrowDownIcon style={{ position: "absolute" }} />
                    )} */}
                  </h3>
                  {/* <Collapse in={col2} className={styles.collapseStyle}  style={{marginBottom:col2?'15px':'0px'}}>
                    <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a>
                    <a>Lorem Ipsum is simply dummy</a>
                  </Collapse> */}
                </div>
                <div className={styles.column}>
                  <h3
                    onClick={() => {
                      setCol3(!col3);
                    }}
                  >
                    Centers of Excellence
                    {col3 ? (
                      <KeyboardArrowUpIcon style={{ position: "absolute" }} />
                    ) : (
                      <KeyboardArrowDownIcon style={{ position: "absolute" }} />
                    )}
                  </h3>
                  <Collapse
                    in={col3}
                    className={styles.collapseStyle}
                    style={{ marginBottom: col3 ? "15px" : "0px" }}
                  >
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
                  </Collapse>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
        <Link to="/portfolio"   onClick={() => {
              fnActive("p");
            }}
            className={active === "p" ? styles.active : ""}>
       
            PORTFOLIO
      
        </Link>
        <Link to="/contact-us"  onClick={() => {
              fnActive("cu");
            }}
            className={active === "cu" ? styles.active : ""}>
          
            CONTACT US
        
        </Link>
        <br />
      </div>
    </Box>
  );

  return (
    <div>
      {/*Pass the value for drawer open in the array "left", "right", "top", "bottom" */}
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button hidden id="drawerBtn" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{ zIndex: 2000000 }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
