import './styles.css';

import React, { useState, useEffect } from 'react';

function AppointmentScheduler() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [chatMessage, setChatMessage] = useState('');

    useEffect(() => {
        populateDateDropdown();
        populateTimeDropdown();
    }, []); 

    
    function populateDateDropdown() {
        const dropdown = document.getElementById('datepicker');
        const startDate = new Date(2024, 3, 12); 
        const endDate = new Date(2024, 3, 30); 
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const option = document.createElement('option');
            const dayOfWeek = days[date.getDay()];
            const dateString = `${date.toDateString()} (${dayOfWeek})`;
            option.textContent = dateString;
            option.value = date.toISOString(); 
            dropdown.appendChild(option);
        }
    }

    
    function populateTimeDropdown() {
        const dropdown = document.getElementById('time-dropdown');
        const startTime = new Date();
        startTime.setHours(13, 0, 0); 

        for (let i = 0; i < 8; i++) {
            const option = document.createElement('option');
            const timeString = startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
            option.textContent = timeString;
            option.value = timeString;
            dropdown.appendChild(option);
            startTime.setHours(startTime.getHours() + 1); // Increment time by 1 hour
        }
    }

    

    return (
        <div className="appointment-scheduler">
        </div>
    );
}

export default AppointmentScheduler;
