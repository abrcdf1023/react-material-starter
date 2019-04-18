import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getIsOpen, getTitle, getMessage } from './selectors';

import * as actions from './actions';

import AlertDialog from 'components/AlertDialog';

const mapStateToProps = state => ({
  isOpen: getIsOpen(state),
  title: getTitle(state),
  message: getMessage(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDialog);
