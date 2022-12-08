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

export const userQuotations = createAsyncThunk(
    "quotation/userQuotations",
    async(dispatch, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get(`/quotation/list/own`, config)
        return response.data;
    }
)
export const transferQuotationData = createAsyncThunk(
    "quotation/transferQuotationData",
    async(args, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get(`/quotation/transfer/data/${args}`, config)
        return response.data;
    }
)
export const hotelQuotationData = createAsyncThunk(
    "quotation/hotelQuotationData",
    async(args, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get(`/quotation/hotel/data/${args}`, config)
        return response.data;
    }
)
export const excursionQuotationData = createAsyncThunk(
    "quotation/excursionQuotationData",
    async(args, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get(`/quotation/excursion/data/${args}`, config)
        return response.data;
    }
)

const quotationSlice = createSlice({
    name: "quotation",
    initialState: {
        loading: false,
        quotations: [],
        userQuotation: [],
        singleTransfer: {},
        singleHotel: {},
        singleExcursion: {},
    },
    extraReducers: {
        [getQuotations.fulfilled]: (state, action) => {
            state.loading = false
            state.quotations = action.payload.quotations
            console.log(action.payload.quotations);
        },
        [userQuotations.fulfilled]: (state, action) => {
            state.loading = false
            state.userQuotation = action.payload.quotations
        },
        [transferQuotationData.fulfilled]: (state, action) => {
            state.loading = false
            state.singleTransfer = action.payload.transfer
            console.log(action.payload.transfer);
        },
        [hotelQuotationData.fulfilled]: (state, action) => {
            state.loading = false
            state.singleHotel = action.payload.hotel
            console.log(action.payload.hotel);
        },
        [excursionQuotationData.fulfilled]: (state, action) => {
            state.loading = false
            state.singleExcursion = action.payload.excursion
            console.log(action.payload.excursion);
        },
    }
})

export default quotationSlice.reducer