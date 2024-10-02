const h1 = document.querySelector('h1')
const input = document.querySelector('input')

window.addEventListener('keypress',(e) =>{
    console.log('code:' ,e.code);
console.log('Value:',e.key);
h1.textContent = `Key Press: ${e.key}`;
});
window.addEventListener('keyup',(e)=>{
    console.log('code:' ,e.code);
    console.log('Value:',e.key);
    h1.textContent = `key Up: ${e.key}`;
})
window.addEventListener('keydown', (e) => {
    console.log('Code: ',e.code);
    console.log('Value: ', e.key);
    h1.textContent = `Key Press: ${e.key}`;
})