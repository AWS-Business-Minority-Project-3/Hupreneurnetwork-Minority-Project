import React, { useState, useEffect } from 'react';

function AppointmentScheduler() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [chatMessage, setChatMessage] = useState('');

    useEffect(() => {
        populateDateDropdown();
        populateTimeDropdown();
    }, []); // Run only once when component mounts

    // Function to populate the dropdown with dates starting from April 12, 2024
    function populateDateDropdown() {
        const dropdown = document.getElementById('datepicker');
        const startDate = new Date(2024, 3, 12); // April is 3 since it's zero-indexed
        const endDate = new Date(2024, 3, 30); // End date - April 30, 2024
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const option = document.createElement('option');
            const dayOfWeek = days[date.getDay()];
            const dateString = `${date.toDateString()} (${dayOfWeek})`;
            option.textContent = dateString;
            option.value = date.toISOString(); // Store ISO string value for easy parsing
            dropdown.appendChild(option);
        }
    }

    // Function to populate the dropdown with times starting from 1:00 PM
    function populateTimeDropdown() {
        const dropdown = document.getElementById('time-dropdown');
        const startTime = new Date();
        startTime.setHours(13, 0, 0); // Set time to 1:00 PM

        for (let i = 0; i < 8; i++) {
            const option = document.createElement('option');
            const timeString = startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            option.textContent = timeString;
            option.value = timeString;
            dropdown.appendChild(option);
            startTime.setHours(startTime.getHours() + 1); // Increment time by 1 hour
        }
    }

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment scheduled:', selectedDate, selectedTime);
        // Add logic to handle appointment submission
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        console.log('Message sent:', chatMessage);
        setChatMessage('');
        // Add logic to handle chat message submission
    };

    return (
        <div className="appointment-scheduler">
            <h1>Schedule Your Appointment</h1>
            <div className="appointments-container">
                <div className="appointment-calendar">
                    <h2>Select a Date</h2>
                    <select id="datepicker" onChange={(e) => handleDateSelect(e.target.value)}>
                        <option value="">Select a Date</option>
                    </select>
                </div>
                <div className="appointment-form">
                    <h2>Select a Time</h2>
                    <form onSubmit={handleSubmit}>
                        <select id="time-dropdown" onChange={(e) => handleTimeSelect(e.target.value)}>
                            <option value="">Select a Time</option>
                        </select>
                        <button type="submit">Schedule Appointment</button>
                    </form>
                </div>
                <div className="appointment-chat">
                    <h2>Chat with Us</h2>
                    <form onSubmit={handleChatSubmit}>
                        <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} placeholder="Type your message..." />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AppointmentScheduler;

