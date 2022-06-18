import React from "react";

export default class TableHeadProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTrName: ["ID", "NAME", "DESCRIPTION", "PRICE", "CREATED-AT"],
    };
  }

  render() {
    return (
      <tr>
        <>
          {this.state.arrTrName.map((item, key) => (
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              key={key}
            >
              {item}
            </th>
          ))}
        </>
      </tr>
    );
  }
}
