/*
* [co-dev]{@link https://github.com/philiphoney/Co-dev/}
*
* @author Philip, Philiphoney
* @license MIT
* @copyright Philip, philiphoney 2022
*
*/

var tag = "";
var app = "co-dev";
let keyclipboard = {};
var con0 = 0;
var con1 = 1;
var xcon = false;
var cmd_counter = 0;
var f4; var t4; var f6; var t6; var f8; var t8; var f12; var t12; var f16; var t16; var f18; var t18; var f24; var t24;

setTimeout (time_evend, 0); function time_evend() {
    if (localStorage["co-dev-theme"] != null) {
        var theme = localStorage["co-dev-theme"]
        document.getElementById("body").style = (theme);
    }
}

function logPost() {
    var inputCO1 = document.getElementById("input").value;
    var inputCO = inputCO1.toLowerCase();
    var textlog = '<span id="error">The command "'+ inputCO1 +'" is either misspelled orcould not be found.</span></br>';
    var error = '<span id="error">The command "'+ inputCO1 +'" is either misspelled orcould not be found.</span></br>';
    if (inputCO == "") {error();}
    con0 += 1;
    con1 += 1;
    keyclipboard[con0] = inputCO1;
    xcon = true;
    cmd_counter += 1;

    // Commands+
    var comdplus = inputCO.split("");
    var cmdW3 = (comdplus[0]+ comdplus[1]+ comdplus[2]);
    var cmdW4 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]);
    var cmdW5 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]);
    var cmdW6 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]);
    var cmdW7 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]);
    var cmdW8 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]+ comdplus[7]);
    var cmdW12 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]+ comdplus[7]+ comdplus[8]+ comdplus[9]+ comdplus[10]+ comdplus[11]);
    var cmdW13 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]+ comdplus[7]+ comdplus[8]+ comdplus[9]+ comdplus[10]+ comdplus[11]+ comdplus[12]);
    var cmdW16 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]+ comdplus[7]+ comdplus[8]+ comdplus[9]+ comdplus[10]+ comdplus[11]+ comdplus[12]+ comdplus[13]+ comdplus[14]+ comdplus[15]);
    var cmdW18 = (comdplus[0]+ comdplus[1]+ comdplus[2]+ comdplus[3]+ comdplus[4]+ comdplus[5]+ comdplus[6]+ comdplus[7]+ comdplus[8]+ comdplus[9]+ comdplus[10]+ comdplus[11]+ comdplus[12]+ comdplus[13]+ comdplus[14]+ comdplus[15]+ comdplus[16]+ comdplus[17]);


    // Commands
    if (inputCO == "info") {
    textlog = '✨ Co Dev Web Version [v8.1] </br>';}
    if (inputCO == "cls" || inputCO == "clear") {
    document.getElementById("content-log").innerHTML = ""; textlog = "";}
    if (inputCO == "exit") { window.close(); textlog = '<span id="error">exit could not be executed</span>'+ '</br>';}
    if (inputCO == "restart") {textlog = '</br>'; window.location.href = "./"; }
    if (inputCO == "help") {
    textlog = `
    - cls / clear         = Clear </br>
    - info                = Infos about Co Dev </br>
    - exit                = Close the Co Dev </br>
    - restart             = Restart the Window </br>
    - system              = Infos about my OS </br>
    - hosthref            = Website href </br>
    - hostname            = Website Host Name </br>
    - webprotokoll        = Website Protokoll </br>
    - path                = Path Name </br>
    - port                = Port Name </br>
    - acn / appcodename   = App Code Name </br>
    - an / appname        = App name </br>
    - ce / cookieenabled  = Cookies enabled ?</br>
    - product             = Product </br>
    - av / appversion     = Appversion </br>
    - ua / useragent      = User Agent </br>
    - pf / platform       = Platform </br>
    - lang / language     = Language in the Browser </br>
    - on / online         = Online ? </br>
    - java / javaenabled  = Is Java Enabled </br>
    - pdf                 = Browser supports inline viewing of PDF files </br>
    - sw / serviceworker  = Service worker </br>
    - dnt / donottrack = Do not track </br>
    - gh / github  = Co Dev on GitHub </br>
    - open [file name]    = Open files or links </br>
    - rpw [true(with special characters) or false(without special character)] = Create random password </br>
    - sha(1, 224, 256, 384, 512) [text] = Convert text to a hash </br>
    - shap(1, 224, 256, 384, 512) [text] = Convert text to a hash </br>
    - ls / localstorage   = List the Local Storage </br>
    - ls / localstorage clear [or the name of the Key] = Local storage has been deleted </br>
    - install theme [your theme code] = For more informations <a target="_blank" href="https://github.com/philiphoney/Co-dev/tree/main/theme">https://github.com/philiphoney/Co-dev/tree/main/theme</a> </br>
    - remove theme = Remove the theme </br>
    `;}
    if (inputCO == "system") {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) { style = "dark"; } else { style = "light"; }
    textlog = `[⨀] style: `+ style + `</br>`}
    if (inputCO == "hosthref") {
    textlog = 'Host name: ' +  window.location.href + '</br>';}
    if (inputCO == "hostname") {
    textlog = 'Host name: ' + window.location.hostname + '</br>';}
    if (inputCO == "webprotokoll") {
    textlog = 'Webprotokoll: ' + window.location.protocol + '</br>';}
    if (inputCO == "path") {
    textlog = 'Pathname: ' + window.location.pathname + '</br>';}
    if (inputCO == "port") {
    textlog = 'Pathname: ' + window.location.port + '</br>';}
    if (inputCO == "acn" || inputCO == "appcodename") {
    textlog = 'App code name: ' + navigator.appCodeName + '</br>';}
    if (inputCO == "an" || inputCO == "appname") {
    textlog = 'App name: ' + navigator.appName + '</br>';}
    if (inputCO == "ce" || inputCO == "cookieenabled") {
    textlog = 'Cookies Enabled: <span id="evend">' + navigator.cookieEnabled + '</span></br>';}
    if (inputCO == "product") {
    textlog = 'Product: ' + navigator.product + '</br>';}
    if (inputCO == "av" || inputCO == "appversion") {
    textlog = 'App Version: ' + navigator.appVersion + '</br>';}
    if (inputCO == "ua" || inputCO == "useragent") {
    textlog = 'User Agent: ' + navigator.userAgent + '</br>';}
    if (inputCO == "pf" || inputCO == "platform") {
    textlog = 'Plat form: ' + navigator.platform + '</br>';}
    if (inputCO == "lang" || inputCO == "language") {
    textlog = 'Language: ' + navigator.language + '</br>';}
    if (inputCO == "on" || inputCO == "online") {
    textlog = 'Online: <span id="evend">' +  navigator.onLine + '</span></br>';}
    if (inputCO == "java" || inputCO == "javaenabled") {
    textlog = 'Java Enabled: <span id="evend"> ' + navigator.javaEnabled() + '</span></br>';}
    if (inputCO == "pdf") {
    if ('application/pdf' in navigator.mimeTypes) {
    const { description, suffixes } = navigator.mimeTypes['application/pdf'];
    var pdf = (`Description: ${description}, Suffix: ${suffixes}`);} else {pdf = "error"}
    textlog = 'Browser supports inline viewing of PDF files: ' + pdf + '</br>';}
    if (inputCO == "sw" || inputCO == "serviceworker") {
    if ('serviceWorker' in navigator) {serviceWorker = "true"}else {serviceWorker = "false"}
    textlog = 'Browser supports service workers: <span id="evend">' + serviceWorker + '</span></br>';}
    if (inputCO == "dnt" || inputCO == "donottrack") {
    var dnt = navigator.doNotTrack
    if (dnt == 1) {dnt = true} else {dnt = false}
    textlog = ' Do Not Track: <span id="evend">' + dnt + '</span></br>';}
    if (cmdW4 == "open") {
    let openPlus = [inputCO.replace("open ", ``)]; window.open(openPlus);
    textlog = 'The file ' + openPlus +' was opened' + '</br>';}
    if (inputCO == "gh" || inputCO == "github") { window.open('https://github.com/philiphoney/Co-dev');
    textlog = ''+ '</br>';}
    if (cmdW3 == "rpw") {let pwPlus = [inputCO.replace("rpw ", ``)];
    var pwv2 = pwPlus[0].substr(0, 2); f4 = pwPlus[0].search ("4 false"); t4 = pwPlus[0].search ("4 true"); f6 = pwPlus[0].search ("6 false"); t6 = pwPlus[0].search ("6 true"); f8 = pwPlus[0].search ("8 false"); t8 = pwPlus[0].search ("8 true"); f12 = pwPlus[0].search ("12 false"); t12 = pwPlus[0].search ("12 true"); f16 = pwPlus[0].search ("16 false"); t16 = pwPlus[0].search ("16 true"); f18 = pwPlus[0].search ("18 false"); t18 = pwPlus[0].search ("18 true"); f24 = pwPlus[0].search ("24 false"); t24 = pwPlus[0].search ("24 true"); fpw2();
    if (pwPlus == "false") {var rpwPlus = outputpw0} if (pwPlus == "true") {var rpwPlus = outputpw1} if (rpwPlus2 == true) {var rpwPlus = outputpw2}
    navigator.clipboard.writeText(rpwPlus); textlog = "Random password:"+ '</br>' + rpwPlus + '</br>';
    if (pwPlus == "true" || pwPlus == "false" || rpwPlus2 == true){}else {textlog = error;}}
    // Local Storage
    if (inputCO == "ls" || inputCO == "localstorage" ) {textlog = 'Local Storage list:' + '</br>' + '-------------------' + '</br>';}
    if (cmdW8 == "ls clear") { if (inputCO == "ls clear") {localStorage.clear();
    textlog = 'All local storage has been deleted !' + '</br>';} else {let lsPlus = [inputCO.replace("ls clear ", ``)]; localStorage.removeItem(lsPlus);
    textlog = 'The local storage '+ lsPlus +' was deleted'+ '</br>';}}
    if (cmdW18 == "localstorage clear") { if (inputCO == "localstorage clear") {localStorage.clear();
    textlog = 'All local storage has been deleted !' + '</br>';} else {let lsPlus = [inputCO.replace("localstorage clear ", ``)]; localStorage.removeItem(lsPlus);
    textlog = 'The local storage '+ lsPlus +' was deleted'+ '</br>';}}
    if (cmdW13 == "install theme") {let themePlus = [inputCO.replace("install theme ", ``)]; localStorage.setItem('co-dev-theme', themePlus);
    textlog = 'Theme has been installed. To load the theme you have to restart it' + '</br>';}
    if (inputCO == "remove theme") {localStorage.setItem('co-dev-theme', '');
    textlog = 'The theme has been deleted to complete the change restart it' + '</br>';}
    // SHA
    if (cmdW4 == "sha1") {
    var sha1Plus = inputCO1.substr(5, 99999999999); let outsha1 = sha1(sha1Plus); textlog = 'SHA1 Hash: '+'</br>' + outsha1 + '</br>'; navigator.clipboard.writeText(outsha1);
    if(sha1Plus == ""){textlog = error;}}
    if (cmdW6 == "sha224") {
    var sha224Plus = inputCO1.substr(7, 99999999999); let outsha224 = sha224(sha224Plus); textlog = 'SHA224 Hash: '+'</br>' + outsha224 + '</br>'; navigator.clipboard.writeText(outsha224);
    if(sha224Plus == ""){textlog = error;}}
    if (cmdW6 == "sha256") {
    var sha256Plus = inputCO1.substr(7, 99999999999); let outsha256 = sha256(sha256Plus); textlog = 'SHA256 Hash: '+'</br>' + outsha256 + '</br>'; navigator.clipboard.writeText(outsha256);
    if(sha256Plus == ""){textlog = error;}}
    if (cmdW6 == "sha384") {
    var sha384Plus = inputCO1.substr(7, 99999999999); let outsha384 = sha384(sha384Plus); textlog = 'SHA384 Hash: '+'</br>' + outsha384 + '</br>'; navigator.clipboard.writeText(outsha384);
    if(sha384Plus == ""){textlog = error;}}
    if (cmdW6 == "sha512") {
    var sha512Plus = inputCO1.substr(7, 99999999999); let outsha512 = sha512(sha512Plus); textlog = 'SHA512 Hash: '+'</br>' + outsha512 + '</br>'; navigator.clipboard.writeText(outsha512);
    if(sha512Plus == ""){textlog = error;}}
    // SHAP
    if (cmdW5 == "shap1") {
    var shap1Plus = inputCO1.substr(6, 99999999999); let outshap1 = shap1(shap1Plus); textlog = 'SHAP1 Hash: '+'</br>' + outshap1 + '</br>'; navigator.clipboard.writeText(outshap1);
    if(shap1Plus == ""){textlog = error;}}
    if (cmdW7 == "shap224") {
    var shap224Plus = inputCO1.substr(8, 99999999999); let outshap224 = shap224(shap224Plus); textlog = 'SHAP224 Hash: '+'</br>' + outshap224 + '</br>'; navigator.clipboard.writeText(outshap224);
    if(shap224Plus == ""){textlog = error;}}
    if (cmdW7 == "shap256") {
    var shap256Plus = inputCO1.substr(8, 99999999999); let outshap256 = shap256(shap256Plus); textlog = 'SHAP256 Hash: '+'</br>' + outshap256 + '</br>'; navigator.clipboard.writeText(outshap256);
    if(shap256Plus == ""){textlog = error;}}
    if (cmdW7 == "shap384") {
    var shap384Plus = inputCO1.substr(8, 99999999999); let outshap384 = shap384(shap384Plus); textlog = 'SHAP384 Hash: '+'</br>' + outshap384 + '</br>'; navigator.clipboard.writeText(outshap384);
    if(sha384pPlus == ""){textlog = error;}}
    if (cmdW7 == "shap512") {
    var shap512Plus = inputCO1.substr(8, 99999999999); let outshap512 = shap512(shap512Plus); textlog = 'SHAP512 Hash: '+'</br>' + outshap512 + '</br>'; navigator.clipboard.writeText(outshap512);
    if(shap512Plus == ""){textlog = error;}}

    // Time
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    var time = (h + ":" + m + ":" + s);
    document.getElementById("content-log").innerHTML += `<log><span id="line">◜</span><span id="log-i"><span id="line">[</span>` + app + `<span id="line">] </span>`+ time +`</span><br><span id="line">◟</span><span id="log-input">`+ tag +`</span><span id="log-input">${input.value}</span><br><span id="text">`+ textlog +`<span id="co`+ cmd_counter +`"></span></span></log></br>`;
    window.scrollTo(0,document.body.scrollHeight);

    if (inputCO == "localstorage" || inputCO == "ls") {
    for (let i=0; i < localStorage.length; i++) {
    let storageKey = localStorage.key(i);
    document.getElementById("co"+ cmd_counter).innerHTML += storageKey + ' : ' + localStorage.getItem(storageKey) +'</br>';
    window.scrollTo(0,document.body.scrollHeight);
    }
}
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

document.addEventListener('keydown', (event) => {
    const keyCode = event.key;
    if(event.keyCode == 13){
        logPost();
        document.getElementById("input").value = "";
    }

    if(event.keyCode == 38){
        con1 -= 1;
       var keyoutput = keyclipboard[con1];
        document.getElementById("input").value = keyoutput;
       var keytest = document.getElementById("input").value;
       if (keytest == "undefined") {
        document.getElementById("input").value = "";
       }
       if (keytest == "undefined" && xcon == true) {
        document.getElementById("input").value = keyclipboard[1];
       }
    }

    if(event.keyCode == 40){
        con1 += 1;
       var keyoutput = keyclipboard[con1];
        document.getElementById("input").value = keyoutput;
        var keytest = document.getElementById("input").value;
       if (keytest == "undefined") {
        document.getElementById("input").value = "";
       }
    }
});