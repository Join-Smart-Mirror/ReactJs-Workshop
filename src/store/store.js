import layoutReducer from './layout-slice' 
import authReducer from './auth-slice'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: { 
        layout : layoutReducer,
        auth : authReducer
    }
});


export default store;