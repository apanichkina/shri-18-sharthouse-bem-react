import React from 'react';
import {cn} from '@bem-react/classname';
import {CardComponent} from '../Card/Card';
import eventData from '../../mocks/events.json';
import {ICardContent} from '../../interfaces/card';
import './PageEvents.css';

const cnPageEvents = cn('PageEvents');

const events = eventData.events as ICardContent[];
const cards = events.map((el, i) => (
  <CardComponent
    key={i}
    title={el.title}
    mode={el.type}
    description={el.description}
    date={el.time}
    data={JSON.stringify(el.data)}
    size={el.size}
    source={el.source}
    className={cnPageEvents('ContentItem')}
    icon={el.icon}
  />
));

export interface IPageEventsProps {
  className?: string;
}

export const PageEvents: React.SFC<IPageEventsProps> = (props) => (
  <div className={cnPageEvents()}>
    {cards}
  </div>
);
