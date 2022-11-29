import { configureStore } from "@reduxjs/toolkit";
import transferReducer from "./slices/transferSlice";
import userReducer from "./slices/userSlices";
import locationReducer from "./slices/locationSlice";
import excursionReducer from "./slices/excursionSlice";
import hotelReducer from './slices/hotelSlice'

const store = configureStore({
  reducer: {
    transfer: transferReducer,
    user: userReducer,
    location: locationReducer,
    excursion: excursionReducer,
    hotel: hotelReducer,
  },
  devTools: true,
});

export default store;
