
    // JavaScript to manipulate the DOM
    document.getElementById('changeText').addEventListener('click', function() {
      // Accessing the <h1> element by its ID and modifying its text content
      const titleElement = document.getElementById('title');
      titleElement.textContent = 'Text has been changed!';

      // Accessing the paragraph element using querySelector and changing its content
      const paragraphElement = document.querySelector('.text');
      paragraphElement.textContent = 'The paragraph has also been updated!';
    });
