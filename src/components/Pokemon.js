import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Typography, Button } from "@material-ui/core";
import UpdatePokemon from "./UpdatePokemon";

const usePokemonStyles = makeStyles((theme) => ({
  card: {
    width: "25%",
    border: "1px solid #ddd",
    position: "fixed",
  },
  type: {
    display: "flex",
  },
  item: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    fontWeight: "bold",
  },
  label: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  buttons: {
    margin: theme.spacing(1.5, 0, 1.5, 0),
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Pokemon({ pokemon, fetchPokemons, setPokemon }) {
  const classes = usePokemonStyles();

  const deletePokemon = async (id) => {
    alert("Are you sure want delete this pokemon");
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_API}/pokemons/${id}`
      );
      if (response.status === 200) {
        alert("Selected pokemon deleted succefully");
        setPokemon(null);
        fetchPokemons();
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        {!pokemon ? (
          <Typography variant="subtitle2">
            Please Select a Pokemon from the left side bar
          </Typography>
        ) : null}
        {pokemon && (
          <>
            <Typography variant="subtitle1">
              Name: <strong>{pokemon.name.english}</strong>
            </Typography>
            <br />
            <div className={classes.type}>
              <label className={classes.label}>Type: </label>
              {pokemon.type.map((item, index) => (
                <div key={index}>
                  <Chip label={item} color="primary" className={classes.item} />
                </div>
              ))}
            </div>
            <br />
            <Typography variant="subtitle1">
              Attack Level : <strong>{pokemon.base.Attack}</strong>
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Defense Level : <strong>{pokemon.base.Defense}</strong>
            </Typography>
            <div className={classes.buttons}>
              <UpdatePokemon
                pokemon={pokemon}
                fetchPokemons={fetchPokemons}
                setPokemon={setPokemon}
              />
              <Button
                variant="contained"
                color="secondary"
                id="delete"
                onClick={() => deletePokemon(pokemon.id)}
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
