import { Component } from "react";

class Nav extends Component {

    render() {
        return (
            <div className={this.props.className}>
                 <h2 className="nav-title">{this.props.text}</h2>
            </div>
        );
    }
}

export default Nav;