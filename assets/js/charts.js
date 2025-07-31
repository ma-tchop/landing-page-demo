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

    
});