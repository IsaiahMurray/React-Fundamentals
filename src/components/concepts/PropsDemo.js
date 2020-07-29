import React, { useState } from 'react';
import FunctionalComponentDemo from './FunctionalComponentDemo';

const PropsDemo = () => {

    const [ color, setColor ] = useState('red');
    const [ backgroundColor, setBackgroundColor ] = useState('black');
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
        color === 'red' ? setColor('black') : setColor('red');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'black' ? setBackgroundColor('red') : setBackgroundColor('black');
    };

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    };

    const toggleBorderStyle = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    };

    return (

        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="will this display?" function={toggleColor} selectedStyle={ color }/>
                    <FunctionalComponent string="Props are pretty interesting" function={toggleBackgroundColor} selectedStyle={ backgroundColor }/>
                    <FunctionalComponent string="You can send data from one component" function={toggleBorderStyle} selectedStyle={ borderStyle }/>
                    <FunctionalComponent string=".... to another!" function={toggleBorderRadius} selectedStyle={ borderRadius }/>
                </div>
            </div>
        </div>
    )
}

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>toggle Style</button>
            <TinyComponent selectedStyle={props.selectedStyle}/>
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: { props.selectedStyle }</p>
        </div>
    )
}

export default PropsDemo;