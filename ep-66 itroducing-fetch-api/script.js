fetch('https://dummyjson.com/products/add', {  // Corrected URL
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: '12 Gaun',
      category: 'Movie',
      // other product data
    })
  })
  .then(res => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });
