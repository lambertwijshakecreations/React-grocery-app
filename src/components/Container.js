import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>Container</h1>
				<ShoppingCart />
				<GroceryList />
			</div>
		);
	}
}

export default Container;
