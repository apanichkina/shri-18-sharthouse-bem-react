import React from 'react';
import {cn} from '@bem-react/classname';
import {CardComposed} from '../Card';
import eventData from '../../mocks/events.json';
import {ICardContent} from '../../interfaces/card';
import './PageEvents.css';
import {Music} from '../Music/Music';
import {Chart} from '../Chart/Chart';
import {prepareDataForChart} from '../../utils/chart';

const cnPageEvents = cn('PageEvents');

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

const events = eventData.events as ICardContent[];
const cards = events.map((el, i) => (
  <CardComposed
    key={i}
    title={el.title}
    mode={el.type}
    description={el.description}
    date={el.time}
    size={el.size}
    source={el.source}
    className={cnPageEvents('ContentItem')}
    icon={el.icon}
  >
    {getData(el.data)}
  </CardComposed>
));

export interface IPageEventsProps {
  className?: string;
}

export const PageEvents: React.SFC<IPageEventsProps> = (props) => (
  <div className={cnPageEvents()}>
    {cards}
  </div>
);
