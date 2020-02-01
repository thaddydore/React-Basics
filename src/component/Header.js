import React from "react";

const Header = props => (
	<header className="header">
		<div className="container">
			<h1 className="title">{props.title}</h1>
			<h2 className="subtitle">{props.subTitle}</h2>
		</div>
	</header>
);

export default Header;
