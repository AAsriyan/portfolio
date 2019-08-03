import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import { TextArea } from 'semantic-ui-react';
import { ReactComponent as Message } from '../../assets/images/message.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './Contact.scss';

class Contact extends Component {
	state = {
		myEmail: 'aasriyan01@gmail.com',
		_replyto: '',
		subject: '',
		message: '',
		blocked: true
	};

	handleChange = async e => {
		const { sender, subject, message } = this.state;
		const { name, value } = e.target;

		await this.setState({ [name]: value });

		if ((sender, subject, message)) {
			await this.setState({ blocked: false });
		}

		if (sender === '' || subject === '' || message === '') {
			await this.setState({ blocked: true });
		}
	};

	render() {
		const { blocked } = this.state;

		return (
			<div className="contact" id="contact">
				<div className="contact-text">
					<div className="left-message">
						<h2>
							Let's Talk<span className="period">.</span>
						</h2>
						<p>
							Are you a potential employer? A curious bystander? A long lost
							friend?
						</p>
						<p>Don't be shy. Send a message and let's talk.</p>
						<Message className="message" />
					</div>
				</div>
				<div className="contact-form">
					<form
						action="https://formspree.io/aasriyan01@gmail.com"
						method="POST"
					>
						<FormInput
							name="_replyto"
							value={this.state._replyto}
							type="email"
							handleChange={this.handleChange}
							label="Email Address"
							required
						/>
						<FormInput
							name="subject"
							value={this.state.subject}
							type="text"
							handleChange={this.handleChange}
							label="Subject"
							required
						/>
						<TextArea
							className="message-text"
							name="message"
							value={this.state.message}
							type="textarea"
							onChange={this.handleChange}
							label="Message"
							placeholder="Send a message"
							rows="5"
							required
						/>
						<input type="hidden" name="_next" value="http://localhost:3000/" />
						<input type="hidden" name="_subject" value="Website contact" />
						<input type="text" name="_gotcha" style={{ display: 'none' }} />
						<button className={blocked ? `disabled-btn` : ''}>
							Send{' '}
							{blocked ? (
								<FontAwesomeIcon icon={faLock} />
							) : (
								<FontAwesomeIcon icon={faPaperPlane} />
							)}
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
