import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({});

    const fetcher = () => {
        fetch(`https://swapi.dev/api/people/${query}`) //fetching the query value from the api
        .then(res => res.json()) //turning the response into json
        .then(json => {
            console.log(json); //console logging the json response
            setResults(json); //updating the results to the response value
        })
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <input
                value={query} //grabbing the input value and setting it equal the the variable query
                onChange={ e => setQuery(e.target.value)} //updating the query value based on input
                placeholder="Enter your StarWars character number"
                />
                <button onClick={ () => fetcher() }>Click for Character!</button>
                { results ? <h2>{results.name}</h2> : <div></div> } {/* displaying the the name value of the results from the query input */}
            </div>
        </div>
    )
}

const Hooks2 = () => {
    const [ results, queryNum, setQueryNum ] = useNumHook('');
    const [clicks, setClicks] = useClicks(0);

    return(
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number below to see a number fact</h3>
                <input
                value={queryNum}
                onChange={e => setQueryNum(e.target.value)}
                placeholder="enter a number"
                />
                { results ? <h2>{results}</h2> : <div></div> }
                <button onClick={() => setClicks(clicks + 1)}>Click to update document title</button>
            </div>
        </div>
    )
}

const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');

    useEffect(() => {
        if(queryNum !== '') {
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.json())
            .then(json => {
                setResults(json);
                console.log(json);
            })
        }
    }, [queryNum])

    return [results, queryNum, setQueryNum];
};

const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);

    useEffect(() => {
        document.title = `You have clicked ${clicks} times`;
    }, [clicks])
    return [clicks, setClicks]
}

export default Hooks2;