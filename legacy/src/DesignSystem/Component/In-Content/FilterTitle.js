import React, {Component} from 'react';
import '../../CSS/FilterTitle.css';

class FilterTitle extends Component {
	render(){
		return (
            <div className="FilterTitle">
                <div className="Title">{this.props.Title}</div>
            </div>
		);
	}
}

export default FilterTitle;
