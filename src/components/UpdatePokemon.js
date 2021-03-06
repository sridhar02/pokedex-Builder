import React, { useState } from "react";
import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import { Button, TextField } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default function UpdatePokemon({ pokemon, fetchPokemons, setPokemon }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(pokemon.name.english);
  const [type, setType] = useState(pokemon.type);
  const [attackLevel, setAttackLevel] = useState(pokemon.base.Attack);
  const [defenceLevel, setDefenceLevel] = useState(pokemon.base.Defense);
  const [description, setDescription] = useState("");

  const dialogueOpen = () => {
    setOpen(true);
  };

  const dialogueClose = () => {
    setOpen(false);
    setName(pokemon.name.english);
    setType(pokemon.type);
    setAttackLevel(pokemon.base.Attack);
    setDefenceLevel(pokemon.base.Defense);
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    try {
      let payload = {
        name: {
          english: name,
        },
        type: [type],
        base: {
          Attack: attackLevel,
          Defense: defenceLevel,
        },
        description,
      };
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_API}/pokemons/${id}`,
        payload
      );
      dialogueClose();
      if ((response.status = 200)) {
        alert("Pokemon successfuly updated");
        fetchPokemons();
        setPokemon(response.data);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        id="update"
        onClick={dialogueOpen}
      >
        Update
      </Button>
      {
        <Dialog
          open={open}
          onClose={dialogueClose}
          aria-labelledby="create an new pokemon form"
        >
          <form onSubmit={(event) => handleSubmit(event, pokemon.id)}>
            <DialogTitle id="create an new pokemon form">
              Create a New pokemon
            </DialogTitle>
            <DialogContent>
              <TextField
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
              />
              <TextField
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
                autoFocus
                margin="dense"
                id="type"
                label="Type"
                type="text"
                fullWidth
              />
              <TextField
                required
                value={attackLevel}
                onChange={(event) => setAttackLevel(event.target.value)}
                autoFocus
                margin="dense"
                id="attack"
                label="Attack Level"
                type="number"
                fullWidth
              />
              <TextField
                required
                value={defenceLevel}
                onChange={(event) => setDefenceLevel(event.target.value)}
                autoFocus
                margin="dense"
                id="defense"
                label="Defense Level"
                type="number"
                fullWidth
              />
              <TextField
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={dialogueClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      }
    </div>
  );
}
