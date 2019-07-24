import React from "react";

function WheelTypeSelector() {
    return (
        <div id="wheel-type">
            <ul>
                <li><a id="type-small" href="#small">Small</a></li>
                <li><a id="type-large" href="#large" className="active-type">Large</a></li>
                <li><a id="type-long" href="#long">Long</a></li>
            </ul>
        </div>

    );
}

export default WheelTypeSelector;
