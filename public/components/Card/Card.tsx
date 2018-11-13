import React from 'react';
import {cn} from '@bem-react/classname';
// import {withBemMod} from '@bem-react/core';
import {Icon} from '../Icon/Icon';
import './Card.css';

const cnCard = cn('Card');

export interface ICardProps {
  className?: string;
  mode: 'info' | 'critical';
  size: 's' | 'm' | 'l';
  date: string;
  title: string;
  source: string;
  description: string | null;
  data?: any
  icon: string
}

const getBody = (props: ICardProps) => {
  return (
    <div className={cnCard('Body')}>
      <div className={cnCard('Description')}>
        {props.description}
      </div>
      <div className={cnCard('Data')}>
        {props.data}
      </div>
    </div>
  );
};

export const CardComponent: React.SFC<ICardProps> = (props) => {
  const needBody = props.description || props.data;
  const isCritical = props.mode === 'critical';

  return (
    <div className={cnCard({size: props.size}, [props.className])}>
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

// export const CardComponent = withBemMod(cnCard(), {size: 'l'})(Card);
