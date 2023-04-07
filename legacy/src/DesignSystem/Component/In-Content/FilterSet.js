import React, { Component } from 'react';
import '../../CSS/FilterSet.css';

class FilterSet extends Component {
  handleClick = () => {
    this.props.onClick(this.props.Title);
  };

  render() {
    return (
      <div className="FilterSet" onClick={this.handleClick}>
        <div className="FilterSet-Title">{this.props.Title}</div>
      </div>
    );
  }
}

export default FilterSet;




// import React, {Component} from 'react';
// import '../../CSS/FilterSet.css';

// class FilterSet extends Component {

// 	render(){
// 		return (
//             <div className="FilterSet" onClick={this.props.onClick}>{this.props.Title}</div>
// 		);
// 	}
// }

// export default FilterSet;
