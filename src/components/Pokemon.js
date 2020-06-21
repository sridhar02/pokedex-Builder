import React, { useState } from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, Typography, Button } from "@material-ui/core";

import UpdatePokemon from "./UpdatePokemon";
import ConfirmationDialogue from "./ConfirmationDialogue";

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
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletePokemon = async (id) => {
    handleClose();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_API}/pokemons/${id}`
      );
      if (response.status === 200) {
        setPokemon(null);
        setTimeout(() => alert("Selected pokemon deleted succefully"), 100);
        fetchPokemons();
      }
    } catch (error) {
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
                id="confimation"
                onClick={() => handleClickOpen(pokemon.id)}
              >
                Delete
              </Button>
              <ConfirmationDialogue
                open={open}
                handleClose={handleClose}
                deletePokemon={deletePokemon}
                id={pokemon.id}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
