let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const checkBox= document.querySelectorAll("input[type='checkbox']");
const numbers="123456789"
const smallLetters=alphabet.toLowerCase()
const symbols="~!@#$%^&*"
const passwordButton = document.querySelectorAll("button");
const inputPassword = document.querySelector("input[type='text']");
const range = document.querySelector("input[type='range']");
function generatePassword() {
    let pass = "";
    for (let num = 0; num < Math.floor(parseInt(range.value) / 10); num++) {
        let randomChar = Math.floor(Math.random() * alphabet.length);
        pass += alphabet[randomChar];
    }
    return pass;
}
passwordButton[0].addEventListener(
    "click",
    () => {
        if(checkBox[0].checked==true && !alphabet.includes(numbers))
    {
        alphabet+=numbers
    }
    else if(checkBox[0].checked==false && alphabet.includes(numbers)){
        alphabet=alphabet.replace(numbers,"")
    }
    if(checkBox[1].checked==true && !alphabet.includes(smallLetters))
    {
        alphabet+=smallLetters
    }
    else if(checkBox[1].checked==false && alphabet.includes(smallLetters)){
        alphabet=alphabet.replace(smallLetters,"")
    }
    if(checkBox[2].checked==true && !alphabet.includes(alphabet))
    {
        alphabet+=symbols
    }
    else if(checkBox[2].checked==false && alphabet.includes(alphabet)){
        alphabet=alphabet.replace(symbols,"")
    }
  inputPassword.value = generatePassword()
    })
passwordButton[1].addEventListener("click", function() {
    if (inputPassword.value != " ") {
        inputPassword.select();
        document.execCommand("Copy");
    }
});
passwordButton[2].onclick = function() {
    inputPassword.value = " ";
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].checked = false;
    }
    range.value = 0;
};