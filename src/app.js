import React, { useState } from "react";
import Table from "./table";

const App = () => {
  const obj = {
    data: [
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

  const [state, setState] = useState("Aman");

  const { data, names } = state;

  const removeCharacter = (index) => {
    // this.setState({
    //   characters: characters.filter((character, i) => {
    //     return i !== index;
    //   }),
    //   names: {
    //     one: "Addicated",
    //   },
    // });
  };

  return (
    <div className="container">
      {/* <Table
        characterData={data}
        removeCharacter={removeCharacter}
        names={names}
      /> */}
      {state}
      <button
        onClick={() => {
          const arr = [1, 10, 15, 20, 25, 30, 35, 40, 45, 50];
          const newArr = arr.filter((item) => item > 20);
          console.log(newArr);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
