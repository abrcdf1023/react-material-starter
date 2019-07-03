import { renderRoutes } from 'react-router-config';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { withCookies } from 'react-cookie';

import routes from 'routes';
// import routesUnlogin from 'routes-unlogin';

const RouterRoot = ({ allCookies }) => {
  /**
   * Use login cookie to return correct routes.
   */
  // if (/** has cookies */) {
  //   return renderRoutes(routes);
  // }

  // return renderRoutes(routesUnlogin);

  return renderRoutes(routes);
};

export default compose(
  withRouter,
  withCookies
)(RouterRoot);
