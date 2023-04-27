import React, { useState, useRef } from 'react'
import Input from '../../ModalWindows/Input'
import classes from './MealsMenuItemForm.module.css'


const MealsMenuItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef();

	const submitHandler = event => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 12) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber)
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_',
					type: 'number',
					min: '1',
					max: '12',
					step: '1',
					defaultValue: '1'
				}} />
			<button>Add</button>
			{!amountIsValid && <p>Pelase enter a valid amount (1-12)</p>}
		</form>)
}

export default MealsMenuItemForm;