import { createSlice } from '@reduxjs/toolkit';

const initialLayoutSate = {
    authorizationStatus : localStorage.getItem('token') ? true : false,
    operations: {
        login : {
            status : '',
            error: undefined
        }
    }
}

const layoutSlice = createSlice({
    name : 'layout',
    initialState : initialLayoutSate,
    reducers : {
        setAuthorizationStatus(state,action){
            state.authorizationStatus = action.payload;
        },
    }
})
export const layoutActions =  layoutSlice.actions;
export default layoutSlice.reducer;