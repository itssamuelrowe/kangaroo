import { uniqueId } from '../actions';

const mockTasks = [
 	{
    	id: uniqueId(),
    	title: 'Learn Redux',
    	description: 'The store, actions, and reducers, oh my!',
    	status: 'Unstarted',
  	},
 	{
    	id: uniqueId(),
    	title: 'Learn React',
    	description: 'The components, state, and props. I love React!',
    	status: 'Completed',
  	},
  	{
    	id: uniqueId(),
    	title: 'Bali, where you at?',
    	description: 'Money, where you at?',
    	status: 'In Progress',
  	},
  	{
    	id: uniqueId(),
    	title: 'Become a billionaire',
    	description: 'Stop day dreaming, man!',
    	status: 'In Progress',
  	},
  	{
    	id: uniqueId(),
    	title: 'Build Hubble',
    	description: 'I am working on it!',
    	status: 'In Progress',
  	},
  	{
    	id: uniqueId(),
    	title: 'Learn Docker',
    	description: 'The images, commands, and much more...',
    	status: 'Unstarted',
  	},
];

export default function tasks(state = { tasks: mockTasks }, action) {
	if (action.type === 'CREATE_TASK') {
		return {
			tasks: state.tasks.concat(action.payload)
		};
	}
	else if (action.type === 'EDIT_TASK') {
		const { payload } = action;
		return {
			tasks: state.tasks.map(task => {
				if (task.id === payload.id) {
					return Object.assign({}, task, payload.params);
				}
				return task;
			})
		};
	}
	return state;
}