import React from "react";
import List from "./list";

const GroceryList = (groceryItems) => {
	return (
		<div>
			<h1>GroceryList</h1>
			<List items={groceryItems} />
		</div>
	);
};

export default GroceryList;
