/**
 * Created by jarora on 6/4/17.
 */

import React from 'react';
import {NavLinks} from '../components/navLinks';

class SideNav extends React.Component {
    constructor(properties){
        super(properties);
        this.sideLinks1 = ['Starter Web Hosting', 'Business Web Hosting', 'VPS Servers',
            'Dedicated Servers', 'Templated Web Design', 'Custom Web Design'];
        this.sideLinks2 = ['Top 100 Web Hosting', 'Free Web Templates', 'WordPress Themes',
        'Company Name', 'Another Company Name'];
    }
    render() {
        return (
            <div id="sidebar">
                <p></p>
                <h3>Our Services</h3>
                <ul>
                    {this.sideLinks1.map((item, index) => <NavLinks label={item} />)}
                </ul>
                <h3>Latest Clients</h3>
                <ul>
                    {this.sideLinks2.map((item, index) => <NavLinks label={item} />)}
                </ul>
            </div>
        );
    }
}

export {SideNav};