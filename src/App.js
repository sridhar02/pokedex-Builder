import React from "react";
import Pokemons from "./components/pokemons";
import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles((theme) => ({
  App: {
  },
}));

function App() {
  const classes = useAppStyles();
  return (
    <div className={classes.App}>
      <Pokemons />
    </div>
  );
}

export default App;
