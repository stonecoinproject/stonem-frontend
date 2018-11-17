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
