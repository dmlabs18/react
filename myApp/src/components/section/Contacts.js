import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import Crumbs from '../Crumbs';

export default class Contacts extends React.Component {
	render() {
		return (
			<section className="contacts-sect container">
			<Crumbs sect="Контакты" />
				<h1>Обратная связь</h1>
				<Form className="formSize">
					<FormGroup>
						<Input type="text" name="name" id="contactName" placeholder="Ваше имя и фамилия" />
					</FormGroup>
					<FormGroup>
						<Input type="email" name="email" id="contactEmail" placeholder="Контактный e-mail" />
					</FormGroup>
					<FormGroup>
						<Input type="textarea" name="text" id="contactText" placeholder="Текст письма" />
					</FormGroup>
					<Button>Отправить</Button>
				</Form>
			</section>
		);
	}
}
