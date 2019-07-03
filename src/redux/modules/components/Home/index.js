import { connect } from 'react-redux';

import { getUsersFetchGet, getUsers } from './selectors';

import * as actions from './actions';

import Home from 'components/Home';

const mapStateToProps = state => ({
  usersFetchGet: getUsersFetchGet(state),
  users: getUsers(state)
});

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
