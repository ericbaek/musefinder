import React, {Component} from 'react';
import '../../CSS/Alert.css';

class Alert extends Component {

	render(){
		return (
            <div className="Alert">
                <div className="Left">
                    <div className="Icon">{this.props.Icon}</div>
                    <div className="Title">{this.props.Title}</div>
                </div>
                <div className="Paragraph">{this.props.Paragraph}</div>
            </div>
		);
	}
}

export default Alert;
