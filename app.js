class App extends React.Component {
  state = {
    text: ""
  };

  getText = () => {
    const letter = "A";
    this.setState({
      text: this.state.text + letter
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getText}>Add A</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
