import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "3% 0",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Google Play Button"
        width="200px"
      />
      <div className={classes.details}>
        <Typography
          variant="p"
          style={{ marginTop: "1%", color: "grey", fontSize: "13px" }}
        >
          This site has no official affiliation with the National Basketball
          Association or any other 3rd-party entities listed on this site.
          Google Play and the Google Play logo are trademarks of Google LLC.
        </Typography>
        <div style={{ display: "flex", fontSize: "14px", marginLeft: "2%" }}>
          <div>© 2020 TradeNBA</div>
          <div style={{ margin: "0 6%" }}>Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
