// Sample data
const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [{
        label: 'CO₂ Saved (kg)',
        data: [320, 420, 390, 480, 520, 610, 710, 780, 875],
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: '#2ecc71',
        borderWidth: 2,
        tension: 0.4,
        fill: true
    }]
};

const deliveryData = {
    labels: ['Electric Vans', 'Electric Bikes', 'Hybrid Vehicles', 'Traditional Vehicles'],
    datasets: [{
        data: [42, 26, 12, 20],
        backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#f1c40f',
            '#e74c3c'
        ],
        borderWidth: 0
    }]
};

const hourlyData = {
    labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [{
        label: 'CO₂ Saved (kg)',
        data: [12, 8, 5, 7, 42, 58, 50, 48, 55, 62, 44, 28],
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: '#2ecc71',
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 4,
        pointBackgroundColor: '#2ecc71'
    }]
};

// Chart options
const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.05)'
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right'
        }
    }
};

// Initialize charts
window.addEventListener('load', function() {
    // Monthly Carbon Savings Chart
    const carbonCtx = document.getElementById('carbonSavingsChart').getContext('2d');
    new Chart(carbonCtx, {
        type: 'line',
        data: monthlyData,
        options: lineOptions
    });

    // Delivery Types Chart
    const deliveryCtx = document.getElementById('deliveryTypesChart').getContext('2d');
    new Chart(deliveryCtx, {
        type: 'doughnut',
        data: deliveryData,
        options: pieOptions
    });

    // Hourly Chart
    const hourlyCtx = document.getElementById('hourlyChart').getContext('2d');
    new Chart(hourlyCtx, {
        type: 'line',
        data: hourlyData,
        options: lineOptions
    });
});

// Add interactivity to buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add refresh functionality to the refresh button
    const refreshBtn = document.querySelector('.card-lg .btn:first-child');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            // Simulate refreshing data
            const hourlyChart = Chart.getChart(document.getElementById('hourlyChart'));
            if (hourlyChart) {
                // Generate new random data
                const newData = hourlyData.datasets[0].data.map(() => {
                    return Math.floor(Math.random() * 70) + 5;
                });
                
                // Update chart with new data
                hourlyChart.data.datasets[0].data = newData;
                hourlyChart.update();
                
                // Show feedback
                this.textContent = 'Updated!';
                setTimeout(() => {
                    this.textContent = 'Refresh';
                }, 2000);
            }
        });
    }
});