
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('emissions-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'CO₂ Emissions (kg per capita)',
        data: [500, 480, 450, 420, 390, 360, 330, 300],
        borderColor: '#34D399',
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top', labels: { color: '#fff' } },
        title: {
          display: true,
          text: 'Reduction in Carbon Emissions Over Time',
          color: '#fff',
          font: { size: 18 }
        }
      },
      scales: {
        x: { ticks: { color: '#fff' } },
        y: {
          beginAtZero: false,
          ticks: { color: '#fff' },
          title: { display: true, text: 'CO₂ Emissions (kg)', color: '#fff' }
        }
      }
    }
  });
});

    

