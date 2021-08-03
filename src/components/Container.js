import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

const Container = () => {
	return (
		<div>
			<GroceryList />
			<ShoppingCart />
		</div>
	);
};

export default Container;
