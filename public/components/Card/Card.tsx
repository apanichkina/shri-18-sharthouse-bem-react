import React from 'react';
import {cn} from '@bem-react/classname';
import { ModBody } from '@bem-react/core';
import {Icon} from '../Icon/Icon';
import {Chart} from '../Chart/Chart';
import {Music} from '../Music/Music';
import {prepareDataForChart} from '../../utils/chart';
import './Card.css';

const cnCard = cn('Card');

export interface ICardProps {
  className?: string;
  mode: 'info' | 'critical';
  date: string;
  title: string;
  source: string;
  description: string | null;
  data?: any;
  icon: string;
}

const getData = (data: any) => {
  if (!data) {
    return null;
  }

  if (data.albumcover) {
    return (
      <Music
        artist={data.artist}
        name={data.track.name}
        length={data.track.length}
        volume={data.volume}
        albumcover={data.albumcover}
      />
    );
  }

  if (data.type === 'graph') {
    const parsedData: Chart.ChartDataSets[] = prepareDataForChart(data.values);

    return <Chart datasets={parsedData} width={200} height={200}/>;
  }
  return (
    JSON.stringify(data)
  );
};

const getBody = (props: ICardProps) => {
  return (
    <div className={cnCard('Body')}>
      <div className={cnCard('Description')}>
        {props.description}
      </div>
      <div className={cnCard('Data')}>
        {getData(props.data)}
      </div>
    </div>
  );
};

export const CardComponent: ModBody<ICardProps> = (Base, props) => {
  const needBody = props.description || props.data;
  const isCritical = props.mode === 'critical';

  return (
    <div className={cnCard(null, [props.className])}>
      <div className={cnCard('Header', {mode: props.mode})}>
        <div className={cnCard('TitleBlock')}>
          <Icon
            name={props.icon}
            size="m"
            white={isCritical}
            alt={props.icon}
            className={cnCard('Icon')}
          />
          <div className={cnCard('Title')}>
            {props.title}
          </div>
        </div>
        <div className={cnCard('SubtitleBlock')}>
          <span className={cnCard('Source')}>
            {props.source}
          </span>
          <span className={cnCard('Time')}>
            {props.date}
          </span>
        </div>
      </div>
      {needBody ? getBody(props) : null}
    </div>
  );
};
