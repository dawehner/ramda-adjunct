import { complement } from 'ramda';

import isBoolean from './isBoolean';

/**
 * Checks if input value is complement of `Boolean`
 *
 * @func isNotBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isBoolean|isBoolean}
 * @example
 *
 * RA.isNotBoolean(false); //=> false
 * RA.isNotBoolean(true); //=> false
 * RA.isNotBoolean(null); //=> true
 */
export default complement(isBoolean);