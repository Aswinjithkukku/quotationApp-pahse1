import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getTransferEnquiryData = createAsyncThunk(
    "transfer/getTransferEnquiryData",
    async(dispatch, getState) => {
        const response =  await axios.get('/transfer/loadTransferEnquiryData')
        return response.data;
    }
)

const transferSlice = createSlice({
    name: "transfer",
    initialState: {
        loading: false,
        airports: [],
        places: [],
        transferEnquiry: {},
        transferData: {}
    },
    reducers: {
        transferEquiryData: (state, action) => {
            // console.log(action.payload);
            state.transferEnquiry = action.payload
            state.transferData = action.payload
        }
    },
    extraReducers: {
        [getTransferEnquiryData.fulfilled]: (state, action) => {
            state.loading = false
            state.airports = action.payload.airports
            state.places = action.payload.places
        }
    }
})

export const {
    transferEquiryData
} = transferSlice.actions

export default transferSlice.reducer