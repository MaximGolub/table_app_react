import React from "react";

export default class ChangeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value === "") {
      this.setState({
        value: this.props.value,
      });
    } else {
      this.props.onSave(this.state.value);
    }
    this.props.close();
  }

  handleFieldChange = (e) => {
    const { target } = e;
    this.setState(() => {
      return { value: target.value };
    });
  };

  render() {
    return (
      <>
        {this.props.show && (
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className="max-w-3xl h-1/4 relative top-1/4 left-0 -translate-y-50% flex flex-col justify-center mx-auto"
          >
            <input
              defaultValue={this.props.value}
              onChange={this.handleFieldChange.bind(this)}
              type="text"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
              placeholder="Type text"
            />
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              SAVE
            </button>
          </form>
        )}
      </>
    );
  }
}
