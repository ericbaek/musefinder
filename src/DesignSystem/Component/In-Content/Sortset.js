import React, {Component} from 'react';
import '../../CSS/Sortset.css';

class Sortset extends Component {

	render(){
		return (
            <div className="Sortset">{this.props.Title}</div>
		);
	}
}

export default Sortset;
