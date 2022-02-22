import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return <div>
            <h1 style={{
                display: 'inline-block',
                position: 'absolute',
                fontSize: '40px',
                top: '30%',
                left: '40%'
            }}>This is home</h1>
        </div>;
    }
}
