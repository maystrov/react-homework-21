import { Component } from "react";

class Main extends Component {

    render() {
        return (
            <div className={this.props.className}>
                {this.props.text}
            </div>
        );
    }
}

export default Main;