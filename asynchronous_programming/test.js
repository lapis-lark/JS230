let promise1 = Promise.reject(0);
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
let promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
let promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));