import Chart from "react-apexcharts";

export default function OrderStatusDonut({ data = [] }) {
  const options = {
    chart: {
      type: "donut",
      height: 296,
      width: "100%",
    },
    labels: data.map((d) => d.label),
    colors: data.map((d) => d.color),
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetY: 20,
      formatter: (seriesName, opts) => `
        <span class="legend-row">
          <span class="legend-name">${seriesName}</span>
          <span class="legend-value">
            ${opts.w.globals.series[opts.seriesIndex]}
          </span>
        </span>
      `,
    },
    plotOptions: {
      pie: {
        donut: { size: "65%" },
      },
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    tooltip: { enabled: false },
  };

  const series = data.map((d) => d.value);

  return <Chart options={options} series={series} type="donut" height={296} />;
}
