


document.querySelector("#hamburger").onclick = () => {
    document.getElementById("main-nav").classList.toggle("hidden-small");
    document.getElementById()
  };

  // Get chart elements by their IDs
const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');
const ctx3 = document.getElementById('chart3').getContext('2d');

// Create a line chart for "Average Property Prices"
const chart1 = new Chart(ctx1, {
    type: 'line', // Change to 'bar', 'pie', etc., for other types of charts
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
        datasets: [{
            label: 'Average Price ($)',
            data: [300000, 320000, 340000, 360000, 380000, 400000], // Y-axis data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Create a bar chart for "Number of Properties Sold"
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Properties Sold',
            data: [50, 60, 75, 80, 70, 90],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Create a line chart for "Price per Square Foot"
const chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Price per Square Foot ($)',
            data: [150, 160, 170, 180, 190, 200],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



//STATS
document.getElementById('calculate-best-time').addEventListener('click', function() {
  // Placeholder logic for calculation
  const bestTime = 'Based on current market trends, the best time to buy is in September.';
  document.getElementById('buy-time-result').textContent = bestTime;
});



