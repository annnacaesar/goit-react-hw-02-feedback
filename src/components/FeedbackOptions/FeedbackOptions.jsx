import React, { Component } from 'react';
import { Button, FeedbackContainer } from './FeedbackOptions.styled';
// import {PropTypes} from 'prop-types'

 class FeedbackOptions extends Component {
	static propTypes = {};

	render() {
		const { inkrementGood, inkrementNeutral, inkrementBad } = this.props;
		return (
			<FeedbackContainer>
				<Button type="button" onClick={inkrementGood}>
					Добрий
				</Button>
				<Button type="button" onClick={inkrementNeutral}>
					Помірний
				</Button>
				<Button type="button" onClick={inkrementBad}>
					Поганий
				</Button>
			</FeedbackContainer>
		);
	}
 }

export default FeedbackOptions;

