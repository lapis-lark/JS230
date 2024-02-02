function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}
/*
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}


Promise.all([flakyService(), loadData()])
       .then((values) => console.log(values))
       .catch(() => console.log('one or more operations failed'));
*/

const firstResource = new Promise((resolve) =>
  setTimeout(() => resolve("First resource loaded"), 500)
);
const secondResource = new Promise((resolve) =>
  setTimeout(() => resolve("Second resource loaded"), 1000)
);
/*
Promise.race([firstResource, secondResource]).then((value) => console.log(value));
*/
/*
const services = [flakyService(), flakyService(), flakyService()];

Promise.allSettled(services)
       .then((values) => values.forEach(value => console.log(value.status)));



function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // loadData always resolves this time
      resolve("Data loaded");
    }, 1000);
  });
}


const primaryOperation = flakyService();
const fallbackOperation = loadData();

Promise.any([primaryOperation, fallbackOperation]).then(console.log);
*/

function loadMultipleResources(arr) {
  let promises = arr.map(url => {
    return fetch(url)
              .then((response) => response.json())
              .catch(() => "Failed to fetch");
  });

  return Promise.allSettled(promises);
}

loadMultipleResources([
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalidUrl",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
});

// Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Fetched data: Failed to fetch