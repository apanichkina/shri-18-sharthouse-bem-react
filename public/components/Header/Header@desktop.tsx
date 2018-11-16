import React from 'react';
import {cn} from '@bem-react/classname';
import {HeaderLogo} from './Logo/Header-Logo';
import './Header@desktop.css';

const cnHeader = cn('Header');

interface INavData {
  dataPage: string;
  text: string;
}

const getLinks = (links: INavData[]) => {
  return links.map((el, i) => (
    <li className={cnHeader('NavTab')} data-page={el.dataPage} key={i}>
      {el.text}
    </li>
  ));
};

export interface IHeaderProps {
  className?: string;
  links: INavData[];
}

export const HeaderDesktop: React.SFC<IHeaderProps> = (props) => (
  <header className={cnHeader('Desktop', [props.className])}>
    <HeaderLogo/>
    <nav className={cnHeader('Nav')}>
      <ul className={cnHeader('HavContent')}>
        {getLinks(props.links)}
      </ul>
    </nav>
  </header>
);
