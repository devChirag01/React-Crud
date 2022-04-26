import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.data.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          {" "}
          <button onClick={() => props.removeCharacter(index)}>
            Delete
          </button>{" "}
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    let { data, removeCharacter, names } = this.props;
    let singleName = names[0].one;
    console.log(">>>>>>>>>>>>>", data);

    return (
      <div>
        <h1> {singleName} </h1>
        <table>
          <TableHeader />
          <TableBody characterData={data} removeCharacter={removeCharacter} />
        </table>
      </div>
    );
  }
}

export default Table;
