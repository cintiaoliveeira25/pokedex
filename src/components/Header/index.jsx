import React from "react";

import { Grid, Container, Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import "./styles.scss";

export function Header() {
  return (
    <div className="header">
      <Container>
        <Grid container spacing={3}>
          <Grid  item xs={6}>
            <span>Name or Number</span>
            <br />
            <input type="text" />
            <Button variant="contained" className="search-icon">
              <SearchIcon  />
            </Button>
            <p className="subtitle">
              Use the Advanced Search to explore Pokémon by type, weakness,
              Ability, and more!
            </p>
          </Grid>
          <Grid item xs={6}>
            <div className="info-header">
              <p>
                Search for a Pokémon by name or using its National Pokédex
                number.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
