import React, { useState } from "react";
import axios from "axios";

import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import { Button, TextField } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default function NewPokemon({ fetchPokemons }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [attackLevel, setAttackLevel] = useState("");
  const [defenceLevel, setDefenceLevel] = useState("");

  const dialogueOpen = () => {
    setOpen(true);
  };

  const dialogueClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dialogueClose();
    let payload = { name, type, attackLevel, defenceLevel, description };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/pokemons`,
        payload
      );
      if (response.status === 201) {
        fetchPokemons();
        alert("New Pokemon successfully created");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={dialogueOpen}>
        Add Pokemon <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={dialogueClose}
        aria-labelledby="create an new pokemon form"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="create an new pokemon form">
            Create a New pokemon
          </DialogTitle>
          <DialogContent>
            <TextField
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
              value={attackLevel}
              onChange={(event) => setAttackLevel(event.target.value)}
              autoFocus
              margin="dense"
              id="name"
              label="Attack Level"
              type="number"
              fullWidth
            />
            <TextField
              value={defenceLevel}
              onChange={(event) => setDefenceLevel(event.target.value)}
              autoFocus
              margin="dense"
              id="name"
              label="Defense Level"
              type="number"
              fullWidth
            />
            <TextField
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              autoFocus
              margin="dense"
              id="name"
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
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
