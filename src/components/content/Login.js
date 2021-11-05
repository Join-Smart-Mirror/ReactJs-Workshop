import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import {useState} from 'react';
import validator from 'validator';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { layoutActions } from "../../store/layout-slice";
import { loginFunction } from "../../store/auth-slice";
import { useSelector } from "react-redux";
const Login = () =>{
    const dispatch = useDispatch();
    const loginOperation = useSelector(state=>state.auth.operations.login)
    useEffect(()=>{
        dispatch(layoutActions.setBreadcrumbs('Login'));
    },[dispatch])
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState([]);
    const submitHandler = () => {
        setErrors([]);
        const errorsTemp = [];
        if(!validator.isLength(username,{min:3,max:25}))
        {
            errorsTemp.push('Invalid username')
        }
        if(!validator.isLength(password,{min:3,max:25}))
        {
            errorsTemp.push('Invalid password')
        }
        console.log('before returning if errors')
        if(errorsTemp.length > 0){
            setErrors(errorsTemp)
            return;
        }
        console.log('dispatch');
        dispatch(loginFunction(username,password));
    }
    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{height:'100%'}}
        >
            <Paper elevation={12} style={{padding:20}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{height:'100%'}}
                >
                    Login
                    <TextField value={username} label="Username" variant="outlined" style={{marginTop:12}} onChange={usernameChangeHandler}/>
                    <TextField value={password} label="Password" variant="outlined" type="password" style={{marginTop:12}} onChange={passwordChangeHandler}/>
                    <Button variant="outlined" onClick={submitHandler} style={{marginTop:12}} disabled={loginOperation.status === 'Pending'}>Submit</Button>
                    {errors.length > 0 && errors.map(error => <div> {error} </div>)}
                    {loginOperation.error}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;