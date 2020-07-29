import React, { useState } from 'react';
import FunctionalComponentDemo from './FunctionalComponentDemo';

const PropsDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <FunctionalComponent string="will this display?"/>
            </div>
        </div>
    )
}

const FunctionalComponent = props => {
    return(
        <div>
            <p>{props.string}</p>
        </div>
    )
}

export default PropsDemo;