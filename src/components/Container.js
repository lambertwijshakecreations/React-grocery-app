import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [
				{ id: 1, title: "melk" },
				{ id: 2, title: "boter" },
				{ id: 3, title: "bier" },
				{ id: 4, title: "sla melange" },
				{ id: 5, title: "chips" }
			],
			shoppingListItems: [{ id: 1, title: "brood" }]
		};
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
