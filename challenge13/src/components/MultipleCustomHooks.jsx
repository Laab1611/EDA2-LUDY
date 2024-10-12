import React from 'react';
import useFetch from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';
import '../index.css';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div className="container">
      <h1>Pokémon Information</h1>
      {data && (
        <blockquote className="pokemon-info">
          <img 
            src={data.sprites.front_default} 
            alt={data.name} 
            width="180" 
          />
          <div className="pokemon-details">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Height:</strong> {data.height}</p>
            <p><strong>Weight:</strong> {data.weight}</p>
          </div>
        </blockquote>
      )}
      <div className="button-container">
        <button onClick={increment}>Next Pokémon</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Error: {hasError}</p>}
    </div>
  );
};

export default MultipleCustomHooks;