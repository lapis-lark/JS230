// 1
function basicCallback(callback, num) {
  return setTimeout(() => {
    callback(num)
  }, 2000);
}

// basicCallback(function(num) {console.log(num**2)}, 5)

// 2
function downloadFile() {
  console.log('downloading file . . .');
  setTimeout(() => {
    console.log('download complete!');
  }, 1500)
}

// downloadFile();

// 3
function processData(arr, callback) {
  setTimeout(() => {
    let newArr = arr.map(callback)
    console.log(newArr);
  }, 1000);
}

// processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]

function waterfallOverCallbacks(callbackArr, num) {
  callbackArr.forEach(callback => {
    num = callback(num);
  });

  console.log(num);
}

const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1); // 8

function startCounter(callback) {
  let stop = false;
  let loops = 0;
  
  let counter = setInterval(() => {
    if (stop) {
      clearInterval(counter);
      return;
    } else {
      stop = callback(loops += 1);
    }
  }, 1000);
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops