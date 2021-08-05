import React from "react";

const ListItem = (item) => {
	return (
		<div>
			<li
				key={item.id}
				className="list-item"
				onClick={item.clickItem}
				value={item.title}
			>
				{item.value}
			</li>
		</div>
	);
};

export default ListItem;
