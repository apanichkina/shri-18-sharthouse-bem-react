import {cn} from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import {HeaderTouch as Header} from '../Header/Header@touch';
import {App} from './App';
import './App.css';

const cnApp = cn('App');
const cnHeader = cn('Header');
const registry = new Registry({ id: cnApp() });
registry.set(cnHeader(), Header);

export const AppTouch = withRegistry(registry)(App);
