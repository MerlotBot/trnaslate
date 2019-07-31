import React from "react";

class App extends React.Component {
  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag de"
            onClick={() => this.onLanguageChange("german")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
