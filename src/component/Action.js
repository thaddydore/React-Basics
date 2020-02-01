import React from "react";

const Action = props => (
	<div>
		<button onClick={props.handlePick}
			disabled={!props.hasOption}
			className="big-button"
		>
			what should i do
		</button>
	</div>
);

export default Action;
