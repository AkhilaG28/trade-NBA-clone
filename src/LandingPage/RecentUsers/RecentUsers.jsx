import React from "react";
import { Typography, Divider, Card, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { recentUsers } from "./recentUsers";

const useStyles = makeStyles({
  container: {
    background: "#eeeeee",
    padding: "2%",
    marginBottom: "2%",
  },
  root: {
    marginLeft: "3%",
    display: "flex",
    background: "transparent",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    marginTop: "2%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  lastLine: {
    textAlign: "center",
    color: "grey",
    fontSize: "14px",
    marginTop: "2%",
  },
});

function RecentUsers() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Recent Users</Typography>
      <Divider />
      {recentUsers.map((item) => (
        <>
          <Card className={classes.root}>
            <Avatar
              alt={item.name}
              src={item.image}
              style={{ marginRight: "2%" }}
            />
            <div className={classes.details}>
              <h6 style={{ fontSize: "14px" }}>{item.name}</h6>
              <div style={{ fontSize: "15px" }}>
                {item.rating} GM rating, {item.trades} trades created
              </div>
            </div>
            <div>
              <Avatar alt={item.name} src={item.logo} />
            </div>
            <div>Joined {item.time}</div>
          </Card>
        </>
      ))}
      <Divider />
      <Typography className={classes.lastLine}>
        Find the other 9,532 registered users by searching for them in the
        search bar
      </Typography>
    </div>
  );
}

export default RecentUsers;
