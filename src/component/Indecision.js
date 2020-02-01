import React from "react";

//import components
import AddOptions from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class Indecision extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

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
	handleDelete = () => {
		this.setState(prevState => {
			return {
				options: []
			};
		});
	};

	handleDel = optionRemove => {
		this.setState(prevState => {
			return {
				options: prevState.options.filter(option => {
					return optionRemove !== option;
				})
			};
		});
	};

	handlePick = () => {
		const option = Math.floor(Math.random() * this.state.options.length);
		const decision = this.state.options[option];
		this.setState(prevState => {
			return {
				selectedOption: decision
			};
		});
	};

	handleSubmit = e => {
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
	};

	closeModal = () => {
		this.setState(() => {
			return {
				selectedOption: undefined
			};
		});
	};

	render() {
		const title = "Indecision App";
		const subTitle = "Put Your Hand In the Hand Of Computer";

		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<div className="container">
					<Action
						hasOption={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDelete={this.handleDelete}
							handleDel={this.handleDel}
						/>
						<AddOptions handleSubmit={this.handleSubmit} />
					</div>
				</div>

				<OptionModal
					selectedOption={this.state.selectedOption}
					closeModal={this.closeModal}
				/>
			</div>
		);
	}
}

export default Indecision;
