import React, { Component } from "react";
import Table from "./table";
import Form from "./form";

class App extends Component {
  state = {
    characters: [
      // {
      //   name: "Charlie",
      //   job: "Janitora",
      // },
      // {
      //   name: "Mac",
      //   job: "Bouncer",
      // },
      // {
      //   name: "Dee",
      //   job: "Aspring actress",
      // },
      // {
      //   name: "Dennis",
      //   job: "Bartender",
      // },
    ],
    tableHeadings: [
      {
        one: "Users",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
      tableHeadings: [
        {
          one: "Employees",
        },
      ],
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters, tableHeadings } = this.state;
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />

        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
          tableHeadings={tableHeadings}
        />
      </div>
    );
  }
}

export default App;
