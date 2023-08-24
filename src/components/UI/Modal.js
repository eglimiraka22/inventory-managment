import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { uiActions } from '../../store/slices/uiSlice';
import { useDispatch } from 'react-redux';

const Backdrop = (props) => {
	const dispatch = useDispatch();

	const handleTooogle = () => {
		dispatch(uiActions.toggleJobForm());
	};
	return <div className={classes.backdrop} onClick={handleTooogle}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</React.Fragment>
	);
};

export default Modal;