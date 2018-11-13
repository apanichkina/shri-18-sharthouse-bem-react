import React from 'react';
import {cn} from '@bem-react/classname';
import {Link, ILinkProps} from '../Link/Link';
import './Footer.css';

const cnFooter = cn('Footer');
const COPYRIGHT =  {text: 'ООО «Яндекс»', href: 'https://ya.ru', prefix: '© 2001–2017'};

interface ILink extends ILinkProps {
  prefix?: string;
}

const getLinks = (links: ILink[]) => {
  return links.map((el, i) => (
    <span className={cnFooter('Link')} key={i}>
      {el.prefix && el.prefix}
      &nbsp;
      <Link href={el.href} text={el.text} className={cnFooter('Text')}/>
    </span>
  ));
};

export interface IFooterProps {
  className?: string;
  links: ILink[]
}

export const Footer: React.SFC<IFooterProps> = (props) => (
  <footer className={cnFooter(null,  [cnFooter('Text'), props.className])}>
    <div className={cnFooter('Content')}>
      <div className={cnFooter('Items', {side: 'left'})}>
        {getLinks(props.links)}
      </div>
      <div className={cnFooter('Items', {side: 'right'})}>
        {getLinks([COPYRIGHT])}
      </div>
    </div>
  </footer>
);
