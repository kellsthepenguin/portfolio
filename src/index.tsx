import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Me from './pages/Me';

import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ReactFullpage
      debug
      licenseKey={'Dj1-imsosexycutiepretty'}
      anchors={['firstPage', 'secondPage']}
      sectionSelector={'.section'}

      render={comp => (
        <ReactFullpage.Wrapper>
          <Me />
        </ReactFullpage.Wrapper>
      )}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
