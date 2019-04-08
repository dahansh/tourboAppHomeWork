import React, { Component }  from 'react';

class Image extends Component {

  render(props) {
    console.log({props});
    return (
        <img className={this.props.className} src={this.props.src}/>
    );
  }
}
export default Image;