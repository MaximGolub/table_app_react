import React from "react";
import ChangeModal from "./ChangeModal";

export default class TableCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showModal: false,
    };
  }

  getModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  onSave = (value) => {
    this.props.onSave({ id: this.props.id, fieldName: this.props.name, value });
  };

  render() {
    return (
      <>
        <td
          className="text-sm text-gray-900 font-light px-6 py-4"
          data-cell="cell"
          onDoubleClick={() => this.getModal()}
        >
          {this.props.value}
          <ChangeModal
            show={this.state.showModal}
            close={this.hideModal}
            onSave={this.onSave}
            value={this.props.value}
          />
        </td>
      </>
    );
  }
}
