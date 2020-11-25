import React from "react";
import { cardsData } from "./cardsData";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "24%",
    margin: "2% 1% 0 0",
  },
  grid: {
    display: "flex",
    marginBottom: "2%",
  },
});
function Cards() {
  const classes = useStyles();

  return (
    <Grid style={{ marginLeft: "1%" }} className={classes.grid}>
      {cardsData.map((item) => (
        <Grid
          item
          component={Card}
          style={{ float: "left" }}
          key={item.id}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.time}
              </Typography>
              <Typography component="p" style={{ color: "dimgrey" }}>
                {item.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;
