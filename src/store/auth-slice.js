import { createSlice } from '@reduxjs/toolkit';
import { history } from '../App';
import graphqlFetch from '../utility/graphqlFetch';
import { layoutActions } from './layout-slice';

const authInitialState = {
    operations: {
        login : {
            status : '',
            error: undefined
        }
    }
}

const authSlice = createSlice({
    name : 'auth',
    initialState : authInitialState,
    reducers : {
        setOperations(state,action){
            state.operations[action.payload.function] = {
                status : action.payload.status || '',
                error : action.payload.error || undefined
            }
        }
    }
})
export const authActions =  authSlice.actions;


//THUNK
export const loginFunction = (email,password) => {
    return (dispatch) =>{
        dispatch(authActions.setOperations({function:'login',status:'Pending'}))
        const graphqlQuery= {
            query: 
                `
                    query loginUser($userInput: loginInput!){
                        loginUser(userInput: $userInput){
                            token
                        }
                    }
            
            `,variables:{
                userInput:{
                    password,
                    email,
                    language : 'el'
                }
            }
        }
        graphqlFetch(graphqlQuery)
            .then((res)=>{
                if(res?.errors?.length > 0){
                    dispatch(authActions.setOperations({function:'login',status:'Failed',error:res.errors[0].message}))
                    return;
                }
                localStorage.setItem('token',res.data.loginUser.token)
                dispatch(layoutActions.setAuthorizationStatus(true))
                dispatch(authActions.setOperations({function:'login',status:'Success'}))
                history.push('/')
            })
            .catch(err=>{
                authActions.setOperations({function:'login',status:'Failed',error:'Something went wrong'})
            })
    }
}


export default authSlice.reducer;