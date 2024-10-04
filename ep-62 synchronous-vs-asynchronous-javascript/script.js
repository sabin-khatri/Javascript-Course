const image = document.querySelector('img');
const getImageButton = document.getElementById('get-image-btn');
const blockButton = document.getElementById('block-btn');

// Event listener for getting a random image asynchronously
getImageButton.addEventListener('click', async () => {
  image.src = ''; // Clear the current image
  console.log('Fetching random image...');

  try {
    // Indicating loading state
    getImageButton.textContent = 'Loading...';
    getImageButton.disabled = true;

    // Fetching the image asynchronously from Unsplash API
    const response = await fetch('https://source.unsplash.com/random/200x200');
    
    if (response.ok) {
      const imageUrl = response.url; // Unsplash provides the image URL directly in the response
      image.src = imageUrl; 
      console.log('Image loaded successfully!');
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error fetching image:', error);
  } finally {
    getImageButton.textContent = 'Get Random Image';
    getImageButton.disabled = false;
  }
});

// Event listener for blocking the main thread (synchronous task)
blockButton.addEventListener('click', () => {
  console.log('Blocking the main thread for 3 seconds...');
  
  // Blocking the thread for 3 seconds (synchronous operation)
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // Busy-waiting for 3 seconds
  }
  
  console.log('Main thread is unblocked now!');
});
