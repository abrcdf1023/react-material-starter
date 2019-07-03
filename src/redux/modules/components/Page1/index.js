import { connect } from 'react-redux';

import {
  handleOpen as handleAlertDialogOpen,
  setTitle as setAlertDialogTitle,
  setMessage as setAlertDialogMessage
} from 'redux/modules/components/AlertDialog/actions';
import Page1 from 'components/Page1';

const mapDispatchToProps = {
  handleAlertDialogOpen,
  setAlertDialogTitle,
  setAlertDialogMessage
};

export default connect(
  null,
  mapDispatchToProps
)(Page1);
