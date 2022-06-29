import React, { Component } from 'react';

class BottomContent extends Component {
    render() {
        return (
            <div className='right-content'>
              <div>
                <img className='right-img' src={"./"+this.props.image}/>
              </div>
              <div >
                <h3>{this.props.title}</h3>
                <div className='times'>
                  <span>{this.props.times}</span>
                  <span><i className="i fa-solid fa-comment"/> {this.props.comment.length}</span>
                </div>
              </div>
            </div>
        );
    }
}

export default BottomContent;