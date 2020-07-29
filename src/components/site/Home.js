import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals at Eleven Fifty!</h1>
                <p>
                    This web app is intended to be a starter/tutorial app for your upcoming 
                    project and a learning sandbox for you in the months and years to come,
                    should you continue to develop web apps with React. In this application
                    we will work through some of the basic React concepts, build out some
                    small applications, then unleash you to build your own personal 
                    web applications.
                </p>
                <hr/>
                <h1>Important Notes</h1>
                <ul>
                    <li>
                        Being component based, you can move on to the next module.
                    </li>
                    <li>
                        The styling is intentionally bland, you may change it to your liking.
                    </li>
                    <li>
                        At this phase, this site is not yet responsive(mobile-friendly).
                    </li>
                    <li>
                        Refator the text on this page and make this your own website!
                    </li>
                    <li>
                        We have tried to collect the very best resources for this app, and
                        we have cited those <Link to="/resources">here</Link>.
                    </li>
                    <li>
                        the set up for this app might be the most confusing part. Hang in there!
                    </li>
                    <li>
                        <Link to="/resources">React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;