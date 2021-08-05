import React from "react";
import List from "./list";

const ShoppingCart = (groceryItems) => {
	return (
		<div>
			<h1>ShoppingCart</h1>
			<List items={groceryItems} />
		</div>
	);
};

export default ShoppingCart;
