import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getQuotations = createAsyncThunk(
    "quotation/getQuotations",
    async(dispatch, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get('/quotation/lists', config)
        return response.data;
    }
)

const quotationSlice = createSlice({
    name: "quotation",
    initialState: {
        loading: false,
        quotations: [],
    },
    extraReducers: {
        [getQuotations.fulfilled]: (state, action) => {
            state.loading = false
            state.quotations = action.payload.quotations
            console.log(action.payload.quotations);
        }
    }
})

export default quotationSlice.reducer