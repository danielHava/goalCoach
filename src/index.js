import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart, faCalendarCheck, faRocket, faSatellite } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faEnvelope, faCalendarCheck, faRocket, faSatellite );

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();