export const getUniqueId = () => {
  const timeNow = Date.now();
  const functionCalledTimes = getUniqueId.callsCount;

  getUniqueId.callsCount += 1;

  return `${timeNow}_${functionCalledTimes}`;
};

getUniqueId.callsCount = 0;
