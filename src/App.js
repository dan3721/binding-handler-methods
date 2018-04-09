import React from 'react';
import './App.css';

class App extends React.PureComponent {

    handleAlert = () => {
        alert(new Date)
    }

    render() {
        return <button onClick={this.handleAlert}>Click Me!</button>
    }
}

export default App;
