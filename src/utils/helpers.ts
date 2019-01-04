/**
 * Returns true if the argument passed is an even number.
 *
 * @method isEven
 *
 * @param {Number} val  -   Value to run check on;
 *
 * @return {Boolean}
 */
export const isEven = (val:number):boolean => {
  return ((val % 2) === 0);
};

type generateXYBorderStyles = {
  color?: string,
  xBorder: string,
  yBorder: string,
};

/**
 * Generates a border line bounding the x and y axis.
 *
 * @param {String} Object.color   - Border color of the generated border lines.
 * @param {String} Object.xBorder - Border direction on the x-axis. Options: `borderLeft` or `borderRight`.
 * @param {String} Object.yBorder - Border direction on the y-axis. Options: `borderTop` or `borderBottom`.
 *
 * @returns {Object}
 */
export const generateXYBorderStyles = ({
  color,
  xBorder,
  yBorder,
}: generateXYBorderStyles):Object => {
  return {
    [xBorder]: `1px solid ${color}`,
    [yBorder]: `1px solid ${color}`,
  };
};
