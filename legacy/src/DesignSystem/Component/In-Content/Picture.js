import React, {Component} from 'react';
import '../../CSS/Picture.css';

class Picture extends Component {

	render(){
		return (
            <div className="Picture" style={this.props.Picture}/>
		);
	}
}

export default Picture;
