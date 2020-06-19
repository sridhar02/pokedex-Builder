import React, { useState } from "react";
import Pokemon from "./pokemon";

import { makeStyles, Button, Typography } from "@material-ui/core";
const pokemons = require("../pokedex.json");

const usePokemonsStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  list: {
    width: "20%",
    borderRight: "1px solid black",
    overflowY: "auto",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  pokemonContainer: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

function Pokemons() {
  const classes = usePokemonsStyles();
  const [pokemon, setPokemon] = useState("");
  console.log(pokemon);
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Typography variant="h6" className={classes.title}>
          Pokedex Builder
        </Typography>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Button
              className={classes.button}
              onClick={() => setPokemon(pokemon)}
            >
              {pokemon.id}. {pokemon.name.english}
            </Button>
          </div>
        ))}
      </div>
      <div className={classes.pokemonContainer}>
        <Pokemon pokemon={pokemon} />
      </div>
    </div>
  );
}

export default Pokemons;
