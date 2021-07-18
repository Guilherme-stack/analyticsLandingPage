import React from 'react'
import './Planos.css'
import Screen from '../imagens/footer.png'
import Twitter from '../imagens/Twitter.png'
import Facebook from '../imagens/Facebook.png'
import Instagram from '../imagens/Instagram.png'
function Planos() {
    return (
        <div>
            <div className="container pricing">
                <div className="row">
                    <h1 className="font-weight-bold text-center text-light col-md-12">Pricing Plans</h1>
                    <p className="text-center text-secondary col-md-12 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Elementum nisi aliquet volutpat pellentesque volutpat est </p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div class="row text-center">
                    <div className="col-md-4 col-sm-12  starter">
                        <h1 className="font-weight-bold text-light mt-5 ">Starter</h1>
                        <p className="text-secondary mb-5">up to 3 users</p>
                        <hr className="hr" />
                        <h4 className="font-weight-bold price mt-4 mb-2">$<span>29</span></h4>
                        <p className="text-secondary mb-5">per month</p>
                        <p className="order mx-5 py-2 ">Order</p>
                    </div>
                    <div className="col-md-4 col-sm-12 starter standart" style={{background:"white"}}>
                    <h1 className="font-weight-bold mt-5 ">Standart</h1>
                        <p className="text-secondary mb-5">up to 20 users</p>
                        <hr className="hr" />
                        <h4 className="font-weight-bold price mt-4 mb-2" style={{color:"#172755"}}>$<span>99</span></h4>
                        <p className="text-secondary mb-5">per month</p>
                        <p className="order-standart mx-5 py-2 ">Order</p>
                    </div>
                    <div className="col-md-4 col-sm-12 starter">
                    <h1 className="font-weight-bold text-light mt-5 ">Premiun</h1>
                        <p className="text-secondary mb-5">up to 200 users</p>
                        <hr className="hr" />
                        <h4 className="font-weight-bold price mt-4 mb-2">$<span>299</span></h4>
                        <p className="text-secondary mb-5">per month</p>
                        <p className="order mx-5 py-2 ">Order</p>
                    </div>
                </div>
            </div>
            
            <div className="container pt-5">
            <hr className="hr w-100"/>
                <div className="row">
                    <div className="col-md-4 text-left"> 
                        <img className="w-50" src={Screen} alt=""/>
                    </div>
                    <div className="col-md-4 text-center">
                        <ul className="list-inline text-secondary">
                            <li className="d-inline mx-3">Products</li>
                            <li className="d-inline mx-3">Pricing Plans</li>
                            <li className="d-inline mx-3">FAQ</li>
                            <li className="d-inline mx-3">Blog</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 text-right">
                        <ul className="list-inline">
                            <li className="d-inline"><img src={Instagram} alt=""/></li>
                            <li className="d-inline"> <img className="mx-3" src={Twitter} alt=""/></li>
                            <li className="d-inline"><img src={Facebook} alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planos
