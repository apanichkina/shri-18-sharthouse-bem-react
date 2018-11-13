import React from 'react';
import {cn} from '@bem-react/classname';
import './Link.css';

const cnLink = cn('Link');

export interface ILinkProps {
  className?: string
  href: string;
  text: string;
}

export const Link: React.SFC<ILinkProps> = (props) => (
  <a className={cnLink(null, [props.className])} href={props.href} target="_blank">
    {props.text}
  </a>
);
