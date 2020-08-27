import React, {Component} from 'react'
import '../css/Payment.css'

import {Link} from 'react-router-dom'
import {DataContext} from '../Context'



export class Payment extends Component{

    static contextType = DataContext;

    componentDidMount(){
        const {removeAll} = this.context;

        removeAll();
     }

    
    render(){
        const{removeAll} = this.context;

        return(
            <div id="payment">
                 <h2 style={{textAlign:"center"}}>Payment is Successful!</h2>  
                 
            </div>
        )
    }
}

export default Payment