import React from "react";
import TableRow from "./TableRow";

export default class TableBodyProduct extends React.Component {
  render() {
    return (
      <>
        {this.props.products.map((item, key) => (
          <TableRow onSave={this.props.onSave} products={item} key={key} />
        ))}
      </>
    );
  }
}
