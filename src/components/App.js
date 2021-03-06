import React from 'react';
import {Router,Route} from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Registeration from './registeration/Registeration';
import history from '../history';
import LogIn from './login/LogIn';
import ProductDetail from './productDetail/ProductDetail';


const App=()=>{
    return (
        <Router history={history}>
            <div className="ui container">
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={LogIn}/>
                <Route path="/registeration" component={Registeration}/>
                <Route path="/detail/:id" component={ProductDetail}/>
            </div>
        </Router>
    )
}

export default App;