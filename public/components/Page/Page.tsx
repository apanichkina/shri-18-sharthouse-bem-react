import React from 'react';
import {cn} from '@bem-react/classname';
import './Page.css';

const cnPage = cn('Page');

export interface IPageEventsProps {
  className?: string;
  title?: string
}

export const Page: React.SFC<IPageEventsProps> = (props) => (
  <div className={cnPage(null, [props.className])}>
    {props.title ?  <div className={cnPage('Title')}>{props.title}</div> : null}
    <div>
      {props.children}
    </div>
  </div>
);
