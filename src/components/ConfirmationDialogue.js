import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";

export default function ConfirmationDialogue({
  id,
  open,
  handleClose,
  deletePokemon,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete Pokemon
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want delete this pokemon?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => deletePokemon(id)} id="delete" color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
