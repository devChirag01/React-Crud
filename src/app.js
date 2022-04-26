import React, { Component } from "react";
import Table from "./table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitora",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
    names: [
      {
        one: "Chirag",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
      names: {
        one: "Addicted",
      },
    });
  };

  render() {
    const { characters, names } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
          names={names}
        />
      </div>
    );
  }
}

export default App;
