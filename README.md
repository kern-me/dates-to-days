# 📅 Dates to Days Calculator

A webapp that calculates the number of days between two dates in real-time. Built with vanilla HTML, CSS, and JavaScript - no frameworks or libraries required.

## ✨ Features

- **Real-time calculation**: See results instantly as you change dates
- **Additional information**: 
  - Business days (excluding weekends)
  - Time breakdown (weeks and days)
  - Season information
  - Day of the week details
- **Mobile responsive**: Works on all device sizes
- **No dependencies**: Pure vanilla JavaScript, HTML, and CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode (with Live Reload)
```bash
npm run dev
```
This will:
- Start a local development server on port 3000
- Open the app in your default browser
- Automatically reload when you make changes to files

#### Production Mode
```bash
npm start
```
This will start the server and open the app in your browser.

#### Simple Server (without auto-open)
```bash
npm run serve
```

### Manual Setup (Alternative)
If you prefer not to use Node.js, you can simply:
1. Open `index.html` directly in your browser
2. Or use any local server of your choice

## 🎯 How to Use

1. **Select Start Date**: Click on the first date picker and choose your start date
2. **Select End Date**: Click on the second date picker and choose your end date
3. **View Results**: The calculation happens automatically and displays:
   - Total number of days between the dates
   - Business days (excluding weekends)
   - Time breakdown in weeks and days
   - Season information
   - Day of the week details

## 🛠️ Technical Details

### File Structure
```
dates-to-days/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── package.json        # Node.js configuration
└── README.md           # This file
```

### Technologies Used
- **HTML5**: Semantic markup and date inputs
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No frameworks or libraries
- **Live Server**: Development server with auto-reload

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- All modern browsers with ES6 support

## 🎨 Features in Detail

### Real-time Calculation
- Updates instantly when dates are changed
- Handles edge cases (same day, invalid dates)
- Smooth animations for result updates

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly date pickers

### Additional Information Cards
- **Business Days**: Calculates working days excluding weekends
- **Time Breakdown**: Shows weeks and remaining days
- **Season**: Determines the season based on the start date
- **Days of Week**: Shows the day names for both dates

## 🔧 Customization

The app is built with vanilla technologies, making it easy to customize:

- **Colors**: Modify the CSS variables in `styles.css`
- **Layout**: Adjust the grid and flexbox properties
- **Functionality**: Add new calculations in `script.js`
- **Styling**: All styles are in one CSS file for easy modification

## 📱 Mobile Experience

The app is fully responsive and provides an excellent mobile experience:
- Touch-friendly date pickers
- Optimized layout for small screens
- Fast loading and smooth interactions

---

**Enjoy calculating your dates! 🎉**
