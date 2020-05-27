import React from 'react';
import TaskList from './TaskList';

import { TASK_STATUSES } from '../constants';

class TasksPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showNewCardForm: false,
			title: '',
			description: ''
		};
	}

	onTitleChange = event => {
		this.setState({
			title: event.target.value
		});
	};

	onDescriptionChange = event => {
		this.setState({
			description: event.target.value
		});
	};

	resetForm() {
		this.setState({
			showNewCardForm: false,
			title: '',
			description: ''
		});
	}

	onCreateTask = event => {
		event.preventDefault();
		this.props.onCreateTask(this.state.title, this.state.description);
		this.resetForm();
	};

	toggleForm = () => {
		this.setState({
			showNewCardForm: !this.state.showNewCardForm
		});
	};

	renderTaskLists() {
		const { onStatusChange, tasks } = this.props;

		console.log(tasks);

		return TASK_STATUSES.map(status => {
			const statusTasks = tasks.filter(task => task.status === status);
			return (
				<TaskList key={ status } status={ status } tasks={ statusTasks } onStatusChange={ onStatusChange } />
			);
		})
	}

	render() {
		return (
			<div className="tasks">
				<div className="tasks-header">
					<button className="button button-default" onClick={ this.toggleForm }>
						+ New Task
					</button>
				</div>
				{
					this.state.showNewCardForm && (
						<form className="new-task-form" onSubmit={ this.onCreateTask }>
							<input className="full-width-input" onChange={ this.onTitleChange } value={ this.state.title } type="text" placeholder="title" />
							<input className="full-width-input" onChange={ this.onDescriptionChange } type="text" placeholder="description" />
							<button className="button" type="submit">Save</button>
						</form>
					)
				}
				<div className="task-lists">
					{ this.renderTaskLists() }
				</div>
			</div>
		);
	}
}

export default TasksPage;