import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Alert from "@material-ui/lab/Alert";
import CardContent from "@material-ui/core/CardContent";
import {
  makeStyles,
  Typography,
  Button,
  recomposeColor,
} from "@material-ui/core";

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
  const updatePokemon = (id) => {};

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
            <div>
              Name: <strong>{pokemon.name.english}</strong>
            </div>
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
            <div>
              Attack Level : <strong>{pokemon.base.Attack}</strong>
            </div>
            <br />
            <div>
              Defense Level : <strong>{pokemon.base.Defense}</strong>
            </div>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => updatePokemon(pokemon.id)}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
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
