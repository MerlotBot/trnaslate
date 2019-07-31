import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  //this is how we hook up a context object to a class component
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Einreichen";
    return <button className="ui button primary">{text}</button>;
  }
}

// Alternative way to the hook up above:
// Button.contextType = LanguageContext;

export default Button;
