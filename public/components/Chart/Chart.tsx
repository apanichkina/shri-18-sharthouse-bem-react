import React from 'react';
import {cn} from '@bem-react/classname';
import {Line} from 'react-chartjs-2';

import './Chart.css';

const cnChart = cn('Chart');

export interface IChartProps {
  className?: string;
  width: number;
  height: number;
  datasets: any;
}

const options = {
  responsive: true,
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        displayFormats: {
          minute: 'h:mm',
        },
      },
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
  },
};

export const Chart: React.SFC<IChartProps> = (props) => {
  const data = {
    datasets: props.datasets,
  };

  return (
    <div className={cnChart(null, [props.className])}>
      <Line
        width={props.width}
        height={props.height}
        data={data}
        options={options}
      />
    </div>
  );
};
