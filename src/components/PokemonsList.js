import React, { useState } from "react";
import matchSorter from "match-sorter";
import { makeStyles, Button, Typography } from "@material-ui/core";

import Pokemon from "./Pokemon";
import Search from "./Search";
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

function PokemonsList() {
  const classes = usePokemonsStyles();

  const [pokemon, setPokemon] = useState("");
  const [search, setSearch] = useState(null);

  const matchedPokemonsList = matchSorter(pokemons, search, { keys: ["name.english"] });
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Typography variant="h6" className={classes.title}>
          Pokedex Builder
        </Typography>
        <Search search={search} setSearch={setSearch} />
        {matchedPokemonsList.map((pokemon) => (
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

export default PokemonsList;
