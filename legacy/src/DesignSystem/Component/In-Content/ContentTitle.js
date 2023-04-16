import React, {Component} from 'react';
import '../../CSS/ContentTitle.css';

class ContentTitle extends Component {
	render(){
		return (
            <div className="ContentTitle">
                <div className="Title">{this.props.Title}</div>
                <div className="Paragraph">{this.props.Paragraph}</div>
            </div>
		);
	}
}

export default ContentTitle;
