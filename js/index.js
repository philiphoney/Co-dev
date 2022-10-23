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
let keyclipboard = [];
var con0 = 0;
var con1 = 1;
var xcon = false;
var cmd_counter = 0;
var inputCO;
let doPlus;
var error;
var textlog;
var theme;
var font;
var live_input;
var view = false;
let history = [];
var c_his = -1;
var co_active = false
var inputCO1 = "";
var f4; var t4; var f6; var t6; var f8; var t8; var f12; var t12; var f16; var t16; var f18; var t18; var f24; var t24;

setTimeout (time_evend, 0); function time_evend() {
    if (localStorage["co-dev-theme"] != null) {
        var theme = localStorage["co-dev-theme"]
        document.getElementById("body").style = (theme + font);
    }
    if (localStorage["co-dev-font"] != null) {
        var font0 = localStorage["co-dev-font"]
        var font = "--font: "+font0;
        document.getElementById("body").style = (font + theme);
    }
}

function logPost() {
    document.getElementById("input").setAttribute("placeholder", "");
    inputCO1 = document.getElementById("input").value;
    inputCO = inputCO1.toLowerCase();
    textlog = '<span id="error">The command "'+ inputCO1 +'" is either misspelled orcould not be found.</span></br>';
    error = '<span id="error">The command "'+ inputCO1 +'" is either misspelled orcould not be found.</span></br>';
    if (inputCO == "") {error();}
    xcon = true;
    con0 += 1;
    con1 += 1;
    c_his += 1;
    cmd_counter += 1;
    keyclipboard[con0] = inputCO1;
    history[c_his] = inputCO;

    // Commands+
    var cmdW2 = inputCO.substr(0,2);
    var cmdW3 = inputCO.substr(0,3);
    var cmdW4 = inputCO.substr(0,4);
    var cmdW5 = inputCO.substr(0,5);
    var cmdW6 = inputCO.substr(0,6);
    var cmdW7 = inputCO.substr(0,7);
    var cmdW8 = inputCO.substr(0,8);
    var cmdW9 = inputCO.substr(0,9);
    var cmdW10 = inputCO.substr(0,10);
    var cmdW12 = inputCO.substr(0,12);
    var cmdW13 = inputCO.substr(0,13);
    var cmdW16 = inputCO.substr(0,16);
    var cmdW18 = inputCO.substr(0,18);
    var cmdW19 = inputCO.substr(0,19);

    // Commands
    if (inputCO == "info") {
    textlog = '✨ Co dev Web Version [v11.2] </br>';}
    if (inputCO == "cls" || inputCO == "clear") {
    document.getElementById("content-log").innerHTML = ""; textlog = "";}
    if (inputCO == "exit") { window.close(); textlog = '<span id="error">exit could not be executed</span>'+ '</br>';}
    if (inputCO == "restart") {textlog = '</br>'; window.location.href = "./"; }
    if (inputCO == "help") {
    textlog = `
    • cls / clear         = Clear </br>
    • info                = Infos about Co Dev </br>
    • exit                = Close the Co Dev </br>
    • restart             = Restart the Window </br>
    • system              = Infos about my OS </br>
    • history             = Recall your previous commands </br>
    • hosthref            = Website href </br>
    • hostname            = Website Host Name </br>
    • webprotokoll        = Website Protokoll </br> 
    • path                = Path Name </br>
    • port                = Port Name </br>
    • acn / appcodename   = App Code Name </br>
    • an / appname        = App name </br>
    • ce / cookieenabled  = Cookies enabled ?</br>
    • product             = Product </br>
    • av / appversion     = Appversion </br>
    • ua / useragent      = User Agent </br>
    • pf / platform       = Platform </br>
    • lang / language     = Language in the Browser </br>
    • on / online         = Network status </br>
    • java / javaenabled  = Is Java Enabled </br>
    • pdf                 = Browser supports inline viewing of PDF files </br>
    • sw / serviceworker  = Service worker </br>
    • dnt / donottrack = Do not track </br>
    • gh / github  = Co Dev on GitHub </br>
    • open [file name]    = Open files or links </br>
    • rpw [true(with special characters) or false(without special character)] = Create random password </br>
    • rhash = Create random hash </br>
    • sha(1, 224, 256, 384, 512) [text] = Convert text to a hash </br>
    • ls / localstorage   = List the Local Storage </br>
    • ls / localstorage add key=[key name] value=[value name] = Create a local storage </br>
    • ls / localstorage clear = All local storage has been deleted </br>
    • install theme [your theme code] = For more informations <a target="_blank" href="https://github.com/philiphoney/Co-dev/tree/main/theme">https://github.com/philiphoney/Co-dev/tree/main/theme</a> </br>
    • remove theme = Remove the theme </br>
    • remove ls / localstorage [key name] = The key and the value are deleted </br>
    • google, bing etc. [your search term] = Search in the web </br>
    • browser = list all bowsers we provide </br>
    • date = Show for just all dates </br>
    • font = What font is supported </br>
    • font [your font] = Changes the font </br>
    • cdn [your link] = Create a CDN for your GitHub script with <a target="_blank" href="https://www.jsdelivr.com/">jsDeliv</a> </br>
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
    textlog = 'Do Not Track: <span id="evend">' + dnt + '</span></br>';}
    if (cmdW4 == "open") {
    let openPlus = [inputCO.replace("open ", ``)]; window.open(openPlus);
    textlog = 'The file ' + openPlus +' was opened' + '</br>';}
    if (inputCO == "gh" || inputCO == "github") { window.open('https://github.com/philiphoney/Co-dev');
    textlog = ''+ '</br>';}
    if (cmdW3 == "rpw") {let pwPlus = [inputCO.replace("rpw ", ``)];
    f4 = pwPlus[0].search ("4 false"); t4 = pwPlus[0].search ("4 true"); f6 = pwPlus[0].search ("6 false"); t6 = pwPlus[0].search ("6 true"); f8 = pwPlus[0].search ("8 false"); t8 = pwPlus[0].search ("8 true"); f12 = pwPlus[0].search ("12 false"); t12 = pwPlus[0].search ("12 true"); f16 = pwPlus[0].search ("16 false"); t16 = pwPlus[0].search ("16 true"); f18 = pwPlus[0].search ("18 false"); t18 = pwPlus[0].search ("18 true"); f24 = pwPlus[0].search ("24 false"); t24 = pwPlus[0].search ("24 true");     t28 = pwPlus[0].search ("28 true"); f28 = pwPlus[0].search ("28 false"); t32 = pwPlus[0].search ("32 true"); f32 = pwPlus[0].search ("32 false"); fpw2(); ;
    if (pwPlus == "false") {var rpwPlus = outputpw0} if (pwPlus == "true") {var rpwPlus = outputpw1} if (rpwPlus2 == true) {var rpwPlus = outputpw2}
    navigator.clipboard.writeText(rpwPlus); textlog = "Random password:"+ '</br>' + rpwPlus + '</br>';
    if (pwPlus == "true" || pwPlus == "false" || rpwPlus2 == true){}else {textlog = error;}}
    if (inputCO == "date") {textlog = ''}
    if (inputCO == "rhash") {
    textlog = 'Random hash: ' + '</br>' + rhash() + '</br>'}
    if (inputCO == "font") {
    textlog = `<span style="font-family: 'Roboto Mono', monospace;">• Roboto Mono</span>`+`</br>`+`<span style="font-family: 'Mukta', sans-serif;">• Mukta</span>`+`</br>`+`<span style="font-family: 'Inconsolata', monospace;">• Inconsolata</span>` + `</br>`;}
    if (cmdW5 == "font ") {let fontPlus = [inputCO.replace("font ", ``)];
    if (fontPlus == "roboto mono") {localStorage.setItem('co-dev-font', "'Roboto Mono', monospace;");}
    if (fontPlus == "mukta") {localStorage.setItem('co-dev-font', "'Mukta', sans-serif;");}
    if (fontPlus == "inconsolata") {localStorage.setItem('co-dev-font', "'Inconsolata', monospace;");}
    textlog = 'To see the writing you have to restart once' + '</br>';}
    if (inputCO == "history") {
    textlog = 'history:'+'</br>' + '--------' + '</br>';}
    // Local Storage
    if (inputCO == "ls" || inputCO == "localstorage" ) {textlog = 'Local Storage list:' + '</br>' + '-------------------' + '</br>';}
    if (inputCO == "ls clear" || inputCO == "localstorage clear") {localStorage.clear();
    textlog = 'All local storage has been deleted !' + '</br>';}
    if (cmdW18 == "localstorage clear" ) {localStorage.clear();
    textlog = 'All local storage has been deleted !' + '</br>';}
    if (cmdW6 == "ls add") {localstorage();
    if (localstorage() == error) {} else {
    textlog = 'The local storage '+localstorage()+' was created' + '</br>';}}
    if (cmdW16 == "localstorage add") {localstorage();
    if (localstorage() == error) {} else {
    textlog = 'The local storage '+localstorage()+' was created' + '</br>';}}
    if (cmdW13 == "install theme") {let themePlus = [inputCO.replace("install theme ", ``)]; localStorage.setItem('co-dev-theme', themePlus);
    textlog = 'Theme has been installed. To load the theme you have to restart it' + '</br>';}
    // JSD / CDN
    if (cmdW3 == "cdn") {
    var jsdPlus = inputCO1.substr(4, inputCO1.length);jsd(jsdPlus);
    if (jsd_output() == "error") {
    textlog = '<span id="warning">⚠️ The '+jsdPlus+' file cannot be CDN converted</span>'+'</br>';
    }else {
    var dlink0 = inputCO1.substr(4, 5);
    var linktest0 = inputCO.substr(4, 3);
    var linktest1 = inputCO.substr(4, 2);
    if (dlink0 == "https") {d_http = [jsdPlus.replace("https://", ``)];}
    if (dlink0 == "http:") {d_http = [jsdPlus.replace("http://", ``)];}
    // npm / gh / wp
    if (linktest0 == "npm" || linktest1 == "gh" || linktest1 == "wp") {
    var lt = jsdPlus.substr(0, jsdPlus.length);
    var lt1 = lt.indexOf("/");
    var d_server = lt.substr(0, lt1);
    var folders = lt.substr(lt1, lt.length);
    } else {
    var dhttp = d_http[0].indexOf("/");
    d_server = d_http[0].substr(0, dhttp);
    folders = [d_http[0].replace(d_server, ``)];
    }
    if (dlink0 == "https" || dlink0 == "http:" || d_server == "gh") {textlog = '<span id="d"><span style="background-color: var(--d-color-server-github);">'+d_server+'</span>'+'<span style="background-color: var(--d-color-folder);">'+folders+'</span></span>' + '</br>'+'Jsdelivr link:' + '</br>'+jsd_output()+'</br>'; navigator.clipboard.writeText(jsd_output());+ '</br>';}
    if (d_server == "npm") {textlog = '<span id="d"><span style="background-color: var(--d-color-server-npm);">'+d_server+'</span>'+'<span style="background-color: var(--d-color-folder);">'+folders+'</span></span>' + '</br>'+'Jsdelivr link:' + '</br>'+jsd_output()+'</br>'; navigator.clipboard.writeText(jsd_output());+ '</br>';}
    if (d_server == "wp") {textlog = '<span id="d"><span style="background-color: var(--d-color-server-wp);">'+d_server+'</span>'+'<span style="background-color: var(--d-color-folder);">'+folders+'</span></span>' + '</br>'+'Jsdelivr link:' + '</br>'+jsd_output()+'</br>'; navigator.clipboard.writeText(jsd_output());+ '</br>';}}
    if (jsdPlus == "cdn" || jsdPlus == "") {textlog = error}}
    // Remove
    if (inputCO == "remove theme") {localStorage.removeItem('co-dev-theme');
    textlog = 'The theme has been deleted to complete the change restart it' + '</br>';}
    if (cmdW9 == "remove ls") {let rlsPlus = [inputCO.replace("remove ls ", ``)];
    localStorage.removeItem(rlsPlus);
    textlog = 'The local storage '+rlsPlus+' has been deleted' + '</br>';}
    if (cmdW19 == "remove localstorage") {let rlsPlus = [inputCO.replace("remove localstorage ", ``)];
    localStorage.removeItem(rlsPlus);
    textlog = 'The local storage '+rlsPlus+' has been deleted' + '</br>';}
    if (inputCO == "remove font") {localStorage.removeItem('co-dev-font');
    textlog = 'The font has been deleted, please restart again' + '</br>';}
    // Search
    if (cmdW6 == "google") {let sePlus = [inputCO.replace("google ", ``)]; window.open("https://www.google.com/search?q="+ search(sePlus[0]));
    textlog = 'Google searched for the following results: '+ sePlus + '</br>';}
    if (cmdW4 == "bing") {let sePlus = [inputCO.replace("bing ", ``)]; window.open("https://www.bing.com/search?q="+ search(sePlus[0]));
    textlog = 'Bing searched for the following results: '+ sePlus + '</br>';}
    if (cmdW6 == "ecosia") {let sePlus = [inputCO.replace("ecosia ", ``)]; window.open("https://www.ecosia.org/search?method=index&q="+ search(sePlus[0]));
    textlog = 'Ecosia&#127795 searched for the following results: '+ sePlus + '</br>';}
    if (cmdW10 == "duckduckgo") {let sePlus = [inputCO.replace("duckduckgo ", ``)]; window.open("https://duckduckgo.com/?q="+ search(sePlus[0]));
    textlog = 'DuckDuckGo🦆 searched for the following results: '+ sePlus + '</br>';}
    if (cmdW6 == "amazon") {let sePlus = [inputCO.replace("amazon ", ``)]; window.open("https://www.amazon.com/s?k="+ search(sePlus[0]));
    textlog = 'Amazon searched for the following results: '+ sePlus + '</br>';}
    if (inputCO == "browser") {
    textlog = 'Search with these browsers:' + '</br>'+'---------------------------'+'</br>'+'• Google'+'</br>'+'• Bing'+'</br>'+'• Ecosia&#127795;'+'</br>'+'• DuckDuckGo🦆'+'</br>'+'• Amazon'+'</br>';}
    // SHA
    if (cmdW4 == "sha1") {
    var sha1Plus = inputCO1.substr(5, inputCO1.length); let outsha1 = sha1(sha1Plus); textlog = 'SHA1 Hash: '+'</br>' + outsha1 + '</br>'; navigator.clipboard.writeText(outsha1);
    if(sha1Plus == ""){textlog = error;}}
    if (cmdW6 == "sha224") {
    var sha224Plus = inputCO1.substr(7, inputCO1.length); let outsha224 = sha224(sha224Plus); textlog = 'SHA224 Hash: '+'</br>' + outsha224 + '</br>'; navigator.clipboard.writeText(outsha224);
    if(sha224Plus == ""){textlog = error;}}
    if (cmdW6 == "sha256") {
    var sha256Plus = inputCO1.substr(7, inputCO1.length); let outsha256 = sha256(sha256Plus); textlog = 'SHA256 Hash: '+'</br>' + outsha256 + '</br>'; navigator.clipboard.writeText(outsha256);
    if(sha256Plus == ""){textlog = error;}}
    if (cmdW6 == "sha384") {
    var sha384Plus = inputCO1.substr(7, inputCO1.length); let outsha384 = sha384(sha384Plus); textlog = 'SHA384 Hash: '+'</br>' + outsha384 + '</br>'; navigator.clipboard.writeText(outsha384);
    if(sha384Plus == ""){textlog = error;}}
    if (cmdW6 == "sha512") {
    var sha512Plus = inputCO1.substr(7, inputCO1.length); let outsha512 = sha512(sha512Plus); textlog = 'SHA512 Hash: '+'</br>' + outsha512 + '</br>'; navigator.clipboard.writeText(outsha512);
    if(sha512Plus == ""){textlog = error;}}
    // SHAP
    if (cmdW5 == "shap1") {
    var shap1Plus = inputCO1.substr(6, inputCO1.length); let outshap1 = shap1(shap1Plus); textlog = 'SHAP1 Hash: '+'</br>' + outshap1 + '</br>'; navigator.clipboard.writeText(outshap1);
    if(shap1Plus == ""){textlog = error;}}
    if (cmdW7 == "shap224") {
    var shap224Plus = inputCO1.substr(8, inputCO1.length); let outshap224 = shap224(shap224Plus); textlog = 'SHAP224 Hash: '+'</br>' + outshap224 + '</br>'; navigator.clipboard.writeText(outshap224);
    if(shap224Plus == ""){textlog = error;}}
    if (cmdW7 == "shap256") {
    var shap256Plus = inputCO1.substr(8, inputCO1.length); let outshap256 = shap256(shap256Plus); textlog = 'SHAP256 Hash: '+'</br>' + outshap256 + '</br>'; navigator.clipboard.writeText(outshap256);
    if(shap256Plus == ""){textlog = error;}}
    if (cmdW7 == "shap384") {
    var shap384Plus = inputCO1.substr(8, inputCO1.length); let outshap384 = shap384(shap384Plus); textlog = 'SHAP384 Hash: '+'</br>' + outshap384 + '</br>'; navigator.clipboard.writeText(outshap384);
    if(sha384pPlus == ""){textlog = error;}}
    if (cmdW7 == "shap512") {
    var shap512Plus = inputCO1.substr(8, inputCO1.length); let outshap512 = shap512(shap512Plus); textlog = 'SHAP512 Hash: '+'</br>' + outshap512 + '</br>'; navigator.clipboard.writeText(outshap512);
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

    if (inputCO == "date") {document.getElementById("co"+cmd_counter).innerHTML += moodyfulldate+'</br>'; window.scrollTo(0,document.body.scrollHeight);co_active = true;;}

    if (inputCO == "history") {
    for (let i=0; i < history.length; ++i) {
    document.getElementById("co"+cmd_counter).innerHTML += "• "+history[i]+'</br>';
    co_active = true;
    }}

    if (inputCO == "localstorage" || inputCO == "ls") {
    for (let i=0; i < localStorage.length; i++) {
    let storageKey = localStorage.key(i);
    document.getElementById("co"+cmd_counter).innerHTML += "• "+storageKey +' : '+ localStorage.getItem(storageKey) +'</br>';
    co_active = true;
    }}

    // The End of Command
    if (cmd_counter == 1) {} else {
    var cmd_befor = cmd_counter-1
    document.getElementById("co"+cmd_befor).style = ("padding: 0px;");
    }
    if(co_active == true) {
    document.getElementById("co"+cmd_counter).style = ("padding: 0px 0px 40px;");
    co_active = false
    } else {
    document.getElementById("co"+cmd_counter).style = ("padding: 20px;");}
    window.scrollTo(0,document.body.scrollHeight);
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

const search = function (sinput) {
    let sempty = [sinput.replace(/ /g, "+")];
  return sempty;
}

function rhash() {
var outputrh = sha1(outputpw1);
return outputrh;
}


const localstorage = function() {
    var ls_k = inputCO.indexOf("key=");
    var longone = inputCO1.substr(ls_k + 4, inputCO1.length);
    var ls_v = longone.indexOf("value=");
    var value = longone.substr(ls_v+6, longone.length);
    var ls_l = longone.indexOf(" ");
    var key = longone.substr(0, ls_l);
    console.log(ls_k);
    console.log(ls_v);
    console.log(value);
    console.log(key);
    console.log(longone);
    if (ls_k == -1 || ls_v == -1) {
    return error;
    } else {
    localStorage.setItem(key, value);
    return key;
    }
}