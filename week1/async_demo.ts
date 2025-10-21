function fakeFetch(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('An error occurred while fetching data');
      }
    }, 2000);
  });
}

fakeFetch()
  .then((result: string) => {
    console.log('Success:', result);
  })
  .catch((error: string) => {
    console.error('Error:', error);
  });

async function (): Promise<void> {
  try {
    const result: string = await fakeFetch();
    console.log('Success:', result);
  } catch (error: unknown) {
    console.error('Error:', error);
  }
}

fetchData();
