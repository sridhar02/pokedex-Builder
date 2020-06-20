import React, { useState, useEffect } from "react";
import axios from "axios";
import matchSorter from "match-sorter";

import { makeStyles, Button, Typography } from "@material-ui/core";

import Pokemon from "./Pokemon";
import Search from "./Search";
import NewPokemon from "./NewPokemon";

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
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(null);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/pokemons`
      );
      if (response.status === 200) {
        setPokemons(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const matchedPokemonsList = matchSorter(pokemons, search, {
    keys: ["name.english"],
  });
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Typography variant="h6" className={classes.title}>
          Pokedex Builder
        </Typography>
        <NewPokemon fetchPokemons={fetchPokemons} />
        <Search search={search} setSearch={setSearch} pokemons={pokemons} />
        {matchedPokemonsList.map((pokemon) => (
          <div key={pokemon.id}>
            <Button
              id="Select a pokemon"
              className={classes.button}
              onClick={() => setPokemon(pokemon)}
            >
              {pokemon.id}. {pokemon.name.english}
            </Button>
          </div>
        ))}
      </div>
      <div className={classes.pokemonContainer}>
        <Pokemon
          pokemon={pokemon}
          fetchPokemons={fetchPokemons}
          setPokemon={setPokemon}
        />
      </div>
    </div>
  );
}

export default PokemonsList;
