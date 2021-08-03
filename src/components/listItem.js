import React from "react";

const ListItem = (props) => {
	return (
		<div>
			<li
				key={props.id}
				className="list-item"
				onClick={props.clickItem}
				value={props.title}
			>
				{props.title}
			</li>
		</div>
	);
};

export default ListItem;
