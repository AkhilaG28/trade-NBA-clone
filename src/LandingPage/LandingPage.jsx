import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import NewsRight from "./NewsRight";
import NewsLeft from "./NewsLeft";

const useStyles = makeStyles({
  card: {
    margin: "2%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "60px",
    left: "20px",
    color: "white",
  },
  iconDivs: {
    marginTop: "5%",
    display: "flex",
    "& div": {
      width: "fit-content",
      background: "#b55b3d",
      margin: "1%",
      padding: "1%",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#061830",
      },
    },
  },
  newsGrid: {
    display: "flex",
  },
});

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid item component={Card} className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="NBA collage"
            image="./imageOverlay.jpg"
          />
          <div className={classes.overlay}>
            <h1>Trade season is upon us</h1>
            <h5 style={{ marginTop: "2%", width: "60%" }}>
              The NBA off-season is rapidly approaching, see what draft and
              trade scenarios are possible this summer.
            </h5>
            <Grid className={classes.iconDivs}>
              <div>
                <WhatshotIcon />
                <span>FIRE UP THE TRADE MACHINE</span>
              </div>
              <div>
                <FlightTakeoffIcon />
                <span>LAUNCH MOCK DRAFT SIMULATOR</span>
              </div>
              <div>
                <KeyboardHideIcon />
                <span>CREATE A DRAFT BIG BOARD</span>
              </div>
            </Grid>
          </div>
        </CardActionArea>
      </Grid>
      <Cards />
      <div className={classes.newsGrid}>
        <NewsLeft />
        <NewsRight />
      </div>
    </div>
  );
}

export default LandingPage;
