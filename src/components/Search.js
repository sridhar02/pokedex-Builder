import React from "react";

import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useSearchStyles = makeStyles((theme) => ({
  autoComplete: {
    marginRight: theme.spacing(1),
  },
}));

export default function Search({ search, setSearch, pokemons }) {
  const classes = useSearchStyles();
  return (
    <div>
      <Autocomplete
        value={search}
        className={classes.autoComplete}
        onChange={(event, newvalue) => setSearch(newvalue)}
        id="search"
        options={pokemons.map((pokemon) => pokemon.name.english)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="search by name"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
