import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import pokemonReducer from '../features/pokemonSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        pokemon: pokemonReducer,
    },
});

export default store;