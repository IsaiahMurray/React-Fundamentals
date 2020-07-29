import React, {useState} from 'react';

const State = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <dt>
                    useState is unique to Functional Components
                </dt>
                <dd>
                    Class-based Components have a separate measn of utilizing and modifying state.
                </dd>
                <dt>
                    useState uses Array Destructuring
                </dt>
                <dd>
                    useState provides a state variable to reference the value of the statw, and a
                    state modification function that allows you to set the new value of state.
                </dd>
                <dt>
                    useState is a Hook
                </dt>
                <dd>
                    useState is a tool  that originates from the list of Hooks you can access within React.
                </dd>
                <dt>
                    Triggers Re-Render
                </dt>
                <dd>
                    Like when a prop changes, changing the state of a component re-renders the wole component.
                </dd>
                <StateExample/>
            </div>
        </div>
    );
};

function StateExample(){
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return(
        <div>
            <input value={text} onChange={ e => setText(e.target.value) }/>
            <br/>
            <img 
            style={{ width: '100px', height: '100px' }}
            src="https://cdn.icon-icons.com/icons2/2070/PNG/512/thumbs_up_icon_126802.png"
            onClick={ e => setLikeNum(likeNum + 1) }
            />
            <span>{ likeNum }</span>
            <br/>
            <br/>
            <p
            style={{ color: textColor }}
            onMouseEnter={ () => setTextColor('red') }
            onMouseLeave={ () => setTextColor('blue') }
            >
                This text should be able to change colors
            </p>
        </div>
    )
}

export default State;