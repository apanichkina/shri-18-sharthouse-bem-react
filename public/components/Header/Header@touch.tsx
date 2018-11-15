import React from 'react';
import {cn} from '@bem-react/classname';
import './Header@touch.css';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}

export const HeaderTouch: React.SFC<IHeaderProps> = (props) => (
  <header className={cnHeader(null, [props.className])}>
    <span className={cnHeader('Logo')}>
      <a href="#" target="_blank"/>
    </span>
  </header>
);
