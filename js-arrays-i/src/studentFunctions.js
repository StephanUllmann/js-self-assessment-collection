/*
 * Student functions ­– implement each one.
 * Do NOT change the exported names or remove the TODO comments.
 */

/**
 * Switches places of values at first and last index without mutating the original array
 * @param {Array<any>} arr
 * @returns {Array<any>}
 */
function toShiftedAround(arr) {
  // TODO: Given an Array 'arr', return an array where the first and the last values changed places ([1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1])
  //  TODO: leave the original Array intact!
  return 'NOT IMPLEMENTED';
}

/**
 * Switches places of values at first and last index *by* mutating the original array
 * @param {Array<any>} arr
 */
function shiftAround(arr) {
  // TODO: Given an Array 'arr', return nothing, but let the values at the first and last indexes change places ([1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1])
  //  TODO: this time change the original array and don't return anything!
  return 'NOT IMPLEMENTED';

  const last = arr.pop();
  const first = arr.shift();
  arr.unshift(last);
  arr.push(first);
}

/**
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
function calculateMedian(arr) {
  // TODO: return the median in a set of *unsorted* numbers (hint: array length can be odd or even)
  // TODO: don't mutate the original array!
  return 'NOT IMPLEMENTED';

  if (!arr.length) return undefined;
  const base = arr.toSorted((a, b) => a - b);

  if (base.length % 2 === 0) {
    return (base[base.length / 2 - 1] + base[base.length / 2]) / 2;
  } else {
    return base[Math.floor(base.length / 2)];
  }
}

/**
 * Given an array of user objects, this function extracts the username and email
 * for each user and returns them as an array of tuples (2-element arrays).
 * Users without a username or email property are ignored.
 *
 * @param {Array<Object>} users - An array of user objects. Each object might contain various properties, but at least 'username' and 'email' are expected for successful extraction.
 * @returns {Array<Array<string>>} An array of arrays, where each inner array contains two strings: the username and the email of a user. Returns an empty array if no users have both a username and an email, or if the input array is empty.
 * @example
 * // returns [["Guybrush", "mighty@pirate.gov"]]
 * listNamesAndEmails([{username: "Guybrush", email: "mighty@pirate.gov"}]);
 *
 * @example
 * // returns [["Guybrush", "mighty@pirate.gov"]]
 * listNamesAndEmails([{username: "Guybrush", email: "mighty@pirate.gov"}, {favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}]);
 *
 * @example
 * // returns []
 * listNamesAndEmails([{favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}]);
 *
 * @example
 * // returns []
 * listNamesAndEmails([]);
 */
function listNamesAndEmails(users) {
  //TODO: Given an array of user objects, return an array with the usernames and emails (in "tuples"); ignore all other properties
  // example: [{username: "Guybrush", email: "mighty@pirate.gov"}] -> [["Guybrush", "mighty@pirate.gov"]]
  // if there is no username or no email in an object, omit that user
  // example: [{username: "Guybrush", email: "mighty@pirate.gov"}, {favouriteIceCream: "chocolate", email: "icecreamconnoisseur@mail.berlin"}] -> [["Guybrush", "mighty@pirate.gov"]]
  return users.filter((user) => user.email && user.username).map((user) => [user.username, user.email]);
}

export { toShiftedAround, shiftAround, calculateMedian, listNamesAndEmails };
