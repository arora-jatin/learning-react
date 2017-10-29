/**
 * Created by jarora on 6/4/17.
 */
import React from 'react';

class NavLinks extends React.Component {
    render() {
        return (
            <li className={this.props.class}><a href="#">{this.props.label}</a></li>
        );
    }
}

export {NavLinks};