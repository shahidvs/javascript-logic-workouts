const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    const suffix = this.dataset.sizing || ''; 
    // console.log(suffix);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) || '';

}


inputs.forEach(input => {return input.addEventListener('change',handleUpdate);});
inputs.forEach(input => {return input.addEventListener('mousemove',handleUpdate);});

// var text : "react";
// console.log(hhhd);
// var test = "test"

// let hello = "hello";
// let helloFunction = () => {return console.log("hello");};

// helloFunction();

