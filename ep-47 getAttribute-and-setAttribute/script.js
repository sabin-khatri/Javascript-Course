document.addEventListener("DOMContentLoaded", function (){
    const heading = document.getElementById("hii");
    const helloValue = heading.getAttribute("hello")
    console.log(" initial 'hello' attribute value:", helloValue);
    heading.setAttribute("hello", "newworld");
    console.log("updated 'hello' attribute value:", heading.getAttribute("hello"));
    heading.setAttribute("greeting", "helloWorld");
    console.log("New 'greeting' attribute value:", heading.getAttribute("greeting"));
});