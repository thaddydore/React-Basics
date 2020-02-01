import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="selected Option"
		ariaHideApp={false}
		onRequestClose={props.closeModal}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">selected Option</h3>
		{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
		<button className="button" onClick={props.closeModal}>Okay</button>
	</Modal>
);

export default OptionModal;
