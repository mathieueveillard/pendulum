export const pendulum = (array: number[]): number[] => {
  if (array.length === 0) {
    return [];
  }
  const sortedArray = [...array].sort((a, b) => b - a);
  const [first, ...allButFirst] = sortedArray;
  if (allButFirst.length % 2 === 1) {
    return [...pendulum(allButFirst), first];
  }
  return [first, ...pendulum(allButFirst)];
};
