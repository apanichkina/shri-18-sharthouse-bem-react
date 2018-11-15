import React from 'react';
import {cn} from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import {PageEvents} from '../PageEvents/PageEvents';
import {Page} from '../Page/Page';
import {Footer} from '../Footer/Footer';
import {IHeaderProps} from '../Header/Header@desktop';
import './App.css';

const cnApp = cn('App');
const cnHeader = cn('Header');

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
  inBody: boolean;
}

export const App: React.SFC<IAppProps> = (props) => (
  <RegistryConsumer>
    {(registries) => {
      const registry = registries[cnApp()];

      const Header = registry.get<IHeaderProps>(cnHeader());

      return(
        <div className={cnApp({inBody: props.inBody})}>
          <Header className={cnApp('Header')} links={LINKS_HEADER}/>
          <Page title="Лента событий" className={cnApp('Content')}>
            <PageEvents/>
          </Page>
          <Footer className={cnApp('Footer')} links={LINKS_FOOTER}/>
        </div>
      );
    }}
  </RegistryConsumer>
);
