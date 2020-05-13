/* eslint-disable no-console */
/* eslint-disable strict */

const binarySearch = (arr, val, start, end, path = []) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? arr.length : end;
  if (start > end) {
    return { index: -1, path };
  }
  const idx = Math.floor((start + end) / 2);
  const item = arr[idx];
  console.log('you made it!');
  path.push(idx);
  if (item === val) {
    return { idx, path };
  } else if (item < val) {
    path.push(idx + 1);
    console.log(path);
    return binarySearch(arr, val, idx + 1, end, path);
  } else if (item > val) {
    path.push(idx - 1);
    return binarySearch(arr, val, start, idx - 1, path);
  }
};

const sortedList1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const sortedList2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
console.log(binarySearch(sortedList1));
