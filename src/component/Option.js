import React from "react";

const Option = props => (
	// the onclick function in the button is called with arrow  func and passed in a prop to delete

	<div className="option">
		<p className="option__text">
			{props.count}. {props.optionText}{" "}
		</p>
		<button
			onClick={e => props.handleDel(props.optionText)}
			className="button button--link"
		>
			Remove
		</button>
	</div>
);

export default Option;
