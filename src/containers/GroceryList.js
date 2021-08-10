import React from "react";
import List from "../components/List/List";
import InputField from "../components/inputField";

const GroceryList = ({ groceryItems, handleClickGroceryItem }) => {
	return (
		<div>
			<InputField />
			<List items={groceryItems} handleClickItem={handleClickGroceryItem} />
		</div>
	);
};

export default GroceryList;
