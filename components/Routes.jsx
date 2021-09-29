import React from 'react'

import {Route , Switch} from 'react-router-dom'
import Products from '../pages/Products'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
        </Switch>
    )
}

export default Routes
