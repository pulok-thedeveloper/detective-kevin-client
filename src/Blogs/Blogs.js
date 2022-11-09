import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10'>
            <div className='my-5'>
                <h1 className='text-2xl mb-3'>Difference between SQL and NoSQL</h1>
                <p className='text-left'>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                <p className='text-left'>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl mb-3'>What is JWT, and how does it work?</h1>
                <p className='text-left'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p className='text-left'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl mb-3'>What is the difference between javascript and NodeJS?</h1>
                <p className='text-left'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='my-5'>
                <h1 className='text-2xl mb-3'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-left'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                
            </div>
        </div>
    );
};

export default Blogs;