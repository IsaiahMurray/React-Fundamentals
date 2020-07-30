import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {

  const startTimeRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    if (isRunning) {
        const interval = setInterval(update, 10);

        return () => { clearInterval(interval) }
    }
    /*  We need a way to keep time running in our code just as it does in real life, 
    and we need the app to keep track of it. To do that, we're going to use useEffect, 
    and we're going to create a new method for useEffect to call.  */

})

const update = () => {
    const delta = Date.now() - startTimeRef.current;
    setTime(time + delta);
    startTimeRef.current = Date.now();
}
/* Using  startTimeRef.current, we can get access to what time 
it was when we pressed the 'Start' button. We're taking the current date, 
and subtracting where it was when we started. Then using setTime(), 
we take the current value for time, and add the delta. So if we started 0, 
and 1 second passes, we add one and only one seconds has passed, so on and so forth.  */

const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now()
}
/* We're setting the isRunning value to true, and we're also setting 
a reference to the current time in startTimeRef. This will be useful 
later when we need track how much time has passed since we started the stopwatch. */

const stop = () => {
    setIsRunning(false);
}
//Simply returning isRunning back to false

const lap = () => {
    setLaps([...laps, time]);
}
/* This method will be called when the lap button is pressed, and will add on a 
new time to the lapTimes every time it is called. Those three dots, or an ellipses, 
are called the 'spread' operator. This will take the current value of laps and 
spread them out into this new array literal that we're passing into setLaps.*/

const reset = () => {
    setTime(0);
    setLaps([]);
}
/* completely reset the stopwatch when the reset button is clicked. 
This method will set our time back to 0, and clear out all the lap time we've been storing. */
  
  return (
    <div>
      <h1 className="section-title">React Stopwatch!</h1>
      <p>
        { Math.floor((time / 1000) / 60).toString() } :
        { Math.floor((time / 1000) % 60).toString() }
        {/* We're going to wrap nearly all of our math in 
        Math.floor(), which essentially will round our 
        numbers off so they'll look nicer */}
      </p>
      {/*divide the time by 1000, since we want to deal with seconds 
      and not milliseconds, and we'll do that for both our minutes, and seconds display.
      Then in the top line, we divide the seconds by 60 to get minutes passed, and use a 
      modulus operator in the bottom line to get the remaining seconds. */}
      { 
        isRunning ? <button onClick={ stop }>Stop</button>
        : <button onClick={ start }>Start</button> 
      }
      {
        isRunning ? <button onClick={ lap }>Lap</button>
          : <button onClick={ reset }>Reset</button>
      }
      {/* In the first ternary, if we are currently running, we'll show a button to stop the 
      time, attached to the button is a click handler that we'll build in a little while. 
      If we aren't running, we'll show a button to start the time, and also attach the 
      appropriate click handler. 

      In our second ternary, isRunning, we'll expose a button and click handler to handle 
      lapping times, and if we aren't running, we'll give the user the option to reset the time. */}
      { laps.map(time => {
          return (
             <p>
                { Math.floor((time / 1000) / 60).toString()} :
                { Math.floor((time / 1000) % 60).toString()}
             </p>
          )
      })
      }
    </div>
  );
}

export default Stopwatch;