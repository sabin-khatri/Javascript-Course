function a(b){
    console.dir(b);
    b();
}
a(function() {
    console.log('Hiiii');
})