import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
    color: "white",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.root}>
      Hello World
    </Button>
  );
}

export default App;
