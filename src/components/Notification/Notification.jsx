import { Component } from 'react';
import { Notice } from './Notification.styled';
// import {PropTypes} from 'prop-types'

class Notification extends Component {
	static propTypes = {};

	render() {
		return <Notice>Відгуків поки немає 🙄 </Notice>;
	}
}

export default Notification;
