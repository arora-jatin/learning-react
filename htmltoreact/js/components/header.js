import React from 'react';
import {Logo} from './logo';
import {NavLinks} from './navLinks';


class HeaderComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Header Component Initialized!');
    }

    render() {
        return (
            <div>
                <Logo title="Professional"/>
                <h2>{this.props.title}</h2>
                <NavLinks class="abc" label="123"/>
            </div>
        );
    }
}

export {HeaderComponent};