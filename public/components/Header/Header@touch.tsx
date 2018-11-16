import React from 'react';
import {cn} from '@bem-react/classname';
import {HeaderLogo} from './Logo/Header-Logo';
import './Header@touch.css';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}

export const HeaderTouch: React.SFC<IHeaderProps> = (props) => (
  <header className={cnHeader('Touch', [props.className])}>
    <HeaderLogo/>
  </header>
);
