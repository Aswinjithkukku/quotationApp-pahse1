import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    loading: false,
    array: [],
    price: {},
    rows: [
        {
            roomType: '',
            count: 0,
            price: 0,
        },
    ]
}


export const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        getPrice: (state, action) => {
            state.loading = false
            state.array = action.payload.array
            state.price = action.payload.price
        },
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
        // let products = productsRows?.filter((row) => {
        //     if (row?._id) {
        //         return {
        //             quantity: row.quantity,
        //             name: row?.selectedProduct?.name,
        //             description: row?.selectedProduct?.description,
        //             price: row?.selectedProduct?.price,
        //         };
        //     }
        //     return "";
        // });
    }
})

export const {
    getPrice,
    addNewRow,
    handleRowItemChange
} = hotelSlice.actions;

export default hotelSlice.reducer;