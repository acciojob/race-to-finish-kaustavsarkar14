window.promises = [];

function getRandomTime() {
  return Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds
}

for (let i = 0; i < 5; i++) {
  window.promises.push(
    new Promise((resolve) => {
      const randomTime = 1
      setTimeout(() => {
        resolve(`Promise ${i + 1} resolved in ${randomTime} seconds`);
      }, randomTime * 1000);
    })
  );
}
Promise.any(promises) 
  .then((result) => {
    output.textContent = result;
  })
  .catch((error) => {
    console.error(error); 
  });
