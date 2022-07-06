import React from 'react';
import { Container, TitleStatistic, List, Item  } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	console.log(Statistics.props);
	return (
		<Container>
		<TitleStatistic>Статистика</TitleStatistic>
		<List>
			<Item>Добрий: {good}</Item>
			<Item>Помірний: {neutral}</Item>
			<Item>Поганий: {bad}</Item>
			<Item>Кількість відгуків: {total}</Item>
			{positivePercentage ? <Item>Відсоток позитивних відгуків: {positivePercentage}%</Item> : <Item>Відсоток позитивних відгуків: 0%</Item>}
		</List>
	</Container>
	)
}
