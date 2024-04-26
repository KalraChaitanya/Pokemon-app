// PokemonForm.jsx
// src/PokemonForm.jsx
import React, { useState } from 'react';
import { useQuery } from '@trpc/react';
import { pokemonRouter } from '../api/pokemon';

const PokemonForm = ({ onPokemonData }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await pokemonRouter.get('getPokemon', pokemonName);
    onPokemonData(data); // Pass fetched Pokémon data to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PokemonForm;


const PokemonRow = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Name: {pokemon.name}</p>
      <p>Type: {pokemon.types.join(', ')}</p>
    </div>
  );
};

export default PokemonRow;
