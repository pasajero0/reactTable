import React from 'react';
import PropTypes from 'prop-types';

import './RenderForm.scss';

const RenderForm = ( {children, onSubmit, onReset, submitLabel, resetLabel, isVisibleReset} ) => {

    return (
		<div className="renderForm">
			<form onSubmit={onSubmit} onReset={onReset}>
				<div className="renderForm__inputs">
					{children}
				</div>
				<div className="renderForm__buttons">
					<button className="renderForm__btn" type="submit">{submitLabel}</button>
					<button className="renderForm__btn" 
							
							type="reset" 
							style={isVisibleReset ? {display: 'block'} : {display: 'none'}}
					>{resetLabel}</button>
				</div>
			</form>
		</div>
    );
}

RenderForm.propTypes = {
	submitLabel: PropTypes.string,
	resetLabel: PropTypes.string,
	isVisibleReset: PropTypes.bool,
	onSubmit: PropTypes.func.isRequired,
};

RenderForm.defaultProps = {
	submitLabel: 'submit',
	resetLabel: 'reset',
	isVisibleReset: false
};

export default RenderForm;