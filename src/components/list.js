import React, { Component } from "react";
import ListItem from "./listItem";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const listItems = this.state.groceryItems.map((item) => (
			<ListItem key={item.id} title={item.title} />
		));

		return (
			<div>
				<ul>{listItems}</ul>
			</div>
		);
	}
}

export default List;
