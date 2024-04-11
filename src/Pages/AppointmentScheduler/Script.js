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

    // Rest of the component code...

    return (
        <div className="appointment-scheduler">
            {/* Remaining JSX content */}
        </div>
    );
}

export default AppointmentScheduler;

