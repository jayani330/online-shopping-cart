import React, {Component} from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import Web from '../svg/cart1.jpg'
import '../css/Details.css'
import '../css/Cart.css'


export class Cart extends Component{
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    
    render(){
        const{cart, increase, reduction,removeProduct,total} = this.context;

        if(cart.length === 0){
            return (
                <div className="cart-wrapper">
                    <div id="emptyCart">
                        <div id="go-to-cart">
                            <h2 style={{textAlign:"center"}}>Your cart is currently empty!</h2>
                            <Link to="/product">Go to Products</Link>
                        </div>
                        <img src={Web} className="img-fluid-animated" alt="" />
                    </div>
                </div>
            ) 
        }
    
        else{
            return(
                <div className="cart-wrapper">
                    <div id="cart">
                        {
                            cart.map(item =>(

                                <div>
                                <div className="details cart" key={item._id}>
                                    <img className="cartImg" src={item.src} alt=""/>
        
                                    <div className="box">
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <span>${item.price * item.count}</span>
                                        </div>
        
                                        <Colors colors = {item.colors}/>
        
                                        <p>{item.description}</p>
                                        <p>{item.content}</p>
        
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item._id)}> - </button>
                                            <span>{item.count}</span>
                                            <button className="count" onClick={() => increase(item._id)}> + </button>
                                        </div>
        
                                        <button className="delete" onClick={() => removeProduct(item._id)}> Remove </button>
                                    </div>
                                </div>

                                </div>
                            ))
                        }
        
                        <div className="total">
                            <Link to="/payment">Payment</Link>
                            <h3>Total: ${total}</h3>
                        </div>
        
                    </div>
                </div>
            )
        }

        
    }
}

export default Cart