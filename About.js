import React from 'react';
import './App.css';
import StreamList from './StreamList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Event Manager</h1>
                <StreamList />
            </header>
        </div>
    );
}

export default App;
