import React, { useState, useEffect } from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some importnt points regarding effects:</h2>
                <ul>
                    <li>
                        They are triggered at different moments in the component. When state changes,
                        when props change, when the component mounts, when the component unmounts.
                    </li>
                    <li>
                        Effects are used to trigger certain actions based upon what changes occured.
                    </li>
                    <li>
                        Effects can return cleanup functions, whic can clean up timers using memory,
                        subscriptions listening for changes from external sources, and other funcitons
                        which may use system resources.
                    </li>
                </ul>
                <SampleEffects/>
                <br/>
                <SampleEffects/>
            </div>
        </div>
    )
}

const SampleEffects = () => {
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        console.log('we initiated a change');
        let timer;
        if(timerRunning){
            timer = window.setTimeout(() => {
                console.log('the timer expired', Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        }
        return () => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000)}
    })

    useEffect(() => {
        console.log('This painting needs some happy trees');
    }, [])

    let buttonHandler = () => {
        if(!timerRunning){
            setTimerRunning(true);
        }
    }

    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demoes an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console</button>
        </div>
    )
}

export default Effects;