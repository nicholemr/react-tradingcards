"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.word} {this.props.word_two}</p>
        <a href={this.props.url}>link to cards</a>
        <p><img src={this.props.image} /></p>
      </div>
      
    );
  }
}

ReactDOM.render(<Homepage word="Hey " word_two="There " url="/cards" 
    image="/static/img/balloonicorn.jpg"/>, document.querySelector('#app'));