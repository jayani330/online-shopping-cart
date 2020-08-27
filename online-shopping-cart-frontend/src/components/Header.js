import React, {Component} from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import Cart from './svg/shopping-cart-solid.svg'
import Logo from './svg/logo1.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component{
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render(){
        const {toggle} = this.state;
        const {cart} = this.context;

        return(
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="menu icon" width="20" />
                </div>

                <div className="logo">
                    <h1><Link to="/product"><img src={Logo} alt="logo" width="150" /></Link></h1>
                </div>

                <nav>
                    <ul className={ toggle ? "toggle" : ""}>
                        <li><Link to="/product">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img id="close_img" src={Close} alt="close icon" width="20" />
                        </li>
                    </ul>

                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={Cart} alt="cart icon" width="20" />
                        </Link>
                    </div>
                </nav>

            </header>

            

        );
    }
}

export default Header