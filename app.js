//selector
const obj = document.querySelector("#obj");
const text = document.querySelector("#text");
const selectFont = document.querySelector("#selectFont");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");


//create new option
const fonts = ["Monaco", "Helvetica", "Tahoma", "BM Hanna Air", "Copperplate"];


//functions
const changeText = (event) => {
    obj.innerText = event.target.value;
};

const changeColor = (event) => {
    obj.style.color = event.target.value;
};

const changeFontSize = (event) => {
    obj.style.fontSize = event.target.value + "px";
}


//change range in html
fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
fontSize.value = fontSize.min;

//for logic
/* const createNewOption = (text,value) => {
    const option = document.createElement("option");
    option.innerText = text;
    option.value = value;
    return option;
} */
//console.log(createNewOption("Myanmar", "mm"));

//create option for font //using Option constructor
fonts.forEach( font => selectFont.append(new Option(font, font))); //text,value

const changeFontFamily = event => {
    obj.style.fontFamily = event.target.value;
}

//event listening
text.addEventListener("keyup", changeText);
color.addEventListener("change", changeColor);
fontSize.addEventListener("change", changeFontSize);
selectFont.addEventListener("change", changeFontFamily);

/* document.addEventListener("click", event => {
    console.log(event.target);
}); */