import ReactDOM from 'react-dom';
import React from 'react';
import {AppDesktop} from './components/App/App@desktop';
import {AppTouch} from './components/App/App@touch';
import {isMobile} from 'react-device-detect';

ReactDOM.render(
  isMobile ? <AppTouch inBody={true}/> : <AppDesktop inBody={true}/>,
  document.getElementById('root'),
);
