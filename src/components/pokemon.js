import React from "react";

import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const usePokemonStyles = makeStyles((theme) => ({
  type: {
    display: "flex",
  },
  item: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export default function Pokemon({ pokemon }) {
  const classes = usePokemonStyles();
  return (
    <Card>
      <CardContent>
        {!pokemon ? <p>Please Select a Pokemon to see the details</p> : null}
        {pokemon && (
          <>
            <div>Name: {pokemon.name.english} </div>
            <br />
            <div className={classes.type}>
              <label>Type: </label>
              {pokemon.type.map((item, index) => (
                <div key={index} className={classes.item}>
                  {" "}
                  {item}
                </div>
              ))}
            </div>
            <br />
            <div>Attack Level : {pokemon.base.Attack}</div>
            <br />
            <div>Defense Level : {pokemon.base.Defense}</div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
