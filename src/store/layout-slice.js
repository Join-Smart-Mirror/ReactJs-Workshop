import { createSlice } from '@reduxjs/toolkit';
import { history } from '../App';

const initialLayoutSate = {
    authorizationStatus : localStorage.getItem('token') ? true : false,
    breadcrumbs: '',
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
        setBreadcrumbs(state,action){
            state.breadcrumbs = action.payload;
        }
    }
})
export const layoutActions =  layoutSlice.actions;
export default layoutSlice.reducer;