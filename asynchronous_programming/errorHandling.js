
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

/*
flakyService().then(message => console.log(message))
            .catch(message => console.log(message))
            .finally(() => console.log('cleaning up now!'));
*/

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

/*
fetchUserData().catch(message => console.log(message['error']))
               .finally(() => console.log('fetching complete'));
*/

function retryOperation(operationFunc) {
  let retryCount = 0;

  function attempt() {
    operationFunc().catch((err) => {
      if (retryCount < 3) {
        retryCount += 1;
        console.log(`failure #${retryCount}`);
        return attempt();
      } else {
        console.log('multiple failures, aborting operation');
        throw err;
      }
    });
  }

  attempt();
}

/*
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.8
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);
*/

function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}
/*
mockAsyncOp().then(message => console.log(message))
           .catch(message => console.log(message))
           .finally(() => console.log('operation attempted'));

*/

function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve('data loaded')
    } else {
      reject('network error')
    }
  }); 
}

loadData().then(console.log)
         .catch((message) => {
            console.log(message);
            return (new Promise((resolve, reject) => { reject() }))
          })
          .catch(() => console.log('using cached data'));