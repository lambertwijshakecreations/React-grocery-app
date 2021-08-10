import React from "react";
import List from "../components/List/List";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
	return (
		<div>
			<button className="button-primary" onClick={handleClickEmptyCart}>
				Empty Cart
			</button>
			<List readonly={true} items={groceryItems} />
		</div>
	);
};

export default ShoppingCart;
