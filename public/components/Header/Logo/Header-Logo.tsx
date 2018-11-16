import React from 'react';
import {cn} from '@bem-react/classname';
import './Header-Logo.css';

const cnHeader = cn('Header');

export const HeaderLogo: React.SFC = () => (
  <span className={cnHeader('Logo')}>
    <a href="#" target="_blank"/>
  </span>
);
