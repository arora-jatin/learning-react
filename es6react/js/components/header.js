import React from 'react';

class HeaderComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Header Component Initialized!');
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export {HeaderComponent};