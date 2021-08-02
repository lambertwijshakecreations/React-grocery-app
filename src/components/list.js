import React from "react";
import ListItem from "./listItem";

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groceryItems: [
				{ id: 1, title: "boter" },
				{ id: 2, title: "melk" },
				{ id: 3, title: "sla" },
				{ id: 4, title: "paprika" },
				{ id: 5, title: "bakpapier" }
			]
		};

		const listItem = groceryItems.map((item) => {
			item.title;
		});
	}

	render() {
		return (
			<ul>
				<li>
					<ListItem title="boter" />
				</li>
				<li>
					<ListItem title="melk" />
				</li>
				<li>
					<ListItem title="sla" />
				</li>
				<li>
					<ListItem title="paprika" />
				</li>
				<li>
					<ListItem title="bakpapier" />
				</li>
			</ul>
		);
	}
}

export default List;
