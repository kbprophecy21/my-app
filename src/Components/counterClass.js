import React, { Component } from "react";

class ClassComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
	}

	increase() {
		this.setState({ count: this.state.count + 1 });
	}
	decrease() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div style={{ margin: '50px' }}>
				<h1>Welcome to Kyle's Counter!</h1>
				<h3>Counter App using Class Component : </h3>
				<h2> {this.state.count}</h2>
				<button onClick={this.increase}>+</button>
				<button onClick={this.decrease}>-</button>

			</div>
		)
	}
}

export default ClassComponent;
