import React, { useState } from "react";

import { Grid, Container, Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import "./styles.scss";
import { usePokemon } from "../../contexts/usePokemon";

export function Header() {
  const [pokeName, setPokeName] = useState('')
  const {setPokemonSearch} = usePokemon();


  const handleChangeName = (name) => {
    setPokeName(name.trim())
  }

  async function searchPokemon() {
    setPokemonSearch(pokeName)
  }

  return (
    <div className="header">
      <Container>
        <Grid container spacing={3}>
          <Grid  item xs={6}>
            <span>Name or Number</span>
            <br />
            <input type="text" onChange={(event) => handleChangeName(event.target.value)} />
            <Button variant="contained" className="search-icon" onClick={searchPokemon}>
              <SearchIcon  />
            </Button>
            <p className="subtitle">
              Search for a Pokémon by name or using its National Pokédex number.
              {/* Use the Advanced Search to explore Pokémon by type, weakness,
              Ability, and more! */}
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
