import Chart from "react-apexcharts";

export default function SparklineChart({ data = [], color = "#0EA5E9", className = "" }) {
  const options = {
    chart: {
      type: "line",
      height: 25,
      width: 70,
      sparkline: { enabled: true },
      animations: { enabled: false },
    },
    stroke: {
      curve: "straight",
      width: 1.3,
      colors: [color],
    },
    tooltip: { enabled: false },
    markers: { size: 0 },
    grid: { show: false },
    xaxis: { labels: { show: false } },
    yaxis: { show: false },
  };

  const series = [{ data }];

  return (
    <div className={className}>
      <Chart options={options} series={series} type="line" height={25} width={70} />
    </div>
  );
}
