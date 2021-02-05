import React, { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
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
        <CardActions>CardActions What does this do?</CardActions>
      </Card>
    </Container>
  );
}

export default App;
