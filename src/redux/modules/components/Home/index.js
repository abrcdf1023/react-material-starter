import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUsersFetchGet, getUsers } from './selectors';

import * as actions from './actions';

import Home from 'components/Home';

const mapStateToProps = state => ({
  usersFetchGet: getUsersFetchGet(state),
  users: getUsers(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
