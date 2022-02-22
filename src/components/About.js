import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return <div>
            <h1 style={{
                display: 'inline-block',
                position: 'absolute',
                fontSize: '40px',
                top: '30%',
                left: '40%'
            }}>
                This is About
            </h1>
        </div>;
    }
}
