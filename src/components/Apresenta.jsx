import React from 'react'
import './Apresenta.css'
import Banner from '../imagens/banner.png'
function Apresenta() {
    return (
        <div className="Apresenta" style={{fontFamily:"Poppins"}}>
            <div className="m-0">
                        <img className="banner" src={Banner} alt=""/>
                    </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  col-md-12  text-apresenta">
                        <h1 className="text-light font-weight-bold mb-4">Monitor your business on real-time dashboard</h1>
                        <p className="text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
                        <div className="button-apresenta  d-inline">Try For Free</div>
                    </div>
                     
                </div>
            </div>
        </div>
    )
}
 
export default Apresenta
