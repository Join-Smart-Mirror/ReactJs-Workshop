import Home from './Home'
import Login from './Login'
import Settings from './Settings'
import { Switch, Route } from 'react-router-dom';

const Content = () =>{
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/" component={Home}/>
        </Switch>
    )
}

export default Content;