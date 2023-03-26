import React, {Component} from 'react';
import '../../CSS/Welcome.css';

class Welcome extends Component {

	render(){
		return (
            <div className="Search">
                <div className="Left">
                    <div className="Icon">{this.props.Icon}</div>
                    <input placeholder={this.props.Placeholder}></input>
                </div>
                <div className="Icon Sort">{this.props.Sort}</div>
            </div>
		);
	}
}

export default Welcome;