import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon, incrementCounter } from '../../features/pokemonSlice';
import '../../index.css';

const MultipleCustomHooks = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, counter } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon(counter));
  }, [dispatch, counter]);

  const handleNextPokemon = () => {
    dispatch(incrementCounter());
  };

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
        <button onClick={handleNextPokemon}>Next Pokémon</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MultipleCustomHooks;