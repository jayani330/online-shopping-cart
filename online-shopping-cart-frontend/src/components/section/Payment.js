import React, {Component} from 'react'
import '../css/Payment.css'

import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

import Paid from '../svg/cart1.jpg'



export class Payment extends Component{

    static contextType = DataContext;

    componentDidMount(){
        const {removeAll} = this.context;

        removeAll();
     }

    
    render(){
        const{removeAll} = this.context;

        return(

            <div className="payment-wrapper">
                <div id="payment">
                    <div id="payment-done">
                        <h2 style={{textAlign:"center"}}>Payment is Successful!</h2>  
                        <Link to="/product">Go to Products</Link>
                    </div>
                    <img src={Paid} className="img-fluid-animated" alt="" />
                </div>
            </div>
                        
        )
    }
}

export default Payment