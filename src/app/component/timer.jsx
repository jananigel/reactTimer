import React from 'react';
import ReactDOM from 'react-dom';

import './timer.css'

class TimerClock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clockTime: new Date(),
            isPause: false
        };

        this.onPauseClick = this.onPauseClick.bind(this);
        this.timeStart();
    };

    onPauseClick($event) {
        this.setState({
            isPause: !this.state.isPause
        });
        if(this.clockTimer == null) {
            this.timeStart();
        } else {
            clearInterval(this.clockTimer);
            this.clockTimer = null;
        };
    };

    timeStart() {
        this.clockTimer = setInterval(() => {
            this.setState({
                clockTime: new Date()
            });
        }, 1000);
    };

    render() {
        return(
            <>
                <div className="clock">
                    <h2>{this.state.clockTime.toLocaleTimeString()}</h2>

                    <div className="control">
                        <button onClick={this.onPauseClick} className={this.state.isPause ? 'continue' : 'pause'}></button>
                    </div>
                </div>
            </>
        );
    };
};

export default TimerClock;