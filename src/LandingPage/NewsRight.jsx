import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, Divider, Avatar } from "@material-ui/core";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import Contracts from "./Contracts/Contracts";

const useStyles = makeStyles({
  container: {
    margin: "5% 2%",
    width: "30%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "3%",
    display: "flex",
    background: "#eeeeee",
    padding: "2%",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    marginTop: "2%",
  },
  partners: {
    display: "flex",
    marginTop: "4%",
  },
  text: {
    margin: "0 0 5% 3%",
    display: "flex",
    flexDirection: "column",
  },
});

function NewsRight() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <Typography variant="h6">Partners</Typography>
        <Divider />
        <div className={classes.partners}>
          <Avatar>
            <WorkRoundedIcon />
          </Avatar>
          <div className={classes.text}>
            <div>Become a Partner</div>
            <div style={{ color: "grey" }}>Contact Us</div>
          </div>
        </div>
      </Card>
      <Contracts />
    </div>
  );
}

export default NewsRight;
