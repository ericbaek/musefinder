import React, {Component} from 'react';
import '../../CSS/Button.css';

class Button extends Component {

	render(){
		return (
            <div className="Button">
                <div className="Icon">{this.props.Icon}</div>
                <div className="Title">{this.props.Title}</div>
            </div>
		);
	}
}

export default Button;
