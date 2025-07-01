// DOM elements
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');
const daysResult = document.getElementById('days-result');
const resultDescription = document.querySelector('.result-description');
const additionalInfo = document.getElementById('additional-info');

// Initialize the app
function init() {
    // Set default dates (today and tomorrow)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    startDateInput.value = formatDateForInput(today);
    endDateInput.value = formatDateForInput(tomorrow);
    
    // Add event listeners
    startDateInput.addEventListener('change', calculateDays);
    endDateInput.addEventListener('change', calculateDays);
    
    // Calculate initial result
    calculateDays();
}

// Format date for input field (YYYY-MM-DD)
function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

// Format date for display
function formatDateForDisplay(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Calculate days between two dates
function calculateDays() {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    
    if (!startDate || !endDate) {
        showDefaultState();
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Validate dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        showError('Invalid date format');
        return;
    }
    
    // Calculate difference in milliseconds
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Display result
    displayResult(daysDiff, start, end);
}

// Display the calculated result
function displayResult(days, startDate, endDate) {
    // Add animation class
    daysResult.classList.add('updated');
    
    // Update the main result
    if (days === 0) {
        daysResult.textContent = '0';
        resultDescription.textContent = 'Same day selected';
    } else if (days > 0) {
        daysResult.textContent = days;
        resultDescription.textContent = `days from ${formatDateForDisplay(startDate)} to ${formatDateForDisplay(endDate)}`;
    } else {
        daysResult.textContent = Math.abs(days);
        resultDescription.textContent = `days from ${formatDateForDisplay(endDate)} to ${formatDateForDisplay(startDate)}`;
    }
    
    // Remove animation class after animation completes
    setTimeout(() => {
        daysResult.classList.remove('updated');
    }, 600);
    
    // Show additional information
    showAdditionalInfo(days, startDate, endDate);
}

// Show additional information about the date range
function showAdditionalInfo(days, startDate, endDate) {
    const additionalInfoHTML = [];
    
    // Business days calculation (excluding weekends)
    const businessDays = calculateBusinessDays(startDate, endDate);
    additionalInfoHTML.push(`
        <div class="info-card">
            <h4>Business Days</h4>
            <p>${businessDays} working days (excluding weekends)</p>
        </div>
    `);
    
    // Weeks and remaining days
    const weeks = Math.floor(Math.abs(days) / 7);
    const remainingDays = Math.abs(days) % 7;
    additionalInfoHTML.push(`
        <div class="info-card">
            <h4>Time Breakdown</h4>
            <p>${weeks} weeks, ${remainingDays} days</p>
        </div>
    `);
    
    // Season information
    const season = getSeason(startDate);
    additionalInfoHTML.push(`
        <div class="info-card">
            <h4>Season</h4>
            <p>${season} (${startDate.getFullYear()})</p>
        </div>
    `);
    
    // Day of week information
    const startDayOfWeek = startDate.toLocaleDateString('en-US', { weekday: 'long' });
    const endDayOfWeek = endDate.toLocaleDateString('en-US', { weekday: 'long' });
    additionalInfoHTML.push(`
        <div class="info-card">
            <h4>Days of Week</h4>
            <p>${startDayOfWeek} to ${endDayOfWeek}</p>
        </div>
    `);
    
    additionalInfo.innerHTML = additionalInfoHTML.join('');
}

// Calculate business days (excluding weekends)
function calculateBusinessDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Ensure start is before end
    if (start > end) {
        [start, end] = [end, start];
    }
    
    let businessDays = 0;
    const current = new Date(start);
    
    while (current <= end) {
        const dayOfWeek = current.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
            businessDays++;
        }
        current.setDate(current.getDate() + 1);
    }
    
    return businessDays;
}

// Get season based on date
function getSeason(date) {
    const month = date.getMonth();
    const day = date.getDate();
    
    if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day <= 20)) {
        return 'Spring';
    } else if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day <= 22)) {
        return 'Summer';
    } else if ((month === 8 && day >= 23) || month === 9 || month === 10 || (month === 11 && day <= 20)) {
        return 'Fall';
    } else {
        return 'Winter';
    }
}

// Show default state
function showDefaultState() {
    daysResult.textContent = '--';
    resultDescription.textContent = 'Select two dates to see the calculation';
    additionalInfo.innerHTML = '';
}

// Show error state
function showError(message) {
    daysResult.textContent = 'Error';
    resultDescription.textContent = message;
    additionalInfo.innerHTML = `
        <div class="info-card error">
            <h4>Error</h4>
            <p>Please select valid dates</p>
        </div>
    `;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 