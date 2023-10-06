/**
 * Checks if a value is empty or has no meaningful content.
 *
 * @param value - The value to check for emptiness.
 * @returns True if the value is considered empty, otherwise false.
 */
export function isEmpty(value) {
  // Check if the value is null or undefined
  if (value === null || value === undefined) return true;

  // Check if the value is an empty string
  if (typeof value === "string" && value.trim() === "") return true;

  // Check if the value is an empty array or object
  if (Array.isArray(value) || typeof value === "object")
    return Object.keys(value).length === 0;

  // For other types, consider them non-empty
  return false;
}

/**
 * Checks if a value is `undefined`.
 *
 * @param value - The value to check.
 * @returns `true` if the value is `undefined`, otherwise `false`.
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Calculates the sum of a numeric property or the result of an iteratee export function
 * applied to each element in a collection.
 *
 * @param collection - The collection of elements to iterate over.
 * @param iteratee - The property name (as a string) or a export function to extract a numeric value
 *                  from each element in the collection.
 * @returns The sum of the numeric values extracted from the collection.
 */
export function sumBy(collection, iteratee) {
  let sum = 0;

  for (const item of collection) {
    const value =
      typeof iteratee === "export function" ? iteratee(item) : item[iteratee];
    if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
}

export function delay(ms = 150) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, ms)
  );
}

export function validatePassword(password) {
  return /^(?=.*\d)(?=.*[!+@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );
}

/**
 * Concatenates an array of strings or objects into a single string using a specified separator.
 * If objects are provided, a key can be specified to extract the string property.
 *
 * @param array - The array of strings or objects to concatenate.
 * @param separator - The separator to use between concatenated elements (default is a space).
 * @param key - The key to extract the string property if objects are provided (optional).
 * @returns The concatenated string.
 */
export function concatStrings(array, separator = " ", key) {
  if (key)
    return array
      .map((item) => (typeof item === "object" ? item[key] : item))
      .filter((item) => typeof item === "string")
      .join(separator);
  return array.filter((item) => typeof item === "string").join(separator);
}

/**
 * @param array - The array.
 * @param value - The value to filter out.
 * @param key - The key to use for comparison (optional).
 * @description Filter out elements from an array.
 * @returns The filtered array.
 */
export function filterArray(array, value, key) {
  const filtered = array?.filter((elem, i) => (key ? elem[key] : i) !== value);
  return filtered;
}

/**
 * @param array - The array.
 * @param key - The key to identify the element to replace.
 * @param value - The value of the element to replace.
 * @param newData - The new data to replace the element.
 * @description Replace an element in an array.
 * @returns The array with the element replaced.
 */
export function replaceElement(array, key, value, newData) {
  return [...array].map((elem, i) => {
    const check = key ? elem[key] : i;
    if (check === value) return { ...newData };
    return elem;
  });
}

/**
 * @param firstChunk - The first array.
 * @param secondChunk - The second array.
 * @description Concatenate two arrays.
 * @returns The concatenated array.
 */
export function concatArrays(firstChunk, secondChunk) {
  return firstChunk.concat(secondChunk);
}

/**
 * @param object - The object with key-value pairs.
 * @param value - The value to search for.
 * @description Get dropdown formatted values from an object.
 * @returns An array of formatted objects or a single object.
 */
export function getDropdownOptions(object, value) {
  const newArr = Object.keys(object).map((key) => ({
    label: object[key],
    value: key,
  }));
  if (value) return newArr.find((el) => el.value === value);
  return isUndefined(value) ? newArr : "";
}

export function positiveNumberCheck(value) {
  if (isEmpty(value)) return true;
  let positiveNumber = /^[0-9]+$/;
  return positiveNumber.test(value);
}

export function getDates(noOfDays) {
  let startDate = new Date();
  let day = startDate.getDay();
  let diff = startDate.getDate() - day + (day == 0 ? -6 : 1);

  return {
    endDate: new Date(startDate),
    startDate: new Date(startDate.setDate(diff - noOfDays)),
  };
}

/**
 *
 * @param object - The object to validate.
 * @description Check if all fields of the object are non-empty.
 * @returns {Boolean}
 */
export function validateObject(object) {
  return Object.values(object).every(Boolean);
}

/**
 *
 * @param arr - The array of objects.
 * @param key - The key to calculate the sum of fields.
 * @description Calculate the sum of fields in an array of objects.
 * @returns The sum of the specified fields.
 */
export function sumOfArray(arr, key) {
  return sumBy(arr, (el) => Number(el[key]));
}

export function dateStr(date) {
  return new Date(date).toISOString().split("T")[0];
}

/**
 * @param {object} object
 * @description Check if all fields in object are empty
 * @returns {boolean}
 */
export const emptyObjectValues = (object) =>
  !Object.values(object).some(Boolean);

/**
 *
 * @param {object} object
 * @description Remove empty fields from the object like "" | null | undefined
 * @returns {object}
 */
export const removeEmptyFields = (object) => {
  let obj = {};
  Object.keys(object).forEach((key) => {
    if (object[key] || object[key] === 0) obj = { ...obj, [key]: object[key] };
  });

  return obj;
};

/**
 *
 * @param {string} url
 * @param {string} fileName
 */
export const downloadFileFromUrl = (url, fileName) => {
  const aElement = document.createElement("a");
  aElement.setAttribute("download", `${fileName}.pdf`);
  const href = url;
  aElement.href = href;
  aElement.setAttribute("target", "_blank");
  aElement.click();
};

export const isEmptyString = (value) => {
  return value === "" || undefined || null;
};
