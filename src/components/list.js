import React, { Component } from "react";
import ListItem from "./listItem";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groceryItems: [
				{ id: 1, title: "melk" },
				{ id: 2, title: "boter" },
				{ id: 3, title: "bier" },
				{ id: 4, title: "sla melange" },
				{ id: 5, title: "chips" }
			]
		};
	}

	render() {
		const listItems = this.state.groceryItems.map((item) => (
			<ListItem key={item.id} title={item.title} />
		));
		console.log(listItems);

		return (
			<div>
				<ul>{listItems}</ul>
			</div>
		);
	}
}

export default List;
