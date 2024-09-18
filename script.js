let result = document.getElementById("result")
let input = document.getElementById("input")
let btn = document.getElementById("btn")
let rePlay = document.getElementById("rePlay")
let preGuess = document.getElementById("preGuess")
let guessRemaining = document.getElementById("guessRemaining")

preGuess.innerText = 0;
guessRemaining.innerText = 10;
btn.addEventListener("click", () => {
    if (input.value == '' || input.value > 5) {
        alert("Please Enter any number between 1 and 5")
    }else{
        checkValue()
        if (checkValue()) {
            result.innerText = "Yohoo🥳"
            preGuess.innerText++
            guessRemaining.innerText--;
            input.value = '';
           
        }else{
            result.innerText = "Opss!🥹";
            guessRemaining.innerText--;
            input.value = '';
        }
        if(guessRemaining.innerText == 0){
            result.innerText = `Your Total Score: ${preGuess.innerText}`;
            btn.remove();
        }
    }
})

function randomNum(){
    let num = Math.floor(Math.random() * 5)
    return num
}

function checkValue(){
    let inputValue = input.value;
    let randomValue = randomNum();
    if(inputValue == randomValue){
        return true;
    }else{
        return false;
    }
}
rePlay.addEventListener("click", () => {
    speak("My name is shibsankar das lets play together")
    window.location.reload();
})

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    // text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak)
}
