console.log(document)
const Press = document.getElementById("presshold")
const var1 = document.getElementById("Output")
const Button1 = document.getElementById("btn1")
const Double = document.getElementById("doubleClick")
const img1 = document.getElementById("Image1")
const img2 = document.getElementById("Image1")
const Input = document.getElementById("input")
const Respo = document.getElementById("Response")
const Selection= document.getElementById("Select")

const defaultName = "Hello Pipollss"

console.log(var1)
console.log(Button1)
console.log(Double)



Button1.addEventListener(
    "click", function (){
        Respo.innerHTML = "welcomee to javascript"
    }
)

Double.addEventListener(
    "dblclick", function () {
        Respo.innerHTML = "DoubleClicks"
    }
)

Press.addEventListener(
    "mousedown", function (){
        Respo.innerHTML = "Hawak mo ang beat"
        Press.style.transform = "scale(1.1)"
        Press.style.backgroundColor= "Red"
    }
)

Press.addEventListener(
    "mouseup", function (){
        Respo.innerHTML = "Aruyyy Binitawan"
        Press.style.transform = "scale(1)"
        Press.style.backgroundColor= "#facc15"
    }
)


img1.addEventListener(
    "mouseover", function (){
        img1.style.transform = "scale(1)"
        Respo.innerHTML = "mouse reached the image"
    }
)

img1.addEventListener(
    "mouseout", function (){
        img1.style.transform = "scale(1.1)"
        Respo.innerHTML = "mouse leaves the image"
    }
)

Input.addEventListener (
    "focus", function(){
        Input.style.backgroundColor= "Yellow"
    }
)

Input.addEventListener (
    "blur", function(){
        Input.style.backgroundColor= "white"
    }
)

Input.addEventListener (
    "change", function(){
        var1.innerHTML = 
        "Hello: " + Input.value + "!"
    }
)

Input.addEventListener(
    "input", function(){
    let currentValue = Input.value.trim()

    if(currentValue === ""){
        var1.innerHTML = defaultName
    }
    else{
        var1.innerHTML = Input.value
    }
    }
)
