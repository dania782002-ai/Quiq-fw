function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    n--;
  } while (swapped);

  return arr;
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(bubbleSort(a));
