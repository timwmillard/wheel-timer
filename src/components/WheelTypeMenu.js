import React from "react";

class WheelTypeMenu extends React.Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {activeItem: 'large'};
    }

    handleOnClick(e) {
        this.props.onChange(e.target.id);
        this.setState({activeItem: e.target.id});
    }

    getClassName(type) {
 
        if (this.state.activeItem === type) {
            return "active-type";
        } else {
            return "";
        }
    }

    render() {
        const wheelTypes = [
            {id:"small", name: "Small"},
            {id:"large", name: "Large"},
            {id:"long", name: "Long"}
        ];

        const wheelTypeConponent = wheelTypes.map((item, index) => 
                    <li key={index}>
                        <a id={item.id}
                        href={'#'+item.id}
                        onClick={this.handleOnClick}
                        className={this.getClassName(item.id)}>
                            {item.name}
                        </a>
                    </li>
                    );

        return (
            <div id="wheel-type">
                <ul>
                    {wheelTypeConponent}
                </ul>
            </div>

        );
    }
}

export default WheelTypeMenu;
