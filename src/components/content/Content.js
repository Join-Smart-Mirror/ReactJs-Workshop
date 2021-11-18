
import { Switch, Route } from 'react-router-dom';
import routes from './Routes/routes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Content = () =>{
    const authStatus = useSelector(state=>state.layout.authorizationStatus)
    const finalRoutes = [];
    useEffect(()=>{
        routes.forEach(route => {
            if(route.authorization===authStatus)
            finalRoutes.push( <Route path={route.path} component={route.component} exact={route.exact} />)
        })
    },[authStatus])

    return (
        <Switch>
            {finalRoutes}
        </Switch>
    )
}

export default Content;