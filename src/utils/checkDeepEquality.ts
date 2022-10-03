type Argument = any;

export const checkDeepEquality = function deepEqual(
  object1: Argument,
  object2: Argument
) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (!areObjects && val1 !== val2) ||
      (areObjects && !deepEqual(val1 as Argument, val2 as Argument))
    ) {
      return false;
    }
  }
  return true;
};
function isObject(dataToCheck: unknown) {
  return dataToCheck != null && typeof dataToCheck === "object";
}
