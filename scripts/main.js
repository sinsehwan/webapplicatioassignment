//let myHeading = document.querySelector("h1");

//myHeading.textContent = "Hello world!";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);

//document.querySelector("html").onclick = function() {
//    alert("Ouch! Stop poking me!");
//};

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/kawai.jpg") {
        myImage.setAttribute("src", "images/wow.png")
    }
    else {
        myImage.setAttribute("src", "images/kawai.jpg");
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('이름 입력')
    if (!myName) {
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = "kawai is cool, " + myName;
    }

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'kawai is cool, ' + storedName;
    }
}

myButton.addEventListener("click", () => {
    setUserName();
})