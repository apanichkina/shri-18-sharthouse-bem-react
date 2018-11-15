import {cn} from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import {HeaderDesktop as Header} from '../Header/Header@desktop';
import {App} from './App';
import './App.css';

const cnApp = cn('App');
const cnHeader = cn('Header');
const registry = new Registry({ id: cnApp() });
registry.set(cnHeader(), Header);

export const AppDesktop = withRegistry(registry)(App);
