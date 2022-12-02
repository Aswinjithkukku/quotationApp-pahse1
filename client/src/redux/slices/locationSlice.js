import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getCountries = createAsyncThunk(
    "location/getCountries",
    async(dispatch, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get('/location/countries', config)
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