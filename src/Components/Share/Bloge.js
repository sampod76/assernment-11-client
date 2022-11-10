import React from 'react';
import useTitle from '../Title/useTitle';


const Bloge = () => {
    useTitle('Blogs')
    return (
        <div>
          
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between sql vs nosql?
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is jwt token?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is the difference between js and node js?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does node js handle multiple requests at the same time
                </div>
                <div className="collapse-content">
                    <p>Node’s main JavaScript thread uses an event loop. When multiple requests are made, the first is processed while the rest are blocked (until the first is complete). Each request is processed one loop at a time until they’re all processed. The loop executes very quickly and you kind of have to go out of your way to create apps that block.</p>
                </div>
            </div>
        </div>
    );
};

export default Bloge;