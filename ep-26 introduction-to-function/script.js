function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'Sabin'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}