/**
 * Created by jarora on 6/4/17.
 */

import React from 'react';
import {Logo} from '../components/logo';
import {NavLinks} from '../components/navLinks';

class Header extends React.Component {
    constructor(properties) {
        super(properties);
        this.navTopLabels = ['Home', 'Products', 'Services', 'Blog', 'About', 'Contact'];
    }

    getTopNavigation(){
        console.log('header.js/getTopNavigation reached');
        return (
            <div id="menu">
                <ul>
                    {
                        this.navTopLabels.map((item,index) => <NavLinks label={item} class='first' key={index}/>)
                    }
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Logo label='Professional'/>
                {this.getTopNavigation()}
                <div id="headershadow">
                    <a href="#">
                        <img src="images/header-picture.jpg" alt="" width="877" height="150" />
                    </a>
                </div>
            </div>
        );
    }
}

export {Header};