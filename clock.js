    function updateClock() {
        var now = new Date(); // Get current time
        
        // Extract hours, minutes, seconds
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        // AM / PM Logic (Optional - remove this block for 24h format)
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        // Add "0" before single digit numbers (e.g., 5 becomes 05)
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        // Combine them
        var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        
        // Get Date (Day/Month/Year)
        var dateString = now.toDateString(); 

        // Update the HTML
        document.getElementById('digital-clock').innerHTML = timeString;
        document.getElementById('date-display').innerHTML = dateString;
    }

    // Run the function once immediately, then every 1000ms (1 second)
    setInterval(updateClock, 1000);
    updateClock(); 