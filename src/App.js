import './App.css';
import { createBrowserHistory } from 'history';
import Content from './components/content/Content';
import Menu from './components/layout/menu/Menu';
import {Router} from "react-router-dom";

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <div className="grid">
        <Menu/>
        <Content />
      </div>
    </Router>
  );
}

export default App;
