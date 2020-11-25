import React from "react";
import { Typography, Divider, Card, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { contracts } from "./contracts";

const useStyles = makeStyles({
  container: {
    background: "#eeeeee",
    padding: "2%",
    margin: "12% 3%",
  },
  root: {
    marginLeft: "3%",
    display: "flex",
    background: "transparent",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    marginTop: "5%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    flexWrap: "nowrap",
    margin: "5% 0",
  },
});

function Contracts() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h6">Top Contracts</Typography>
        <Typography style={{ marginLeft: "auto", marginTop: "2%" }}>
          View All
        </Typography>
      </div>

      <Divider />
      {contracts.map((item) => (
        <>
          <Card className={classes.root}>
            <Avatar
              alt={item.name}
              src={item.image}
              style={{ marginRight: "2%" }}
            />
            <div className={classes.details}>
              <h6 style={{ fontSize: "14px" }}>{item.name}</h6>
              <div style={{ fontSize: "15px" }}>{item.amt}</div>
            </div>
            <div className={classes.details} style={{ marginLeft: "auto" }}>
              <Avatar
                style={{ marginLeft: "auto" }}
                alt={item.name}
                src={item.logo}
              />
              <div style={{ fontSize: "13px", color: "grey" }}>{item.time}</div>
            </div>
          </Card>
        </>
      ))}
    </div>
  );
}

export default Contracts;
