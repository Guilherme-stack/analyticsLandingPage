import React from 'react'
import './SectionTwo.css'
import Screen from '../imagens/screen-02.png'
function SectionTwo() {
    return (
        <div>
            <div className="container section-two mt-5">
                <div className="row">
                    <div className="col-md-6 text-left">
                        <img className="w-100  " src={Screen} alt=""/>
                    </div>
                    <div className="col-md-6 text-right text-section-two">
                        <h1 className="font-weight-bold mb-4">Fully customizable to address your needs </h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
