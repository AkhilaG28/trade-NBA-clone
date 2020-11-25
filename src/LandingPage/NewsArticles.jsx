import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { newsLeft } from "./newsLeft";

const useStyles = makeStyles({
  card: {
    marginBottom: "5%",
  },
});

function NewsArticles() {
  const classes = useStyles();

  return (
    <>
      {newsLeft.map((item) => (
        <div className={classes.card} key={item.id}>
          <h4 style={{ marginTop: "2%" }}>{item.title}</h4>
          <Typography variant="p" color="initial">
            {item.time}
          </Typography>
          <br />
          <br />
          <Typography variant="p">{item.body}</Typography>
          <br />
          <Button variant="outlined" style={{ float: "right" }}>
            READ MORE
          </Button>
        </div>
      ))}
    </>
  );
}

export default NewsArticles;
