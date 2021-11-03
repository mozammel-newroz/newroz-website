import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";

import Header from "../header/Header";

// import styles from "./layout.css";

import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

// const useStyles = makeStyles((theme) =>({
//   const useStyles = makeStyles((theme) => ({
//   drawerStyle: {
//     ["& .MuiDrawer-paper"]: {
//       background: "#FFF6EE",
//     },
//     [theme.breakpoints.down('sm')]: {
//   ['& .css-18sg6k4-MuiPaper-root-MuiDrawer-paper']:{
//     width:'100'
//   }
//     },
//   },
// }));

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginRight: -drawerWidth,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = useState("h");
  const [parcialActive, setParcialActive] = useState("");

  const fnActive = (item, parcial) => {
    setActive(item);
    if (parcial === "srvc") {
      setParcialActive("srvc");
    } else {
      setParcialActive("");
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div style={{ maxWidth: "100%", margin: "auto", position: "relative" }}>
        <div
          style={{ position: "sticky", top: 0, width: "100%", zIndex: 1000000 }}
        >
          <Header handleDrawerOpen={handleDrawerOpen} />
        </div>

        <Navigation />
        <Footer />
      </div>
    </Router>
  );
}
