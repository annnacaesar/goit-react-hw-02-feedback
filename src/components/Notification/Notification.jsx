import { Component } from 'react';
import { Notice } from './Notification.styled';
// import {PropTypes} from 'prop-types'

export class Notification extends Component {
	static propTypes = {};

	render() {
		return <Notice>Відгуків поки немає 🙄 </Notice>;
	}
}
