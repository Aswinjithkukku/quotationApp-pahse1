import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getCountries = createAsyncThunk(
    "location/getCountries",
    async(dispatch, getState) => {
        const response =  await axios.get('/location/countries')
        return response.data;
    }
)

const locationSlice = createSlice({
    name: "location",
    initialState: {
        loading: false,
        countries: [],
    },
    extraReducers: {
        [getCountries.fulfilled]: (state, action) => {
            state.loading = false
            state.countries = action.payload.countries
        }
    }
})

export default locationSlice.reducer