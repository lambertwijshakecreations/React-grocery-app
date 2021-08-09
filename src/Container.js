import React from "react";
import ShoppingCart from "./containers/ShoppingCart";
import GroceryList from "./containers/GroceryList";

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groceryItems: [
				{ id: 1, title: "melk" },
				{ id: 2, title: "boter" },
				{ id: 3, title: "bier" }
			],
			shoppingListItems: [{ id: 1, title: "brood" }]
		};
	}

	render() {
		return (
			<div className="container">
				<div className="groceries-list groceries">
					<h1>Boodschappenlijst</h1>
					<GroceryList groceryItems={this.state.groceryItems} />
				</div>
				<div className="groceries-list basket">
					<h1>Winkelmand</h1>
					<ShoppingCart groceryItems={this.state.shoppingListItems} />
				</div>
			</div>
		);
	}
}

export default Container;
