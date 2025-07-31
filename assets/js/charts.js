document.addEventListener('DOMContentLoaded', function() {
  // chart initialization code here
    const ctx = document.getElementById("mission-chart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2023", "2024", "2025"],
        datasets: [
          {
            label: "CO₂-Einsparung (Tonnen)",
            data: [500, 800, 1200],
            backgroundColor: ["#07A119", "#07A119", "#07A119"],
            borderColor: ["#058614", "#058614", "#058614"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: { duration: 2000, easing: "easeOutBounce" },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "CO₂-Einsparung (t)" },
          },
          x: { title: { display: true, text: "Jahr" } },
        },
        plugins: { legend: { display: false } },
      },
    });

    
// Get the canvas element
const ctxWaste = document.getElementById('chart-container-waste').getContext('2d');

// Create the bar chart
new Chart(ctxWaste, {
  type: 'bar',
  data: {
    labels: ['Lebensmittel', 'Transport', 'Verpackung', 'Energie'],
    datasets: [{
      label: 'CO₂-Emissionen (kg CO₂e)',
      data: [120, 80, 50, 30],
      backgroundColor: [
        'rgba(34, 197, 94, 0.6)',  // Green
        'rgba(74, 222, 128, 0.6)',
        'rgba(134, 239, 172, 0.6)',
        'rgba(187, 247, 208, 0.6)'
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(74, 222, 128, 1)',
        'rgba(134, 239, 172, 1)',
        'rgba(187, 247, 208, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow the chart to fill the canvas height
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'CO₂-Fußabdruck nach Kategorie',
        color: 'white',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    }
  }
});
});

