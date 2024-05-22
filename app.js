var btn = document.getElementById("btn");
btn.addEventListener("click", randomNumber);

function randomNumber(){
    var char =document.getElementById("name"). value;
    var randomIndex = Math.floor(Math.random() * char.length);
    var text =char.charAt(randomIndex);
    document.getElementById("result").innerText = "The random character is "+ text.toUpperCase();
}