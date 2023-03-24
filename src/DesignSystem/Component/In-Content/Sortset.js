import React, {Component} from 'react';
import '../../CSS/Sortset.css';

class Sortset extends Component {

	render(){
		return (
            <div className="Sortset">{this.props.Text}</div>
		);
	}
}

export default Sortset;
