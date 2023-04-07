import React, {Component} from 'react';
import '../../CSS/Search.css';

class Search extends Component {

	render(){
		return (
            <div className="Search">
                <div className="Left">
                    <div className="Icon">{this.props.Icon}</div>
                    <input placeholder={this.props.Placeholder}></input>
                </div>
                <div className="Icon Filter">{this.props.Filter}</div>
            </div>
		);
	}
}

export default Search;
