import Tasks from './Tasks';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  tasks: state.tasks,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  handleToggleDone: (taskId) => {
    dispatch({type: 'TOGGLE_DONE', taskId});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);