import React from 'react';
import {cn} from '@bem-react/classname';
import {Icon} from '../Icon/Icon';
import './Card.css';

const cnCard = cn('Card');

export interface ICardProps {
  className?: string;
  mode: 'info' | 'critical';
  date: string;
  title: string;
  source: string;
  description: string | null;
  icon: string;
}

const getBody = (desc: string | null, data: React.ReactNode) => {
  return (
    <div className={cnCard('Body')}>
      {desc && <div className={cnCard('Description')}>{desc}</div>}
      {data && <div className={cnCard('Data')}>{data}</div>}
    </div>
  );
};

export const CardComponent: React.SFC<ICardProps> = (props) => {
  const {description, children, className, mode, icon, title, source, date} = props;
  const needBody = description || children;
  const isCritical = mode === 'critical';

  return (
    <div className={cnCard(null, [className])}>
      <div className={cnCard('Header', {mode})}>
        <div className={cnCard('TitleBlock')}>
          <Icon
            name={icon}
            size="m"
            white={isCritical}
            alt={icon}
            className={cnCard('Icon')}
          />
          <div className={cnCard('Title')}>
            {title}
          </div>
        </div>
        <div className={cnCard('SubtitleBlock')}>
          <span className={cnCard('Source')}>
            {source}
          </span>
          <span className={cnCard('Time')}>
            {date}
          </span>
        </div>
      </div>
      {needBody ? getBody(description, children) : null}
    </div>
  );
};
