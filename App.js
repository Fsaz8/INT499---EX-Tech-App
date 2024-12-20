import React, { useState } from 'react';
import './App.css';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Adding user-friendly icons

function App() {
    const [events, setEvents] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddEvent = () => {
        if (inputValue.trim() !== '') {
            setEvents([...events, inputValue]);
            setInputValue(''); // Clear input after adding event
        }
    };

    const handleDeleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>StreamList</h1>
                <p>Track and manage your events effortlessly!</p>
            </header>

            <main>
                <div className="event-input">
                    <input
                        type="text"
                        placeholder="Enter a new event..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleAddEvent}>
                        <FaPlus /> Add Event
                    </button>
                </div>

                <ul className="event-list">
                    {events.map((event, index) => (
                        <li key={index} className="event-item">
                            {event}
                            <button onClick={() => handleDeleteEvent(index)} className="delete-button">
                                <FaTrash />
                            </button>
                        </li>
                    ))}
                </ul>
            </main>

            <footer>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default App;
