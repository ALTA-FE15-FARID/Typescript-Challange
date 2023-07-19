//Find Min And Max Number

function findMinMax(array: number[]): { min: number, minIndex: number, max: number, maxIndex: number } {
    let min = Infinity;
    let max = -Infinity;
    let minIndex = -1;
    let maxIndex = -1;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
  
      if (array[i] > max) {
        max = array[i];
        maxIndex = i;
      }
    }
  
    return { min, minIndex, max, maxIndex };
  }
  
  const array1 = [5, 7, 4, -2, -1, 8];
  const result1 = findMinMax(array1);
  console.log(`min: ${result1.min} index: ${result1.minIndex} max: ${result1.max} index: ${result1.maxIndex}`);
  
  const array2 = [2, -5, -4, 22, 7, 7];
  const result2 = findMinMax(array2);
  console.log(`min: ${result2.min} index: ${result2.minIndex} max: ${result2.max} index: ${result2.maxIndex}`);
  