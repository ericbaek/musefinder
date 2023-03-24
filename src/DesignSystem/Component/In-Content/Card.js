import React, {Component} from 'react';
import '../../CSS/Card.css';

class Card extends Component {

	render(){
		return (
            <div className="Card" style={this.props.BGAccent}>
                <div className="Left">
                    <div className="Title">{this.props.Title}</div>
                    <div className="Paragraph">{this.props.Paragraph}</div>
                </div>
                
                <div className="AccentColor" style={this.props.Accent}>
                    <div className="AccentText">{this.props.AccentText}</div>
                </div>
            </div>
		);
	}
}

export default Card;
