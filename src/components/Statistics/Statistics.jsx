import React, { Component } from 'react';
import { Container, TitleStatistic, List, Item } from './Statistics.styled';
// import {PropTypes} from 'prop-types'

class Statistics extends Component {

	render() {
		const { good, neutral, bad, total, positivePercentage } = this.props;
		return (
			<Container>
				<TitleStatistic>Статистика</TitleStatistic>
				<List>
					<Item>Добрий: {good}</Item>
					<Item>Помірний: {neutral}</Item>
					<Item>Поганий: {bad}</Item>
					<Item>Кількість відгуків: {total}</Item>
					{positivePercentage ? (
						<Item>
							Відсоток позитивних відгуків: {positivePercentage}%
						</Item>
					) : (
						<Item>Відсоток позитивних відгуків: 0%</Item>
					)}
				</List>
			</Container>
		);
	}
}

export default Statistics;
