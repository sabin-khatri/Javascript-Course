const box = document.getElementById('box');
const message = document.getElementById('message');

// Click event
box.addEventListener('click', function() {
  message.textContent = 'Box clicked!';
});

// Double-click event
box.addEventListener('dblclick', function() {
  message.textContent = 'Box double-clicked!';
});

// Mouseover event
box.addEventListener('mouseover', function() {
  message.textContent = 'Mouse is over the box!';
  box.style.backgroundColor = 'lightgreen';
});

// Mouseout event
box.addEventListener('mouseout', function() {
  message.textContent = 'Mouse left the box!';
  box.style.backgroundColor = 'lightblue';
});

// Mousemove event
box.addEventListener('mousemove', function(event) {
  message.textContent = `Mouse moving inside the box! X: ${event.clientX}, Y: ${event.clientY}`;
});