var value = localStorage["txs"];
var text = "";
var scriptname = ""

// start txs
txs();
localStorage.removeItem('txs'); 
function txs() {
if (localStorage[value] != null) {text = localStorage[value]}
else {if (value == undefined) {} else {
localStorage.setItem(value, ""); }}
scriptname = value
document.getElementById("textarea").innerHTML = text;
}

// Commands 
function logPostTXS(input) {
    var input0 = input.replace(":", "")
    
    if (input0 == "w") {
    localStorage.setItem(scriptname, document.getElementById("textarea").value);
    }
    if (input0 == "q") {
    localStorage.setItem('txs', 'close'); 
    }
    if (input0 == "wq") {
    localStorage.setItem(scriptname, document.getElementById("textarea").value);
    localStorage.setItem('txs', 'close'); 
    }
}

// enter
document.addEventListener('keydown', (event) => {
    const keyCode = event.key;
    if(event.keyCode == 13){
       var inputlp = document.getElementById("input").value;
        logPostTXS(inputlp);
        document.getElementById("input").value = "";
    }
})