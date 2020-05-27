import React from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';
import { createTask, editTask } from './actions';

class App extends React.Component {

    onCreateTask = (title, description) => {
        const action = createTask(title, description);
        this.props.dispatch(action);
    };

    onStatusChange = (id, status) => {
        const action = editTask(id, { status } );
        this.props.dispatch(action);
    };

    render() {
        return (
            <div className="main-content">
                <TasksPage
                    tasks={  this.props.tasks }
                    onCreateTask={ this.onCreateTask }
                    onStatusChange={ this.onStatusChange }
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(App);