import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groceryItems: [
				{ id: 1, title: "melk" },
				{ id: 2, title: "boter" },
				{ id: 3, title: "bier" },
				{ id: 4, title: "sla melange" },
				{ id: 5, title: "chips" }
			]
		};
	}

	render() {
		return (
			<div>
				<GroceryList />
				<ShoppingCart />
			</div>
		);
	}
}

export default Container;
