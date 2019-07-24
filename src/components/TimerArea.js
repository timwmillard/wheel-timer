import React from "react";

class TimerArea extends React.Component {

    constructor(props) {
        super(props);

        this.startTime = Date.now();
        this.state = {timerValue: 0};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let newTime = Date.now() - this.startTime;
        this.setState( {
            timerValue: newTime
        });
    }

    render() {
        return (
            <div id="timer-area">
                <div id="flow-rate">
                    <span id="flow-rate-value">0.0</span>
                    <span id="flow-rate-units">ML/d</span>
                </div>
                <div id="timer">
                    <span id="timer-value">{parseFloat(this.state.timerValue / 1000).toFixed(1)}</span>
                    <span id="timer-units">sec</span>
                </div>
            </div>
        );
    }

}

export default TimerArea;
