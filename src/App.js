import React, { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
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
  margin: {
    marginRight: "1rem",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Button
        variant="contained"
        className={`${classes.green} ${classes.margin}`}
      >
        Hello World
      </Button>
      <Button
        variant="contained"
        className={`${classes.blue} ${classes.margin}`}
      >
        Hello World
      </Button>
      <Button
        variant="contained"
        className={`${classes.yellow} ${classes.margin}`}
      >
        Hello World
      </Button>
      <Box width={300}>
        <Card>
          <CardHeader title="CardHeader" />
          <CardContent>
            CardContent: can you set card width without a Box wrapped around it?
            hmm
          </CardContent>
          <CardActions>CardActions What does this do?</CardActions>
        </Card>
      </Box>
    </Container>
  );
}

export default App;
