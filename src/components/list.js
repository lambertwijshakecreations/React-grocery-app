import React, { Component } from "react";
import ListItem from "./listItem";

class List extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<ul>
					<ListItem title="melk" />
				</ul>
			</div>
		);
	}
}

export default List;
