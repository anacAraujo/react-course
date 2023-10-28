import React from 'react';
import { Line } from 'react-chartjs-2';

const ConsumoChart = ({ data }) => {
  const chartData = {
    labels: data.map((item, index) => index + 1),
    datasets: [
      {
        label: 'Consumo (Km/L)',
        data: data.map((item) => item.quilometros / item.combustivel),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ConsumoChart;
