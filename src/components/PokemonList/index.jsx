import React, { useEffect, useState } from "react";

import { Container, Card, CardMedia, CardContent } from "@material-ui/core";

import "./styles.scss";

export function PokemonList() {
  const [pokemon, setPokemon] = useState(false);
  const [nextPokemon, setNextPokemon] = useState(false);

const API_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";  

  async function getPokemonList() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemon(data);
    setNextPokemon(data.next);
  }
  async function loadMorePokemon() {
    const response = await fetch(nextPokemon);
    const data = await response.json();
    setNextPokemon(data.next);

    const test3 = [...pokemon.results, ...data.results];
    console.log(test3);
    setPokemon({ ...pokemon, results: test3 });
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <Container>
      <div className="poke-list">
        {pokemon?.results?.map((poke, index) => (
          <Card className="poke-cards" key={poke.name}>
            <CardMedia
              className="poke-images"
              image={`${API_IMAGE}/${index + 1}.png`}
            />
            <CardContent>
              <p>#{poke.url.substr(34).replace("/", "")}</p>
              <p>{poke.name}</p>
            </CardContent>
          </Card>
        ))}
        <button className="btn-show-more" onClick={loadMorePokemon}>
          Load more Pokémon
        </button>
      </div>
    </Container>
  );
}
