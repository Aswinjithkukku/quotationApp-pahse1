import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    loading: false,
    rows: [
        {
            roomType: '',
            count: 0,
            price: 0,
        },
    ],
    hotelData: {},
    filteredData: [],
    price: {}
}


export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {

        addNewRow: (state, action) => {
            state.rows.push(
                {
                    roomType: '',
                    count: 0,
                    price: 0,
                },
            )
        },
        handleRowItemChange: (state, action) => {
            state.rows[action.payload.index][action.payload.name] = action.payload.value
        },
        removeRow: (state, action) => {
            const filteredRows = state.rows?.filter(
                (_, index) => {
                    return index !== action.payload;
                }
            );
            state.rows = filteredRows;
        },
        getHotelData: (state,action) => {
            state.hotelData = action.payload
        },
        filteredRowsData: (state,action) => {
            let prices = state.rows?.filter((row) => {
                if(row?.roomType && row?.count && row?.price) {
                    return {
                        roomType: row?.roomType,
                        count: row?.count,
                        price: row?.price
                    }
                }
                return '';
            })
            state.filteredData = prices
        },
        prices: (state,action) => {
            state.price = action.payload
        },
        clearHotelData: (state,action) => {
            state.hotelData = {}
            state.filteredData = []
            state.price = {}
        }

    }
})

export const {
    addNewRow,
    handleRowItemChange,
    removeRow,
    getHotelData,
    filteredRowsData,
    prices,
    clearHotelData
} = hotelSlice.actions;

export default hotelSlice.reducer;