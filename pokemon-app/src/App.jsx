
import React from 'react';
import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonRow from './PokemonRow'; // Import the PokemonRow component

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  // Callback function to receive Pokémon data from PokemonForm
  const handlePokemonData = (data) => {
    setPokemonData(data);
  };

  return (
    <div>
      <h1>Welcome to My Pokémon App</h1>
      <PokemonForm onPokemonData={handlePokemonData} />
      <hr />
      {pokemonData && <PokemonRow pokemon={pokemonData} />}
    </div>
  );
};

export default App;

import FilterablePokedexTable from './components/FilterablePokedexTable';

const App = () => {
  return (
    <div>
      <h1>Pokémon Pokedex</h1>
      <FilterablePokedexTable />
    </div>
  );
};
export default App;