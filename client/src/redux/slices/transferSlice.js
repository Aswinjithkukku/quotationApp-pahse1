import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getTransferEnquiryData = createAsyncThunk(
    "transfer/getTransferEnquiryData",
    async(args, {getState}) => {
        const { token } = getState().user
        const response =  await axios.get('/transfer/loadTransferEnquiryData', {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
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
    },
    reducers: {
        transferEquiryData: (state, action) => {
            state.transferEnquiry = action.payload
        },
        clearTransferData: (state,action) => {
            state.transferEnquiry = {}
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
    transferEquiryData,
    clearTransferData
} = transferSlice.actions

export default transferSlice.reducer