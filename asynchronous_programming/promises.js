/*
  promise: an asynchronous operation that will complete and return a value


let downloadFilePromise = new Promise((resolve, reject) => {
  console.log('downloading file . . .');
    setTimeout(() => {
      resolve('download complete!')
    }, 1500);
});

downloadFilePromise.then(successMessage => {
  console.log(successMessage);
}); 
*/
function processDataPromise(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map(n => n * 2));
    }, 1500);
  });
}


function flakyService() {
  return new Promise((resolve, reject) => {
    let success = Math.random() < 0.6;
    if (success) {
      resolve('service performed successfully!');
    } else {
      reject('service failed :(');
    }
  });
}

// flakyService().then(message => console.log(message))
//             .catch(message => console.log(message))
//             .finally(() => console.log('cleaning up now!'))

function randomPromise() {
  return new Promise((resolve, reject) => {
    resolve(Math.floor(Math.random() * 100) + 1);
  });
}

let x = randomPromise().then(n => n * 2).then(n => console.log(n + 5));


