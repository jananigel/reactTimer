
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import TimerClock from './component/timer';



// setInterval(() => {
    ReactDOM.render(<TimerClock date={new Date()} />, document.getElementById('app'));
// }, 1000);


