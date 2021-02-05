import React, { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  green: {
    backgroundColor: "green",
    color: "white",
  },
  blue: {
    backgroundColor: "blue",
    color: "white",
  },
  yellow: {
    backgroundColor: "yellow",
    color: "black",
  },
  marginRight: {
    marginRight: "1rem",
  },
  marginTop: {
    marginTop: "1rem",
  },
  maxWidth: {
    maxWidth: 300,
  },
  bootstrap: {
    width: "18rem",
    marginTop: "1rem",
  },
  media: {
    height: 200,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Button
        variant="contained"
        className={`${classes.green} ${classes.marginRight}`}
      >
        Hello World
      </Button>
      <Button
        variant="contained"
        className={`${classes.blue} ${classes.marginRight}`}
      >
        Hello World
      </Button>
      <Button variant="contained" className={`${classes.yellow}`}>
        Hello World
      </Button>

      <Card className={`${classes.maxWidth} ${classes.marginTop}`}>
        <CardHeader title="CardHeader" />
        <CardContent>
          CardContent: can you set card width without a Box wrapped around it?
          hmm
          <Typography variant="body2">Yes you can, using makeStyles</Typography>
          <Typography variant="button" gutterBottom>
            How do you use this Typography tag
          </Typography>
          <Typography variant="h4">
            How do you use this Typography tag
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.bootstrap}>
        <CardMedia
          image="/placeholder.jpeg"
          title="placeholder image"
          className={classes.media}
        />
        <CardHeader title="Card title" />
        <CardContent>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardContent>

        <CardActions>
          <Button variant="contained" color="primary">
            Somewhere
          </Button>
          <Button variant="contained" color="secondary">
            Elsewhere
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
