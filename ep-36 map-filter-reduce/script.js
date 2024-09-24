const months = ['January', 'February', 'March', 'April', 'May', 'December'];

const capitalMonths = months.map((month, index, array) => {
  
  return month.toUpperCase();
});

console.log(capitalMonths);
const filteredMonths = months.filter((month, index, array) => {
    
    return false;
  });
  
  console.log(filteredMonths);
  const students = [
    { name: 'ali', age: 21 },
    { name: 'bhola', age: 17 },
    { name: 'prajwal', age: 18 },
    { name: 'sabin', age: 23 },
    { name: 'suman', age: 16 },
  ];
  
  const adultStudents = students.filter((student) => {
    return student.age >= 18;
  }).map((student) => {
    return student.name;
  }).filter((student) => {
    return student.includes('A');
  });
  
  console.log(adultStudents);