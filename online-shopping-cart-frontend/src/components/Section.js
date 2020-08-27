import React, {Component} from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import "../index.css"
import Cart from './section/Cart'
import Payment from './section/Payment'
import Login from './Login'
import Register from './Register'




export class Section extends Component{
    render(){
        return(
            <section>
                <Route path="/" component={Login} exact />    
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/register" component={Register} />
            </section>
        )
    }
}

export default Section