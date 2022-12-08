import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const getExcursions = createAsyncThunk(
    "excursion/getExcursions",
    async(dispatch, {getState}) => {
        const { token } = getState().user
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }
        const response =  await axios.get('/excursion/all', config)
        return response.data;
    }
)


const excursionSlice = createSlice({
    name: "excursion",
    initialState: {
        loading: false,
        excursions: [],
        people: 0,
        selectedExcursions: [],
    },
    reducers: {
        assignValue: (state,action) => {
            state.selectedExcursions = [...state.selectedExcursions, action.payload]
        },
        removeValue: (state,action) => {
            console.log(action.payload);
            const filteredArray = state.selectedExcursions.filter((item) => {
                return item.id !== action.payload
            })
            state.selectedExcursions = filteredArray
            console.log(state.selectedExcursions);
        },
        setPeopleCount: (state,action) => {
            state.people = action.payload
        },
        clearExcursionData: (state,action) => {
            state.people = 0
            state.selectedExcursions = []
        }
    },
    extraReducers: {
        [getExcursions.fulfilled]: (state, action) => {
            state.loading = false
            state.excursions = action.payload.excursions
        }
    }
})

export const {
    assignValue,
    removeValue,
    setPeopleCount,
    clearExcursionData
} = excursionSlice.actions

export default excursionSlice.reducer