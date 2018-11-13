import React from 'react';
import {cn} from '@bem-react/classname';
import {PageEvents} from '../PageEvents/PageEvents';
import {Page} from '../Page/Page';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import './App.css';

const cnApp = cn('App');
const LINKS_HEADER = [
  {dataPage: 'events', text: 'События'},
  {dataPage: 'video', text: 'Видео'},
  {dataPage: 'tools', text: 'Устройства'},
  {dataPage: 'scenarios', text: 'Сценарии'},
];

const LINKS_FOOTER = [
  {text: 'Помощь', href: '#'},
  {text: 'Обратная связь', href: '#'},
  {text: 'Разработчикам', href: '#'},
  {text: 'Условия использования', href: 'https://bit.ly/2pCJWra'},
];

export interface IAppProps {
  className?: string;
  inBody: boolean
}

export const App: React.SFC<IAppProps> = (props) => (
  <div className={cnApp({inBody: props.inBody})}>
    <Header className={cnApp('Header')} links={LINKS_HEADER}/>
    <Page title="Events" className={cnApp('Content')}>
      <PageEvents/>
    </Page>
    <Footer className={cnApp('Footer')} links={LINKS_FOOTER}/>
  </div>
);
