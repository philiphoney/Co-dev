start();
// dark or light mode
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.getElementById("body").style =
    "background-color: #1c1b22; color: white;";
}

function error() {
  document.getElementById("body").innerText =
    "error / The file cannot be displayed";
}

var filetype;
// start of the Script
function start() {
  var port = location.href;
  var fromstart = port.indexOf("files");
  var href = port.substr(fromstart + 7, port.length);
  var href = href.replaceAll("%20", " ");
  if (href == "") {
    error();
  } else {
    var folderN = href.indexOf("/");
    var filetypeN = href.indexOf(".");
    var folder = href.substr(0, folderN);
    var file = href.substr(folderN + 1, filetypeN - folderN - 1);
    filetype = href.substr(filetypeN + 1, href.length);
    if (localStorage["$" + folder] != null && filetype == "txt") {
      var folderJFS = JSON.parse(localStorage["$" + folder]);
      fileNumber(folderJFS, file);
    } else {
      error();
    }
  }
}

function fileNumber(folder, file) {
  for (let i = 0; i < folder.length; ++i) {
    if (folder[i].name == file && folder[i].type == "txt") {
      document.getElementById("body").innerText = folder[i].content;
      return;
    }
    error();
  }
  error();
}
