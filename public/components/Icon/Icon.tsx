import React from 'react';
import {cn} from '@bem-react/classname';
import getIconSrc from './source';
import './Icon.css';

const cnIcon = cn('Icon');

export interface IIconProps {
  className?: string;
  name: string;
  size: 's' | 'm';
  white: boolean;
  alt: string;
}

export const Icon: React.SFC<IIconProps> = (props) => {
  const iconSrc =  getIconSrc(props.name, props.white);

  return (
    <img
      className={cnIcon({size: props.size}, [props.className])}
      src={iconSrc}
      alt={props.alt}
    />
  );
};
