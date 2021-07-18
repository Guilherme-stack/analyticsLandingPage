import React from 'react'
import './SectionTree.css'
import Screen from '../imagens/screen-03.png'
function SectionTree() {
    return (
        <div>
            <div className="container section-tree mt-4">
                <div className="row ">
                    <div className="col-md-6 text-left text-section-tree">
                        <h1 className="font-weight-bold mb-4">Pre-built Dashboard Templates</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</p>
                    </div>
                    <div className="col-md-6 text-right">
                         <img className="w-100" src={Screen} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTree
