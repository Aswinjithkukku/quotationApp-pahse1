import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../axios';

const getToken = () => {
    if(localStorage.getItem('token')) {
        return localStorage.getItem('token')
    } else {
        return ''
    }
}

const initialState = {
    isLoggedIn: false,
    user: {},
    token: getToken(),
    allUsers: [],
    totalUsers: 0,
    loading: false,
};

const fetchUsers = createAsyncThunk(
    '/user/fetchUsers',
    async (dispatch,  getState ) => {
        const response = await axios.get('/admin/all');
        return response.data;
    }
);
const logoutUser = createAsyncThunk(
    '/user/logoutUser',
    async (dispatch,  getState ) => {
        const response = await axios.get('/user/logout');
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

            localStorage.setItem('token', state.token)
        },
        updateUser: (state,action) => {
            state.user = action.payload;
            state.isLoggedIn = true
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.allUsers = action.payload.users;
            state.totalUsers = action.payload.totalUsers;
            state.loading = false;
        },
        [logoutUser.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = {};
            state.token = '';

        localStorage.removeItem('token')
        },
    },
});

export const {
    saveUser,
    logout,
    updateUser,
} = userSlice.actions;

export { fetchUsers,logoutUser };

export default userSlice.reducer;