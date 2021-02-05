import React from "react";
import { Button } from "@material-ui/core";
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
    <div>
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
    </div>
  );
}

export default App;
