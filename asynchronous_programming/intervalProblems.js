let counterID;

function startCounting() {
  let i = 0;
  counterID = setInterval(() => {
    console.log(i += 1);
  }, 1000);
}

function stopCounting(id) {
  clearInterval(id);
}

startCounting();
stopCounting(counterID);
