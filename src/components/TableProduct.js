import React from "react";
import TableBodyProduct from "./TableBodyProduct";
import TableHeadProduct from "./TableHeadProduct";
import data from "../products.json";

export default class TableProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  handleChange = ({ id, fieldName, value }) => {
    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          item[fieldName] = value;
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <TableHeadProduct />
                  </thead>
                  <tbody>
                    <TableBodyProduct
                      onSave={this.handleChange}
                      products={this.state.data}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
