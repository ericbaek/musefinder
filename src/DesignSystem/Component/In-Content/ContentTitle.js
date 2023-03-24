import React, {Component} from 'react';

class ContentTitle extends Component {
	render(){
		return (
            <div>
                <div class="">{this.props.Title}</div>
                <div class="">{this.props.Menu}</div>
            </div>
		);
	}
}

export default ContentTitle;