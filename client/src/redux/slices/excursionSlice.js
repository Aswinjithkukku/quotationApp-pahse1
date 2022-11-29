import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getExcursions = createAsyncThunk(
    "excursion/getExcursions",
    async(dispatch, getState) => {
        const response =  await axios.get('/excursion/all')
        return response.data;
    }
)

const excursionSlice = createSlice({
    name: "excursion",
    initialState: {
        loading: false,
        excursions: [],
    },
    extraReducers: {
        [getExcursions.fulfilled]: (state, action) => {
            state.loading = false
            state.excursions = action.payload.excursions
        }
    }
})

export default excursionSlice.reducer