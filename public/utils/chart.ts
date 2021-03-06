import {ChartDataSets, ChartPoint} from 'chart.js';
import {IChartStyle, TChartData} from '../interfaces/chart';

const chartBackgroundColor: IChartStyle = {
  water: 'rgba(54, 162, 235, 0.2)',
  electricity: 'rgba(255, 206, 86, 0.2)',
  gas: 'rgba(255, 159, 64, 0.2)',
  default: 'rgba(255,99,132, 0.2)',
};

const chartBorderColor: IChartStyle = {
  water: 'rgba(54, 162, 235, 1)',
  electricity: 'rgba(255, 206, 86, 1)',
  gas: 'rgba(255, 159, 64, 1)',
  default: 'rgba(255,99,132, 1)',
};

export function prepareDataForChart(chartData: TChartData): ChartDataSets[] {
  const defaultBackgroundColor = chartBackgroundColor.default;
  const defaultBorderColor = chartBorderColor.default;

  const result: ChartDataSets[] = [];

  for (const item of chartData) {
    Object.keys(item).forEach((key) => {
      const localResult: Chart.ChartDataSets = {
        label: key,
        data: [],
        borderWidth: 1,
        borderColor: defaultBorderColor,
        backgroundColor: defaultBackgroundColor,
      };
      const data = [];

      localResult.backgroundColor = chartBackgroundColor[key] || defaultBackgroundColor;
      localResult.borderColor = chartBorderColor[key] || defaultBorderColor;

      for (const param of item[key]) {
        const point: ChartPoint = { x: new Date(Number(param[0])), y: param[1] };
        data.push(point);
      }
      localResult.data = data;
      result.push(localResult);
    });
  }

  return result;
}
