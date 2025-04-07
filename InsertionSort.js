function insertionSort(arr) {
  // Iterate over each element starting from the second
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];  // Element to be inserted
    let j = i - 1;

    // Shift elements of the sorted subarray (0 to i-1) to the right
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the correct position
    arr[j + 1] = currentValue;
  }

  return arr;
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
