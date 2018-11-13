import React from 'react';
import {cn} from '@bem-react/classname';
import './Header.css';

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
  links: INavData[]
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <header className={cnHeader(null, [props.className])}>
    <span className={cnHeader('Logo')}>
      <a href="#" target="_blank"/>
    </span>
    <nav className={cnHeader('Nav')}>
      <ul className={cnHeader('HavContent')}>
        {getLinks(props.links)}
      </ul>
    </nav>
  </header>
);
