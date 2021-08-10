import React from "react";
import List from "../components/List/List";

const GroceryList = ({ groceryItems, handleClickGroceryItem }) => {
	return (
		<div>
			<List items={groceryItems} handleClickItem={handleClickGroceryItem} />
		</div>
	);
};

export default GroceryList;
