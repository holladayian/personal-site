import React, { Component } from 'react';


export class ImgCarousel extends Component{
  constructor(props) {
    super(props)
    this.state = {imgIndex: 1}
  }

  scroll = (direction) => {
    if (this.props.images.length <= 1) {
      return
    }
    if (direction === "right" && this.state.imgIndex < +(this.props.images.length -= 1)) {
      console.log('right not .length')
      this.setState({imgIndex: +(this.state.imgIndex += 1)})
    } else if (direction === "right" && this.state.imgIndex >= +(this.props.images.length -= 1)) {
      this.setState({imgIndex: 0})
      console.log('right end')
    } else if (direction === "left" && this.state.imgIndex > 0) {
      console.log('left not 0')
      this.setState({imgIndex: +(this.state.imgIndex -= 1)})
      console.log(this.state.imgIndex)
    } else if (direction === "left" && this.state.imgIndex <= 0) {
      console.log('left end')
      this.setState({imgIndex: +(this.props.images.length -= 1)})
      console.log(this.state.imgIndex)
    }
  }

  render() {
    return (
      <section>
        <img src={this.props.images[this.state.imgIndex].source} />
        <p>{this.props.images[this.state.imgIndex].description}</p>
        <section class="scroll-buttons">
        <button onClick={() => this.scroll("left")}>⬅️</button>
        <button onClick={() => this.scroll("right")}>➡</button>
        {/* <button onClick={console.log("props", this.props)}>⬅️</button>
        <button onClick={console.log("state", this.state)}>➡</button> */}
        </section>
      </section>
    )
  }
}