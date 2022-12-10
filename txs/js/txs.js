var value = localStorage["txs"];
var text = "";
var scriptname = "";
var jfs = false;

// start txs
if (value.substr(0, 3) == "jfs") {
  jfs = true;
  var endI = value.indexOf("/");
  var folderN = parseFloat(value.substr(3, endI - 3));
  var folder = value.substr(endI + 1, value.length);
  var folderJFS = JSON.parse(localStorage[folder]);
  text = folderJFS[folderN].content;

  document.getElementById("textarea").innerHTML = text;
} else {
  txs();
}

localStorage.removeItem("txs");
function txs() {
  if (localStorage[value] != null) {
    text = localStorage[value];
  } else {
    if (value == undefined) {
    } else {
      localStorage.setItem(value, "");
    }
  }
  scriptname = value;
  document.getElementById("textarea").innerHTML = text;
}

// Commands
function logPostTXS(input) {
  var input0 = input.replace(":", "");

  if (input0 == "w") {
    savedata();
  }
  if (input0 == "q") {
    localStorage.setItem("txs", "close");
  }
  if (input0 == "wq") {
    savedata();
    localStorage.setItem("txs", "close");
  }
}

// enter
document.addEventListener("keydown", (event) => {
  const keyCode = event.key;
  if (event.keyCode == 13) {
    var inputlp = document.getElementById("input").value;
    logPostTXS(inputlp);
    document.getElementById("input").value = "";
  }
});

function savedata() {
  if (jfs == true) {
    folderJFS[folderN].content = document.getElementById("textarea").value;
    localStorage.setItem(folder, JSON.stringify(folderJFS));
  } else {
    localStorage.setItem(scriptname, document.getElementById("textarea").value);
  }
}
