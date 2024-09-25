const colors = ['red','black','pink','green','yellow','white']
const [color1,color2,color3] = colors
const { 3: color4, 5: color5 } = colors
const user = {
    name: 'Sabin',
    age: 20,
    address: {
      city: 'Biratnagar',
      state: 'Ganesh Mandir',
    },
  }
  
const { name, age } = user
function intro({age, name}) {
    console.log(age, name);
  }
  // intro(user)
  function printColor([r, b,,g]) {
    console.log(r, b, g);
  }
  
  printColor(colors)