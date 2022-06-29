import React, { Component } from 'react';

class Advertisement extends Component {
    render() {
        return (
            <div>
                <img className='ad-img' src={"./"+this.props.image}/>
            </div>
        );
    }
}

export default Advertisement;