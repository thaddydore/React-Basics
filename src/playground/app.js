const root = document.querySelector("#root");

class Indecision extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			options: []
		};

		this.handleDelete = this.handleDelete.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDel = this.handleDel.bind(this);
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);

			if (options) {
				this.setState(() => ({
					options: options
				}));
			}
		} catch (e) {
			console.log(e);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}
	handleDelete() {
		this.setState(prevState => {
			return {
				options: []
			};
		});
	}

	handleDel(optionRemove) {
		this.setState(prevState => {
			return {
				options: prevState.options.filter(option => {
					return optionRemove !== option;
				})
			};
		});
	}

	handlePick() {
		const option = Math.floor(Math.random() * this.state.options.length);
		const decision = this.state.options[option];
		alert(decision);
	}

	handleSubmit(e) {
		e.preventDefault();
		let value = e.target.elements.input.value.trim();
		if (value) {
			this.setState(prevState => {
				return {
					options: [...prevState.options, value]
				};
			});
		}
		e.target.elements.input.value = "";
	}

	render() {
		const title = "Indecision App";
		const subTitle = "Put Your Hand In the Hand Of Computer";

		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<Action
					hasOption={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDelete={this.handleDelete}
					handleDel={this.handleDel}
				/>
				<AddOptions handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const Header = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subTitle}</h2>
		</div>
	);
};

const Action = props => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOption}>
				what should i do
			</button>
		</div>
	);
};

const Options = props => {
	return (
		<div>
			<button onClick={props.handleDelete}>Remove all</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{props.options.map((option, index) => (
				<Option key={index} optionText={option} handleDel={props.handleDel} />
			))}
		</div>
	);
};

const Option = props => {
	// the onclick function in the button is called with arrow  func and passed in a prop to delete
	return (
		<div>
		
			{props.optionText}

			<button onClick={e => props.handleDel(props.optionText)}>Remove</button>
		</div>
	);
};

const AddOptions = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input type="text" placeholder="add opton" name="input" />
				<button>Add Option</button>
			</form>
		</div>
	);
};

ReactDOM.render(<Indecision />, root);
