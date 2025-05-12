/*
 * Student functions ­– implement each one.
 * Do NOT change the exported names or remove the TODO comments.
 */

/**
 * Picks one random element from an Array
 * @param {Array<any>} arr
 * @returns {any} One randomly picked element from the input array
 */
function pickRandomElement(arr) {
  // TODO: Given an array of many things, return one randomly picked element
  return 'NOT IMPLEMENTED';
}

/**
 * Get full Days until next Halloween (31st October)
 * @param {string} day Date Format YYYY-MM-DD
 * @returns {number}
 * @example
 * // returns 2
 * getDaysUntilHalloween("2025-10-29")
 *
 * @example
 * // returns 0
 * getDaysUntilHalloween("1999-10-31")

* @example
 * // returns 365
 * getDaysUntilHalloween("1999-11-01")

* @example
 * // returns 364
 * getDaysUntilHalloween("2004-11-01")
 *
 */
function getDaysUntilHalloween(day) {
  // TODO: Use Date and it's methods to calculate how many days are left until the next spooky season.
  return 'NOT IMPLEMENTED';

  const startDate = new Date(day);
  const isAfterOct = startDate.getMonth() > 9;
  const halloweenYear = isAfterOct ? new Date(day).getFullYear() + 1 : new Date(day).getFullYear();
  return Math.abs(Math.round((new Date(halloweenYear, 9, 31) - startDate) / 86_400_000));
}

/**
 * Extracts the 'cuckoo' property from a deeply nested object structure representing a bird's nest.
 * You need to explore the nests structure.
 *
 * @param {object} nest - The nest object containing potentially nested properties.
 * @returns {any} The value of the 'cuckoo' property found at the expected path,
 * or undefined if the 'cuckoo' property doesn't exist at that specific path.
 * Note: Will throw a TypeError if intermediate 'twigs' properties are missing.
 */
function destructureCuckoo(nest) {
  // TODO: Get the Cuckoo out of the given bird's nest
  // TODO: If there is no Cuckoo in the right place, return undefined
  return 'NOT IMPLEMENTED';

  return nest?.twigs?.twigs?.twigs?.cuckoo;
}

export { pickRandomElement, getDaysUntilHalloween, destructureCuckoo };
