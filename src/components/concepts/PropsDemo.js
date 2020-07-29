import React, { useState } from 'react';
import FunctionalComponentDemo from './FunctionalComponentDemo';

const PropsDemo = () => {

    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ dispaly, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

       
    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        dispaly: dispaly,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('black') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('blue') : setBackgroundColor('purple');
    };

    return (

        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="will this display?" function={toggleColor}/>
                    <FunctionalComponent string="Props are pretty interesting" function={toggleColor}/>
                    <FunctionalComponent string="You can send data from one component" function={toggleColor}/>
                    <FunctionalComponent string=".... to another!" function={toggleColor}/>
                </div>
            </div>
        </div>
    )
}

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}

export default PropsDemo;