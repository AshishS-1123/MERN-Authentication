/**
 *
 * Asynchronously loads the component for PrivateView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
