import React, {Component} from 'react';
import '../../CSS/Card.css';

class Card extends Component {

	render(){
		return (
            <div className={this.props.Class} style={this.props.Background}>
                <div className="Left">
                    <div className="Title">{this.props.Title}</div>
                    <div className="Paragraph">{this.props.Paragraph}</div>
                    <div className="Paragraph2">{this.props.Paragraph2}</div>
                </div>
                
                <div className="AccentColor" style={this.props.Accent}>
                    <div className="AccentText">{this.props.AccentText}</div>
                </div>
            </div>
		);
	}
}

export default Card;