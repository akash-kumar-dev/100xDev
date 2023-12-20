let btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    console.log(event)
    console.log("button clicked");
})

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log(event);
    console.log("key : ", event.key);
    console.log("code : ", event.code);
    console.log("keyCode : ", event.keyCode);
    console.log("key was pressed.");
})

// inp.addEventListener("keyup", function() {
    // console.log("key was released.");
// })