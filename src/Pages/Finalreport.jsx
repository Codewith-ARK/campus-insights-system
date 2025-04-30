import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";

const Finalreport = () => {
  useEffect(() => {
    const generateReport = async () => {
      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add the logo at the top center
      const logoPath = "/path-to-your-logo.png"; // Replace with the actual logo path
      doc.addImage(logoPath, "PNG", 80, 10, 50, 50); // Adjust logo size and position

      // Title (bold)
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text("Campus Insights System", 105, 70, { align: "center" });

      // Subtitle
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text(
        "A comprehensive report of campus activity, events, and insights.",
        105,
        85,
        { align: "center" }
      );

      // Create and Add Bar Chart to the PDF
      const barChartCanvas = document.createElement("canvas");
      barChartCanvas.width = 400;
      barChartCanvas.height = 200;
      const barChart = new Chart(barChartCanvas, {
        type: "bar",
        data: {
          labels: ["Math", "Science", "Literature", "History", "Art"],
          datasets: [
            {
              label: "Subject Popularity",
              data: [60, 75, 80, 45, 90],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            datalabels: {
              color: "black",
              font: { weight: "bold" },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Convert chart to image and add to PDF
      const barChartImage = barChartCanvas.toDataURL("image/png");
      doc.addImage(barChartImage, "PNG", 20, 100, 170, 90); // Adjust position and size

      // Create and Add Gantt Chart to the PDF (for demonstration)
      const ganttChartCanvas = document.createElement("canvas");
      ganttChartCanvas.width = 400;
      ganttChartCanvas.height = 200;
      const ganttChart = new Chart(ganttChartCanvas, {
        type: "horizontalBar",
        data: {
          labels: ["Task 1", "Task 2", "Task 3", "Task 4"],
          datasets: [
            {
              label: "Completion Status",
              data: [75, 50, 100, 30],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              min: 0,
              max: 100,
            },
          },
        },
      });

      // Convert Gantt chart to image and add to PDF
      const ganttChartImage = ganttChartCanvas.toDataURL("image/png");
      doc.addImage(ganttChartImage, "PNG", 20, 200, 170, 90); // Adjust position and size

      // Finalize PDF download
      doc.save("campus-insights-report.pdf");
    };

    generateReport();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition"
      >
        Generate Report
      </button>
    </div>
  );
};

export default Finalreport;