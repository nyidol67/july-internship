import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import Details from './mealtypeRest/detail';
import Header from './header';
import RestaurantDetail from './RestDetail/RestaurantDetail'
import OrderForms from './orders/form'

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path = "/" component={ Home}></Route>
                <Route path = '/details/:id' component = { Details}></Route>
                <Route path = '/rest/:id' component = {RestaurantDetail}></Route>
                <Route path = '/order/:id' component = {OrderForms}></Route>
            </div>
        </BrowserRouter>
    )
}
export default Routing;