import React, {Component} from 'react';
import '../../CSS/Settings.css';

class Settings extends Component {

	render(){
		return (
            <div className="Settings">
                <div className="Icon">{this.props.Icon}</div>
                <div className="Title">{this.props.Title}</div>
            </div>
		);
	}
}

export default Settings;
