import React, { Component } from 'react';

class ListControls extends Component {
    state = {
        value: ''
    }

    handleChange = event => {
		this.setState({ value: event.target.value });
	};


	inputIsEmpty = () => {
		return this.state.value === '';
    };
    
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleAdd(this.state.value, e)}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>
                        Add
                    </button>
                </form>

                <button onClick={this.props.handleDelete} disabled={this.props.buttonDisabled}>
                    Delete Last Item
                </button>
            </div>
        );
    }
}

export default ListControls;