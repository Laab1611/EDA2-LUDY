import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (counter) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
        const data = await response.json();
        return data;
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: null,
        isLoading: false,
        error: null,
        counter: 1,
    },
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
        },
        decrementCounter: (state) => {
            if (state.counter === 1) return;
            state.counter -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { incrementCounter, decrementCounter } = pokemonSlice.actions;
export default pokemonSlice.reducer;