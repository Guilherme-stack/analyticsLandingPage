import React from 'react'
import './Features.css'
import Foguete from '../imagens/foguete.png'
import Relogio from '../imagens/relogio.png'
import Computador from '../imagens/computador.png'
function Features() {
    return (
        <div style={{fontFamily:"Poppins"}}>
            <div className="container">
                <div className="row">
                <div className="title-features text-center ">
                        <h1 className="font-weight-bold">Main Features</h1>
                        <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row text-center features">
                        <div className="col-md-4">
                            <img src={Relogio} alt=""/>
                            <span className="d-block font-weight-bold mt-3">Monitoring 24/7</span>
                            <p className="d-block mt-2 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={Computador} alt=""/>
                            <span className="d-block font-weight-bold mt-3">Widget System</span>
                            <p className="d-block mt-2 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat.</p>
                        </div>
                        <div className="col-md-4">
                            <img src={Foguete} alt=""/>
                            <span className="d-block font-weight-bold mt-3">Best Performance</span>
                            <p className="d-block mt-2 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat.</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Features
