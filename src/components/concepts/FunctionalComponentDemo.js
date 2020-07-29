import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';

const FunctionalComponentDemo = () => { //Because a functional component is a function that should return something
    return (

        <Container className="main">
            <Row>
                <Col xs="12">
                <h1>Functional Component</h1>
                <p>
                    Functional components are the primamry tool in React to build a modular piece of your page..
                </p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>
                        With the 'useState' hook, functional components can now contain State
                        values within it. This gives you the ability to use internal data within the component,
                        and when the data is change it will cause a "re-render" of the component, refreshing data
                        placed in the dom.
                    </dd>
                    <dt>No 'this' keyword</dt>
                    <dd>
                        React has what is called a 'class based component' where you use 
                        an E6 javascript class object for your components. in order to 
                        store data specifically for that individual 'instance' of the class
                        object, to refer to it's location it uses a keyword called 'this'.
                        Think of having multiple Image components, and you want to change 
                        the url that the second Image component is showing. In order to do 
                        that, you choose that component and refreshes "it's" internal
                        data. "This" means "me" when it comes to specific objects.
                    </dd>
                    <dt>Can use effects</dt>
                    <dd>
                        React components have different event moments through the lifecycle
                        of the component. You can utilize the 'useEffect' react hook
                        function to perform  a specific task at one of those event moments.
                        An example would be when your component is going to mounted to
                        the screen, maybe you would like to send a message to the server
                        saying "this user is now on their profile page". This is incredible
                        useful because you can update some data based on when some other
                        thing updates. More on this later!
                    </dd>
                    <dt>return()</dt>
                    <dd>
                        Must return a single element, but this element may have nested elements
                        inside.
                    </dd>
                </dl>
            </Col>
        </Row>
        <h1>Challenge</h1>
        <Row>
            <Col md="6">
                <HelloWorldFatArrow className="logo"/>
            </Col>
            <Col md="6">
                <HelloWorld/>
            </Col>
        </Row>
    </Container>
    );
}

const HelloWorld = function () {
    return(
        <div>
            <Card>
                <img
                width="100%"
                height="280px"
                src="src\components\assets\js_function_anatomy.png"
                alt="Card cap"/>
                <CardBody>
                    <CardTitle>Function Boi</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function()</pre>.</CardText>
                    <Button>Yeet outta here</Button>
                </CardBody>
            </Card>
        </div>
    );
}

const HelloWorldFatArrow = function() {
    return(
        <div>
            <Card>
                <img
                width="100%"
                height="280px"
                src="src\components\assets\fat arrow.webp"
                alt="Card cap"/>
                <CardBody>
                    <CardTitle>Fat Arrow Boi</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = () =&gt; </pre>.</CardText> 
                    <Button>Yeet outta here</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default FunctionalComponentDemo; //For the component to work, we need to export it

//The &gt is an arrow--  ">"