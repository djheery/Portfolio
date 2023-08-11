export const swap = (sortItemArray: number[], i: number, j: number) => {
  [sortItemArray[j], sortItemArray[i]] = [sortItemArray[i], sortItemArray[j]]; 
}