import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderComponent} from './components/header'

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);
        console.log('Application Initialized');
    }

    render() {
        let markup = (
          <div>
              <h1>Welcum to world of React!</h1>
              <HeaderComponent title="Hello from CVENT"/>
          </div>
        );
        return markup;
    }
}

let appElement = document.getElementById('app');

ReactDOM.render(<AppComponent/>, appElement);