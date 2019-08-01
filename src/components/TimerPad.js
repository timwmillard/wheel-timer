import React from "react";

class TimerPad extends React.Component {

    render() {

        return (
            <div id="timer-area" onClick={this.props.onClick}>
            <div id="flow-rate">
                <span id="flow-rate-value">{this.props.flowRate}</span>
                <span id="flow-rate-units">ML/d</span>
            </div>
            <div id="timer">
                <span id="timer-value">{this.props.timer}</span>
                <span id="timer-units">sec</span>
            </div>
        </div>
        );

    }
}

export default TimerPad;
