/**
 * Created by jarora on 6/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './containers/header';
import {Content} from './containers/content';
import {SideNav} from './containers/sidenav';
import {Footer} from './containers/footer';

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);
        console.log('App Initialized');
    }

    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <SideNav/>
                <Footer/>
            </div>
        );
    }
}

let appElement = document.getElementById('app');

ReactDOM.render(<AppComponent/>, appElement);