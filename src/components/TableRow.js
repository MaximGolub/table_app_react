import React from "react";
import TableCell from "./TableCell";

export default class TableRow extends React.Component {
  render() {
    return (
      <tr className="border-b">
        <td className="text-sm text-gray-900 font-light px-6 py-4">
          {this.props.products.id}
        </td>
        <TableCell
          name="name"
          id={this.props.products.id}
          value={this.props.products.name}
          onSave={this.props.onSave}
        />
        <TableCell
          name="description"
          id={this.props.products.id}
          value={this.props.products.description}
          onSave={this.props.onSave}
        />
        <TableCell
          name="price"
          id={this.props.products.id}
          value={this.props.products.price}
          onSave={this.props.onSave}
        />
        <td className="text-sm text-gray-900 font-light px-6 py-4">
          {this.props.products.createdAt}
        </td>
      </tr>
    );
  }
}
