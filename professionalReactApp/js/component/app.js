import React from 'react';
import Header from './header';
import MortgageCalculator from './mortgagecalculator';

class App extends React.Component {
    constructor(properties){
        super(properties);
    }

    render() {
        return (
            <div>
                <Header title="Professional Es6 React"/>
                <MortgageCalculator principal="200000" years="15" rate="5"/>
            </div>
        );
    }
}

export default App;