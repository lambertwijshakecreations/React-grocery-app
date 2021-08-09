import React from "react";
import List from "../components/List/List";

const GroceryList = ({ groceryItems }) => {
	return (
		<div>
			<List items={groceryItems} />
		</div>
	);
};

export default GroceryList;
