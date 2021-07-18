import React from 'react'
import './SectionOne.css'
import Screen from '../imagens/screen-01.png'
function SectionOne() {
    return (
        <div>
            <div className="container section-one">
                <div className="row">
                    <div className="col-md-6 col-sm-12 text-left text-section-one">
                        <h1 className="font-weight-bold">Automated Reports & Widget Alerts</h1>
                        <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right">
                        <img className="w-100" src={Screen} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
