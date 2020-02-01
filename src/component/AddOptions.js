import React from "react";

const AddOptions = props => (
	<div>
		<form onSubmit={props.handleSubmit} className="add-option">
			<input type="text" placeholder="add opton"
				name="input"
				className="add-option__input"
			/>
			<button className="button">Add Option</button>
		</form>
	</div>
);

export default AddOptions;
