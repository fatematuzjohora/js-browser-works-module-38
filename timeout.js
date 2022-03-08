function doSomething() {
    console.log('I am Coding JS')
}



console.log('I am the first');
console.log('I am the second');
// setTimeout(doSomething, 5000 );
setTimeout(function(){
    console.log('I am using VS code');
},5000)
setTimeout( () => {
    console.log('Explore MDN articles')
}, 4000);
console.log('I am the third');
console.log('I am the fourth');