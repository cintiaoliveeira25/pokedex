import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Card, CardMedia, CardContent } from "@material-ui/core";
import { usePokemon } from "../../contexts/usePokemon";

import "./styles.scss";

export function PokemonList() {
  const history = useHistory();
  const { pokemon, setPokemon, setIdSelected } = usePokemon();
  const [nextPokemon, setNextPokemon] = useState(false);

  const pokemonImages =
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

    const allPokes = [...pokemon.results, ...data.results];
    setPokemon({ ...pokemon, results: allPokes });
  }

  async function handlePokemonInfo(id) {
    setIdSelected(id);
    history.push(`/pokemon/${id}`);
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <Container>
      <div className="poke-list">
        {pokemon?.results?.map((poke, index) => (
          <Card
            onClick={() => handlePokemonInfo(index + 1)}
            className="poke-cards"
            key={poke.name}
          >
            <CardMedia
              className="poke-images"
              image={`${pokemonImages}/${index + 1}.png`}
            />
            <CardContent>
              <p>#{poke.url.substr(34).replace("/", "")}</p>
              <p>{poke.name}</p>
            </CardContent>
          </Card>
        ))}
        <div className="teste">
          <button className="btn-show-more" onClick={loadMorePokemon}>
            Load more Pokémon
          </button>
        </div>
      </div>
    </Container>
  );
}
