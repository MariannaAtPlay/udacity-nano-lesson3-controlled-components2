import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import ListControls from './ListControls';

class App extends React.Component {
	state = {
		items: [],
	};

	addItem = (newItem, event) => {
		event.preventDefault();
		this.setState(oldState => ({
			items: [...oldState.items, newItem],
		}));
	};

	deleteLastItem = event => {
		this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
	};

	noItemsFound = () => {
		return this.state.items.length === 0;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<h2>Shopping List</h2>
				<ListControls 
					handleAdd={this.addItem} 
					handleDelete={this.deleteLastItem}
					buttonDisabled={this.noItemsFound()} />
				<List items={this.state.items}/>
			</div>
		);
	}
}

export default App;
