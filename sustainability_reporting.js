document.addEventListener('DOMContentLoaded', function() {
    // Carbon Savings Chart Data
    const carbonData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'CO₂ Saved (kg)',
                data: [600, 720, 800, 850, 900, 850, 880, 920, 950, 980, 1050, 1100],
                borderColor: '#22c55e',
                tension: 0.4,
                borderWidth: 2,
                pointBackgroundColor: '#22c55e'
            },
            {
                label: 'Target',
                data: [550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100],
                borderColor: '#94a3b8',
                borderDash: [5, 5],
                tension: 0.4
            }
        ]
    };

    // Sustainability Performance Chart Data
    const sustainabilityData = {
        labels: ['Energy', 'Water', 'Waste', 'Emissions', 'Supply Chain'],
        datasets: [
            {
                label: 'Your Score',
                data: [80, 75, 90, 75, 70],
                backgroundColor: '#22c55e'
            },
            {
                label: 'Industry Avg',
                data: [65, 58, 55, 60, 55],
                backgroundColor: '#bbf7d0'
            }
        ]
    };

    // Create Carbon Savings Chart
    const carbonChart = new Chart(document.getElementById('carbonChart'), {
        type: 'line',
        data: carbonData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1200
                }
            }
        }
    });

    // Create Sustainability Performance Chart
    const sustainabilityChart = new Chart(document.getElementById('sustainabilityChart'), {
        type: 'bar',
        data: sustainabilityData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Export button functionality
    document.querySelectorAll('.export-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Export functionality would be implemented here');
        });
    });
});