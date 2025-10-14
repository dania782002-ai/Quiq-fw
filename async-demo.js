function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('An error occurred while fetching data');
      }
    }, 2000);
  });
}
fakeFetch()
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
async function fetchData() {
  try {
    const result = await fakeFetch();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
