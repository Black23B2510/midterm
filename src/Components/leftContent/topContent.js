import React, { Component } from 'react';

class TopContent extends Component {
  render() {
    return (
      <div className='left-content'>
        <img className='left-img' src={"./"+this.props.image}/>
        <h3>{this.props.title}</h3>
        <div className='times'>
          <span>{this.props.times}</span>
          <span><i className="i fa-solid fa-comment"/> {this.props.comment.length}</span>
        </div>
      </div> 
    );
  }
}

export default TopContent;

