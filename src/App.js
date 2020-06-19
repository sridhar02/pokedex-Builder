import React from "react";
import PokemonsList from "./components/PokemonsList";
import { makeStyles } from "@material-ui/core";

const useAppStyles = makeStyles((theme) => ({
  App: {
  },
}));

function App() {
  const classes = useAppStyles();
  return (
    <div className={classes.App}>
      <PokemonsList />
    </div>
  );
}

export default App;
