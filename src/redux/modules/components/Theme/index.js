import { connect } from 'react-redux';

import { getThemeOptions } from './selectors';
import Theme from 'components/Theme';

const mapStateToProps = state => ({
  themeOptions: getThemeOptions(state)
});

export default connect(mapStateToProps)(Theme);
