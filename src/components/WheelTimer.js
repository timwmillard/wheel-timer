import React from "react";

import WheelTypeMenu from "./WheelTypeMenu";
import TimerPad from "./TimerPad";

class WheelTimer extends React.Component {

    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.handleWheelTypeChange = this.handleWheelTypeChange.bind(this);
        this.handleTimePadClick = this.handleTimePadClick.bind(this);
        this.state = {flowRate: 1.0,
                      timer: 0.0,
                      wheelType: 'large',
                      isRunning: false }

        this.startTime = 0;
    }

    startTimer() {
        this.startTime = Date.now();
        this.timerID = setInterval(this.tick, 100);
    }

    stopTimer() {
        clearInterval(this.timerID);
    }

    resetTimer() {
        this.stopTimer();
        this.setState({
            flowRate: 0.0,
            timer: 0.0,
            isRunning: false });
    }

    tick() {
        let timer = Date.now() - this.startTime;
        this.setState({
            timer: timer
          });
    }

    handleWheelTypeChange(type) {
        this.setState({wheelType: type});
    }

    handleTimePadClick() {
        if(this.state.isRunning) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
        this.setState({isRunning: !this.state.isRunning});
    }

    displayFlowRate() {

        if(this.state.isRunning) return "0.0";
        const flowRate = timeToFlow(this.state.wheelType, this.state.timer);
        // if (flow < wheel.min || flow > wheel.max)
        //   return "Error";
        // else
          return parseFloat(flowRate).toFixed(1);
      }

    render() {
        return (
            <div>
                <WheelTypeMenu onChange={this.handleWheelTypeChange} />
                <TimerPad flowRate={this.displayFlowRate()}
                          timer={parseFloat(this.state.timer / 1000).toFixed(1)}
                          onClick={this.handleTimePadClick} />
                <ResetButton onClick={this.resetTimer} />
            </div>
        );
    }
}

export default WheelTimer;

function timeToFlow(type, time) {

    const wheels = {
            small: {volumePerRevolution: 352.4, min: 1, max: 9},
            large: {volumePerRevolution: 822.3, min: 1, max: 20},
            long: {volumePerRevolution: 840.0, min: 1, max: 24}
            };
    const litresPerSecToMegalitresPerDay = 0.0864;

    const timePerRevolution = time;
    const wheel = wheels[type];   

    if (!timePerRevolution) return 0.0;

    let flow = wheel.volumePerRevolution / timePerRevolution * litresPerSecToMegalitresPerDay * 1000;

    return flow;
}


function ResetButton(props) {
    return (
        <button id="reset" onClick={props.onClick}>Reset</button>
    );
}
