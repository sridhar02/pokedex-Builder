import React from "react";

import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import { makeStyles, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const usePokemonStyles = makeStyles((theme) => ({
  card: {
    width: "25%",
    border: "1px solid #ddd",
    position:"fixed",
  },
  type: {
    display: "flex",
  },
  item: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    fontWeight:"bold"
  },
  label: {
    margin: theme.spacing(1, 0, 1, 0),
  },
}));

export default function Pokemon({ pokemon }) {
  const classes = usePokemonStyles();
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
          </>
        )}
      </CardContent>
    </Card>
  );
}
