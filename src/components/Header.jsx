import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../imagens/logo.png'
import SignUp from '../imagens/signUp.png'
function Header() {
    return (
        <div className="Header">
            <div className="container pt-5">
                <div className="row menu  ">
                    <div className="col-lg-2 col-md-3 col-sm-3">
                        <img className="w-100" src={Logo} alt=""/>
                    </div>
                    <div className="col-lg-5  text-center m">
                        <ul className="list-inline ">
                            <li className="d-inline mx-3">Products</li>
                            <li className="d-inline mx-3">Pricing</li>
                            <li className="d-inline mx-3">FAQ</li>
                            <li className="d-inline mx-3">Blog</li>
                            <li className="d-inline mx-3">Blog</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 col-md-9 col-sm-9 text-right">
                        <ul className="list-inline">
                            <li className="d-inline mx-3">Sign In</li>
                            <li className="d-inline mx-3"> <span className="signUp py-2 px-5">Sign Up</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
