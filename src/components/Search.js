import React from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
const pokemons = require("../pokedex.json");

export default function Search({ search, setSearch }) {
  return (
    <div>
      <Autocomplete
        value={search}
        onChange={(event, newvalue) => setSearch(newvalue)}
        id="search"
        options={pokemons.map((pokemon) => pokemon.name.english)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="search"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
