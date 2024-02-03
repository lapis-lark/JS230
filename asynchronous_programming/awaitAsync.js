/*
  code that follows await works similarly to calling .then/.catch on a promise?
  await works with try/catch blocks instead of .catch(), a little more natural

*/
function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log("Downloading file...");
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
}

async function downloadFileAsync() {
  console.log("Downloading file...");

  let response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
  console.log(response)
}

// downloadFileAsync()

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

async function asyncLoadData() {
  try {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });

    console.log(response);
  } catch(err) {
    console.error(err);
  }
}

// asyncLoadData();

async function fetchResource(url) {
  try{
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
  } catch(err) {
    console.error(err);
  } finally {
    console.log('resource fetch attempt made');
  }

}

// fetchResource("https://jsonplaceholder.typicode.com/todos/1");

async function fetchUserProfile(user) {
    try {
      let result = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
      let profile = await result.json();
      console.log(profile);
    } catch(err) {
      console.error(err);
    }

    try {
      let result = await fetch(`https://jsonplaceholder.typicode.com/users/${user}/posts`);
      let posts = await result.json();
      console.log(posts);
    } catch(err) {
      console.error(err);
    }

    try {
      let result = await fetch(`https://jsonplaceholder.typicode.com/users/${user}/comments`);
      let comments = await result.json();
      console.log(comments);
    } catch(err) {
      console.error(err);
    }
}

fetchUserProfile();