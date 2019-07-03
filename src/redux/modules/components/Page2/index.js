import { connect } from 'react-redux';

import {
  handleOpen as handleAlertDialogOpen,
  setTitle as setAlertDialogTitle,
  setMessage as setAlertDialogMessage
} from 'redux/modules/components/AlertDialog/actions';
import Page2 from 'components/Page2';

const mapDispatchToProps = {
  handleAlertDialogOpen,
  setAlertDialogTitle,
  setAlertDialogMessage
};

export default connect(
  null,
  mapDispatchToProps
)(Page2);
