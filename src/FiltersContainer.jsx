import Filters from './Filters';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: filter => dispatch({ type: 'CHANGE_FILTER', filter })
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);