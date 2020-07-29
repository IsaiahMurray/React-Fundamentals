import React from 'react';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title"> JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to Javascript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most sane people would use JSX.</dd>
                </dl>
                <hr/>
                <NormalComponent/>
                <CreateElementComponent/>
            </div>
        </div>
    );
};

const NormalComponent = () => {
    return(
        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEzgj_vhGDtjye4ttoHWiVE7AN_rDKLp6ToQ&usqp=CAU"/>
        </div>
    );
};

const imageLocation = 'https://miro.medium.com/max/786/1*jJZHFQmhkq_7ohn18KrMhA.png';

const CreateElementComponent = () => {
    return (
        React.createElement('div',
            { style: { border: '2pz solid black' } },
            React.createElement('h1', null, 'CreateElement Component'),
            React.createElement('p', null, 'This was constructed with CreateElements calls.'),
            React.createElement('img', { src: imageLocation }, null)
            )
    );
};

export default JSXRules;