import React, { Component } from 'react';
import {FeedbackOptions} from 'components/FeedbackOptions/FeedbackOptions';
import { Title, Section } from './SectionStatistics.styled';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
// import {PropTypes} from 'prop-types'

export class SectionStatistics extends Component {
	static propTypes = {};

	state = {
		good: this.props.good,
		neutral: this.props.neutral,
		bad: this.props.bad,
	};

	hundleInkrementGood = () => {
		this.setState(prevState => {
			return {
				good: prevState.good + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	hundleInkrementNeutral = () => {
		this.setState(prevState => {
			return {
				neutral: prevState.neutral + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	hundleInkrementBad = () => {
		this.setState(prevState => {
			return {
				bad: prevState.bad + 1,
			};
		});
		this.totalFeedback();
		this.percentageGoodFeedback();
	};

	totalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	percentageGoodFeedback = () => {
		return parseInt((this.state.good / this.totalFeedback()) * 100);
	};

	render() {
		const { good, neutral, bad } = this.state;
		const { title } = this.props;
		return (
			<Section>
				<Title>{title}</Title>

				<FeedbackOptions
					inkrementGood={this.hundleInkrementGood}
					inkrementNeutral={this.hundleInkrementNeutral}
					inkrementBad={this.hundleInkrementBad}
				/>

				{good !== 0 ||
				neutral !== 0 ||
				bad !== 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={this.totalFeedback()}
						positivePercentage={this.percentageGoodFeedback()}
					/>
				) : (
					<Notification />
				)}
			</Section>
		);
	}
}
