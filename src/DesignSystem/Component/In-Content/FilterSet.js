import React, {Component} from 'react';
import '../../CSS/FilterSet.css';

class FilterSet extends Component {

	render(){
		return (
            <div className="FilterSet" onClick={this.props.onClick}>{this.props.Title}</div>
		);
	}
}

export default FilterSet;
