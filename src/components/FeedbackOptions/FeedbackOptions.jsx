import React from 'react';
import { Button, FeedbackContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({inkrementGood, inkrementNeutral, inkrementBad}) => (
<FeedbackContainer>
					
					<Button type="button" onClick={inkrementGood}>
						Добрий
					</Button>
					<Button
						type="button"
						onClick={inkrementNeutral}
					>
						Помірний
					</Button>
					<Button
						type="button"
						onClick={inkrementBad}
					>
						Поганий
					</Button>
				</FeedbackContainer>
)

export default FeedbackOptions;