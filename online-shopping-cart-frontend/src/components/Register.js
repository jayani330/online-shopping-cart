import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './css/Login.css'
import Logo from './svg/logo3.svg'



export class Register extends Component{

    state = {
        disabled: true
    }

    handleChange = (e) =>{
        if((e.target.value)!== 'null'){
            this.setState({
                disabled: false
            });
        }

        else{
            this.setState({
                disabled: true
            });
        }
    }

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id="login">
                <div className="container">
                    <img src={Logo} alt="" width="200px"/>
                    <p>time is new fashion!</p>
                </div>

                <div className="base-container">
                    <div className="header">Register</div>

                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <Link to={'/product'}>
                            <button type="button" className="btn" disabled={this.state.disabled}>Register</button>
                        </Link>
                    </div>
                    
                </div>
            
            </div>

            
        );
        
    }


}


export default Register