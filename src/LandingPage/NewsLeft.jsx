import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewsArticles from "./NewsArticles";
import RecentUsers from "./RecentUsers/RecentUsers";
import Transactions from "./Transactions/Transactions";

const useStyles = makeStyles({
  container: {
    margin: "5% 0 0 2%",
    width: "70%",
  },
});

function NewsLeft() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h5 style={{ marginBottom: "2%" }}>Latest news about the site</h5>
      <Divider />

      <NewsArticles />
      <RecentUsers />
      <Transactions />
    </div>
  );
}

export default NewsLeft;
