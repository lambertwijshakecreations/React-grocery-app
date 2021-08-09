import React from "react";
import List from "../components/List/List";

const ShoppingCart = ({ groceryItems }) => {
	return (
		<div>
			<List items={groceryItems} />
		</div>
	);
};

export default ShoppingCart;
