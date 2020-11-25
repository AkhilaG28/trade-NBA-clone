import React from "react";
import { Typography, Divider, Card, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { transactions } from "./transactionsDetails";

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
});

function Transactions() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Latest Transactions</Typography>
      <Divider />
      {transactions.map((item) => (
        <>
          <Card className={classes.root}>
            <Avatar
              alt={item.name}
              src={item.image}
              style={{ marginRight: "2%" }}
            />
            <div className={classes.details}>
              <h6 style={{ fontSize: "14px" }}>{item.name}</h6>
              <div style={{ fontSize: "15px" }}>{item.details}</div>
            </div>
            <div>
              <Avatar alt={item.name} src={item.logo} />
            </div>
            <div>{item.time}</div>
          </Card>
        </>
      ))}
    </div>
  );
}

export default Transactions;
