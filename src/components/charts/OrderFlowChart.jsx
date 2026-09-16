import Chart from "react-apexcharts";

export default function OrderFlowChart({ data = [], color = "#F04438" }) {
  const options = {
    chart: {
      type: "area",
      height: 280,
      width: "100%",
      toolbar: { show: false },
    },
    colors: [color],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    markers: { size: 0 },
    xaxis: {
      categories: data.map((d) => d.label),
      labels: {
        style: { colors: "#94A3B8", fontSize: "12px" },
      },
      axisBorder: { color: "#E2E8F0" },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 8000,
      tickAmount: 4,
      labels: {
        style: { colors: "#94A3B8", fontSize: "12px" },
      },
    },
    grid: { borderColor: "#F1F5F9" },
    tooltip: { enabled: false },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { height: 220 },
          xaxis: { labels: { style: { fontSize: "10px" } } },
        },
      },
    ],
  };

  const series = [{ name: "Orders", data: data.map((d) => d.value) }];

  return <Chart options={options} series={series} type="area" height={280} />;
}
