/*
 * [co-dev]{@link https://github.com/philiphoney/Co-dev/}
 *
 * @author Philip, Philiphoney
 * @license MIT
 * @copyright Philip, philiphoney 2022
 *
 */

var tag = "",
  app = "co-dev",
  con0 = 0,
  con1 = 1,
  xcon = false,
  cmd_counter = 0,
  inputCO,
  error,
  textlog,
  theme,
  font,
  live_input,
  view = false,
  c_his = -1,
  co_active = false,
  inputCO1 = "",
  settings_c = false,
  SpeedtestOn = false,
  counterspeed = 0,
  speedtestStop = false,
  speedtestisrun = false,
  speedtestStopTime = false,
  emcmd = false,
  cd_stop = false,
  folder = "",
  jfsError = false;

let doPlus;
let history = [];
let keyclipboard = [];
let outputSpeedTest0 = 0;
let outputSpeedTest1 = 0;

var textTXS =
  `  
<span style="color: lightblue">
'########:'##::::'##::'######::</br>
... ##..::. ##::'##::'##... ##:</br>
::: ##:::::. ##'##::: ##:::..::</br>
::: ##::::::. ###::::. ######::</br>
::: ##:::::: ## ##::::..... ##:</br>
::: ##::::: ##:. ##::'##::: ##:</br>
::: ##:::: ##:::. ##:. ######::</br>
:::..:::::..:::::..:::......:::</br>
</br> [v1.1.0] | command: tx or txs
</span>
` + "</br>";

setTimeout(time_evend, 1);
function time_evend() {
  if (settings("theme")[0] == "") {
  } else {
    var theme = settings("theme")[0];
    document.getElementById("body").style = theme + font;
  }

  if (settings("font") == "") {
  } else {
    var font0 = settings("font");
    var font = "--font: " + font0;
    document.getElementById("body").style = font + theme;
  }

  if (settings("autocmd")) {
    exclamationmark();
  }
}

function logPost() {
  if (speedtestisrun == true) {
    speedtestStop == null;
    document.getElementById("speedtest" + cmd_counter).innerHTML =
      '<span id="error">The test was aborted</span>';
    speedtestisrun = false;
  }

  if (settings_c == true) {
    var test = "settings-content" + cmd_counter;
    document.getElementById(test).innerHTML = "<span>#Closed</span>";
    settings_c = false;
  }

  if (settings("userinfo") == true) {
    tag = "user@co-dev ";
  }

  var Isfolder = null;
  if (folder == "") {
    Isfolder = false;
  } else {
    Isfolder = true;
  }

  document.getElementById("input").setAttribute("placeholder", "");
  if (emcmd == false) {
    inputCO1 = document.getElementById("input").value;
  }
  emcmd = false;
  inputCO = inputCO1.toLowerCase();
  textlog =
    '<span id="error">The command "' +
    inputCO1 +
    '" is either misspelled orcould not be found.</span></br>';
  error =
    '<span id="error">The command "' +
    inputCO1 +
    '" is either misspelled orcould not be found.</span></br>';
  if (inputCO == "") {
    error();
  }
  xcon = true;
  con0 += 1;
  con1 = keyclipboard.length + 1;
  c_his += 1;
  cmd_counter += 1;
  keyclipboard[con0] = inputCO1;
  history[c_his] = inputCO;

  // Commands+
  var cmdW1 = inputCO.substr(0, 1);
  var cmdW2 = inputCO.substr(0, 2);
  var cmdW3 = inputCO.substr(0, 3);
  var cmdW4 = inputCO.substr(0, 4);
  var cmdW5 = inputCO.substr(0, 5);
  var cmdW6 = inputCO.substr(0, 6);
  var cmdW7 = inputCO.substr(0, 7);
  var cmdW8 = inputCO.substr(0, 8);
  var cmdW9 = inputCO.substr(0, 9);
  var cmdW10 = inputCO.substr(0, 10);
  var cmdW12 = inputCO.substr(0, 12);
  var cmdW13 = inputCO.substr(0, 13);
  var cmdW16 = inputCO.substr(0, 16);
  var cmdW18 = inputCO.substr(0, 18);
  var cmdW19 = inputCO.substr(0, 19);

  // Settings test

  // Commands
  if (inputCO == "info") {
    textlog = "✨ Co dev Web Version [v16.0]" + "</br>";
  }
  if (inputCO == "cls" || inputCO == "clear") {
    document.getElementById("content-log").innerHTML = "";
    textlog = "";
    cmd_counter = 1;
  }
  if (inputCO == "exit") {
    window.close();
    textlog = '<span id="error">exit could not be executed</span>' + "</br>";
  }
  if (inputCO == "restart") {
    textlog = "</br>";
    window.location.href = "./";
  }
  if (inputCO == "help") {
    textlog = `
    • cls / clear         = Clear </br>
    • info                = Infos about Co Dev </br>
    • exit                = Close the Co Dev </br>
    • restart             = Restart the Window </br>
    • system              = Infos about my OS </br>
    • settings            = List the settings </br>
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
    • rpw (special characters [true]) or (without special character [false] or ([true / false] 4, 6, 8, 12, 16, 18, 24, 28, 32) = Create random password </br>
    • rhash = Create random hash </br>
    • sha(1, 224, 256, 384, 512) [text] = Convert text to a hash </br>
    • ls / localstorage   = List the Local Storage </br>
    • ls / localstorage add key=[key name] value=[value name] = Create a local storage </br>
    • ls / localstorage clear = All local storage has been deleted </br>
    • install theme [your theme code] = For more informations <a target="_blank" href="https://github.com/philiphoney/Co-dev/tree/main/theme">https://github.com/philiphoney/Co-dev/tree/main/theme</a> </br>
    • remove theme = Remove the theme </br>
    • remove ls / localstorage [key name] = The key and the value are deleted </br>
    • google, bing etc. [your searchterm] = Searchin the web </br>
    • browser = list all bowsers we provide </br>
    • date = Show for just all dates </br>
    • font = What font is supported </br>
    • font [your font] = Changes the font </br>
    • cdn [your link] = Create a CDN for your script with <a target="_blank" href="https://www.jsdelivr.com/">jsDeliv</a> </br>
    • echo = Spend something</br>
    • speedtest = Test the internet </br>
    • ! = Run exclamation mark </br>
    • ! add ["command"] = Create ! command </br>
    • ! ls = list exclamation mark </br>
    • nf [name the folder] = Create a folder </br>
    • cd [folder name] = Go to the folder ("../" so you close the folder)</br>
    `;
  }
  if (inputCO == "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      style = "dark";
    } else {
      style = "light";
    }
    textlog =
      `• Style: ` + style + `</br>` + `• OS: ` + system_info("ua") + `</br>`;
  }
  if (inputCO == "hosthref") {
    textlog = "Host name: " + window.location.href + "</br>";
  }
  if (inputCO == "hostname") {
    textlog = "Host name: " + window.location.hostname + "</br>";
  }
  if (inputCO == "webprotokoll") {
    textlog = "Webprotokoll: " + window.location.protocol + "</br>";
  }
  if (inputCO == "path") {
    textlog = "Pathname: " + window.location.pathname + "</br>";
  }
  if (inputCO == "port") {
    textlog = "Pathname: " + window.location.port + "</br>";
  }
  if (inputCO == "acn" || inputCO == "appcodename") {
    textlog = "App code name: " + navigator.appCodeName + "</br>";
  }
  if (inputCO == "an" || inputCO == "appname") {
    textlog = "App name: " + navigator.appName + "</br>";
  }
  if (inputCO == "ce" || inputCO == "cookieenabled") {
    textlog =
      'Cookies Enabled: <span id="evend">' +
      navigator.cookieEnabled +
      "</span></br>";
  }
  if (inputCO == "product") {
    textlog = "Product: " + navigator.product + "</br>";
  }
  if (inputCO == "av" || inputCO == "appversion") {
    textlog = "App Version: " + navigator.appVersion + "</br>";
  }
  if (inputCO == "ua" || inputCO == "useragent") {
    textlog = "User Agent: " + navigator.userAgent + "</br>";
  }
  if (inputCO == "pf" || inputCO == "platform") {
    textlog = "Plat form: " + navigator.platform + "</br>";
  }
  if (inputCO == "lang" || inputCO == "language") {
    textlog = "Language: " + navigator.language + "</br>";
  }
  if (inputCO == "on" || inputCO == "online") {
    textlog = 'Online: <span id="evend">' + navigator.onLine + "</span></br>";
  }
  if (inputCO == "java" || inputCO == "javaenabled") {
    textlog =
      'Java Enabled: <span id="evend"> ' +
      navigator.javaEnabled() +
      "</span></br>";
  }
  if (inputCO == "pdf") {
    if ("application/pdf" in navigator.mimeTypes) {
      const { description, suffixes } = navigator.mimeTypes["application/pdf"];
      var pdf = `Description: ${description}, Suffix: ${suffixes}`;
    } else {
      pdf = "error";
    }
    textlog = "Browser supports inline viewing of PDF files: " + pdf + "</br>";
  }
  if (inputCO == "sw" || inputCO == "serviceworker") {
    if ("serviceWorker" in navigator) {
      serviceWorker = "true";
    } else {
      serviceWorker = "false";
    }
    textlog =
      'Browser supports service workers: <span id="evend">' +
      serviceWorker +
      "</span></br>";
  }
  if (inputCO == "dnt" || inputCO == "donottrack") {
    var dnt = navigator.doNotTrack;
    if (dnt == 1) {
      dnt = true;
    } else {
      dnt = false;
    }
    textlog = 'Do Not Track: <span id="evend">' + dnt + "</span></br>";
  }
  if (cmdW4 == "open") {
    let openPlus = [inputCO.replace("open ", ``)];
    if (folder == "") {
      window.open(openPlus);
    } else {
      window.open("/files/#" + folder + "/" + openPlus);
    }
    textlog = "The file " + openPlus + " was opened" + "</br>";
  }
  if (inputCO == "gh" || inputCO == "github") {
    window.open("https://github.com/philiphoney/Co-dev");
    textlog = "" + "</br>";
  }
  if (cmdW3 == "rpw") {
    let pwPlus = [inputCO.replace("rpw ", ``)];
    f4 = pwPlus[0].search("false 4");
    t4 = pwPlus[0].search("true 4");
    f6 = pwPlus[0].search("false 6");
    t6 = pwPlus[0].search("true 6");
    f8 = pwPlus[0].search("false 8");
    t8 = pwPlus[0].search("true 8");
    f12 = pwPlus[0].search("false 12");
    t12 = pwPlus[0].search("true 12");
    f16 = pwPlus[0].search("false 16");
    t16 = pwPlus[0].search("true 16");
    f18 = pwPlus[0].search("false 18");
    t18 = pwPlus[0].search("true 18");
    f24 = pwPlus[0].search("false 24");
    t24 = pwPlus[0].search("true 24");
    t28 = pwPlus[0].search("true 28");
    f28 = pwPlus[0].search("false 28");
    t32 = pwPlus[0].search("true 32");
    f32 = pwPlus[0].search("false 32");
    fpw2();
    if (pwPlus == "false") {
      var rpwPlus = outputpw0;
    }
    if (pwPlus == "true") {
      var rpwPlus = outputpw1;
    }
    if (rpwPlus2 == true) {
      var rpwPlus = outputpw2;
    }
    navigator.clipboard.writeText(rpwPlus);
    textlog = "Random password:" + "</br>" + rpwPlus + "</br>";
    if (pwPlus == "true" || pwPlus == "false" || rpwPlus2 == true) {
    } else {
      textlog = error;
    }
  }
  if (inputCO == "date") {
    textlog = "";
  }
  if (inputCO == "rhash") {
    navigator.clipboard.writeText(rhash());
    textlog = "Random hash: " + "</br>" + rhash() + "</br>";
  }
  if (inputCO == "font") {
    textlog =
      `<span style="font-family: 'Roboto Mono', monospace;">• Roboto Mono</span>` +
      `</br>` +
      `<span style="font-family: 'Mukta', sans-serif;">• Mukta</span>` +
      `</br>` +
      `<span style="font-family: 'Inconsolata', monospace;">• Inconsolata</span>` +
      `</br>`;
  }
  if (cmdW5 == "font ") {
    let fontPlus = [inputCO.replace("font ", ``)];
    if (fontPlus == "roboto mono") {
      editsettings("font", "'Roboto Mono', monospace;");
    }
    if (fontPlus == "mukta") {
      editsettings("font", "'Mukta', sans-serif;");
    }
    if (fontPlus == "inconsolata") {
      editsettings("font", "'Inconsolata', monospace;");
    }
    textlog = "To see the writing you have to restart once" + "</br>";
  }
  if (inputCO == "history") {
    textlog = "history:" + "</br>" + "--------" + "</br>";
  }
  if (cmdW2 == "cd") {
    var folderls = inputCO1.replace("cd ", "");
    if (folderls == "../") {
      folder = "";
      textlog = " ";
    } else {
      if (localStorage["$" + folderls] != null && folder == "") {
        folder = folderls;
        var cd = true;
        textlog = " ";
      } else {
        textlog =
          '<span id="warning">⚠️ The folder ' +
          folderls +
          " could not be found</span>" +
          "</br>";
      }
    }
  }
  // Local Storage
  if (inputCO == "ls" || inputCO == "localstorage") {
    if (folder == "") {
      textlog =
        "Local Storage list:" + "</br>" + "-------------------" + "</br>";
    } else {
      textlog = " ";
    }
  }
  // New Folder
  if (cmdW2 == "nf") {
    var newfoldername = inputCO1.substr(3, inputCO1.length);
    localStorage.setItem("$" + newfoldername, JSON.stringify(newfolder()));
    textlog = "The folder " + newfoldername + " was created" + "</br>";
  }
  if (inputCO == "ls clear" || inputCO == "localstorage clear") {
    localStorage.clear();
    textlog = "All local storage has been deleted!" + "</br>";
  }
  if (cmdW18 == "localstorage clear") {
    localStorage.clear();
    textlog = "All local storage has been deleted !" + "</br>";
  }
  if (cmdW6 == "ls add") {
    localstorage();
    if (localstorage() == error) {
    } else {
      textlog =
        "The local storage " + localstorage() + " was created" + "</br>";
    }
  }
  if (cmdW16 == "localstorage add") {
    localstorage();
    if (localstorage() == error) {
    } else {
      textlog =
        "The local storage " + localstorage() + " was created" + "</br>";
    }
  }
  // ls storage
  if (inputCO == "ls -s") {
    textlog = storage();
  }
  if (cmdW13 == "install theme") {
    var themePlus = [inputCO.replace("install theme ", ``)];
    editsettings("theme", themePlus);
    textlog =
      "Theme has been installed. To load the theme you have to restart it" +
      "</br>";
  }
  if (cmdW5 == "echo ") {
    textlog = inputCO1.substr(5, inputCO1.length) + "</br>";
  }
  // Settings
  if (inputCO == "settings") {
    settings_c = true;
    textlog =
      "SETTINGS" +
      "</br>" +
      '<div id="settings-content' +
      cmd_counter +
      '">' +
      '<input type="eset" id="e-settings">' +
      "</br>" +
      '<a id="button" href="##" onclick="es_save()">[save]</a>' +
      '<a id="button" style="color: var(--color-error);" href="##" onclick="es_reset()">[reset]</a>' +
      '<div id="settings-loader"></div>' +
      "</br>" +
      "</div>" +
      "</br>";
  }
  if (inputCO == "settings reset") {
    es_reset();
  }
  if (inputCO == "speedtest") {
    if (settings("speedtest") == true) {
      textlog =
        '<span id="warning">⚠️ Speedtest is currently not possible</span>' +
        "</br>";
    } else {
      counterspeed = 0;
      speedtestStop = false;
      counterspeed += 5;
      speedtest();
      commandSpeedtest();
      speedtestisrun = true;
      textlog =
        '<span id="speedtest' + cmd_counter + '"' + "></span>" + "</br>";
    }
  }
  if (cmdW1 == "!") {
    if (localStorage["auto-command"] != null) {
    } else {
      localStorage.setItem("auto-command", []);
    }
    var thelogis = error;
    if (inputCO == "!") {
      if (localStorage["auto-command"] == "") {
        thelogis =
          '<span id="warning">⚠️ The exclamation mark is empty</span>' +
          "</br>";
      } else {
        exclamationmark();
        thelogis = "The exclamation mark is executed" + "</br>";
      }
      input.value = "!";
    }
    if (cmdW5 == "! add") {
      let cmd_ac = JSON.parse(inputCO.replace("! add ", ""));
      localStorage.setItem("auto-command", JSON.stringify(cmd_ac));
      thelogis = "The ! command have been changed to " + cmd_ac + "</br>";
    }
    if (cmdW4 == "! ls") {
      thelogis =
        "List the ! commands:" + "</br>" + "--------------------" + "</br>";
    }
    textlog = thelogis;
  }
  // txs app
  if (cmdW2 == "tx" || cmdW3 == "txs") {
    if (cmdW3 == "tx ") {
      var tx_cmd = inputCO.replace("tx ", "");
    }
    if (cmdW4 == "txs ") {
      var tx_cmd = inputCO.replace("txs ", "");
    }
    app = "txs";
    textlog = "Open the text file " + tx_cmd + " in txs" + "</br>";
    if (tx_cmd == undefined || tx_cmd == undefined || inputCO == "txs -v") {
      textlog =
        '<span id="warning">⚠️ Pease enter a file name</span>' + "</br>";
    } else {
      if (folder == "") {
        localStorage.setItem("txs", tx_cmd);
        txsIF();
      } else {
        txsInfolder(tx_cmd);
      }
    }
    if (jfsError == true) {
      jfsError = false;
      textlog =
        '<span id="warning">⚠️ Unfortunately, the file could not be opened with txs</span>' +
        "</br>";
    }
  }
  if (inputCO == "txs -v") {
    app = "txs";
    textlog = textTXS;
  }
  // JSD / CDN
  if (cmdW3 == "cdn") {
    var jsdPlus = inputCO1.substr(4, inputCO1.length);
    jsd(jsdPlus);
    if (jsd_output() == "error") {
      textlog =
        '<span id="warning">⚠️ The ' +
        jsdPlus +
        " file cannot be CDN converted</span>" +
        "</br>";
    } else {
      var dlink0 = inputCO1.substr(4, 5);
      var linktest0 = inputCO.substr(4, 3);
      var linktest1 = inputCO.substr(4, 2);
      if (dlink0 == "https") {
        d_http = [jsdPlus.replace("https://", ``)];
      }
      if (dlink0 == "http:") {
        d_http = [jsdPlus.replace("http://", ``)];
      }
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
      if (dlink0 == "https" || dlink0 == "http:" || d_server == "gh") {
        textlog =
          '<span id="d"><span style="background-color: var(--d-color-server-github);">' +
          d_server +
          "</span>" +
          '<span style="background-color: var(--d-color-folder);">' +
          folders +
          "</span></span>" +
          "</br>" +
          "Jsdelivr link:" +
          "</br>" +
          '<a href="' +
          jsd_output() +
          '" target="_blank">' +
          jsd_output() +
          "</a>" +
          "</br>";
        navigator.clipboard.writeText(jsd_output());
        +"</br>";
      }
      if (d_server == "npm") {
        textlog =
          '<span id="d"><span style="background-color: var(--d-color-server-npm);">' +
          d_server +
          "</span>" +
          '<span style="background-color: var(--d-color-folder);">' +
          folders +
          "</span></span>" +
          "</br>" +
          "Jsdelivr link:" +
          "</br>" +
          '<a href="' +
          jsd_output() +
          '" target="_blank">' +
          jsd_output() +
          "</a>" +
          "</br>";
        navigator.clipboard.writeText(jsd_output());
        +"</br>";
      }
      if (d_server == "wp") {
        textlog =
          '<span id="d"><span style="background-color: var(--d-color-server-wp);">' +
          d_server +
          "</span>" +
          '<span style="background-color: var(--d-color-folder);">' +
          folders +
          "</span></span>" +
          "</br>" +
          "Jsdelivr link:" +
          "</br>" +
          '<a href="' +
          jsd_output() +
          '" target="_blank">' +
          jsd_output() +
          "</a>" +
          "</br>";
        navigator.clipboard.writeText(jsd_output());
        +"</br>";
      }
    }
    if (jsdPlus == "cdn" || jsdPlus == "") {
      textlog = error;
    }
  }
  // Remove
  if (inputCO == "remove theme") {
    editsettings("theme", "");
    textlog =
      "The theme has been deleted to complete the change restart it" + "</br>";
  }
  if (cmdW9 == "remove ls") {
    var rlsPlus = inputCO1.substr(10, inputCO1.length);
    if (folder == "") {
      localStorage.removeItem(rlsPlus);
      textlog = "The local storage " + rlsPlus + " has been deleted" + "</br>";
    } else {
      textlog =
        '<span id="warning">⚠️ Unfortunately, the function cannot be executed at the moment</span>' +
        "</br>";
    }
  }
  if (cmdW19 == "remove localstorage") {
    var rlsPlus = inputCO1.substr(20, inputCO1.length);
    localStorage.removeItem(rlsPlus);
    textlog = "The local storage " + rlsPlus + " has been deleted" + "</br>";
  }
  if (inputCO == "remove font") {
    editsettings("font", "");
    textlog = "The font has been deleted, please restart again" + "</br>";
  }
  // Search
  if (cmdW6 == "google") {
    let sePlus = [inputCO.replace("google ", ``)];
    window.open("https://www.google.com/search?q=" + search(sePlus[0]));
    textlog = "Google searched for the following results: " + sePlus + "</br>";
  }
  if (cmdW4 == "bing") {
    let sePlus = [inputCO.replace("bing ", ``)];
    window.open("https://www.bing.com/search?q=" + search(sePlus[0]));
    textlog = "Bing searched for the following results: " + sePlus + "</br>";
  }
  if (cmdW6 == "ecosia") {
    let sePlus = [inputCO.replace("ecosia ", ``)];
    window.open(
      "https://www.ecosia.org/search?method=index&q=" + search(sePlus[0])
    );
    textlog =
      "Ecosia&#127795 searched for the following results: " + sePlus + "</br>";
  }
  if (cmdW10 == "duckduckgo") {
    let sePlus = [inputCO.replace("duckduckgo ", ``)];
    window.open("https://duckduckgo.com/?q=" + search(sePlus[0]));
    textlog =
      "DuckDuckGo🦆 searched for the following results: " + sePlus + "</br>";
  }
  if (cmdW6 == "amazon") {
    let sePlus = [inputCO.replace("amazon ", ``)];
    window.open("https://www.amazon.com/s?k=" + search(sePlus[0]));
    textlog = "Amazon searched for the following results: " + sePlus + "</br>";
  }
  if (inputCO == "browser") {
    textlog =
      "Searchwith these browsers:" +
      "</br>" +
      "---------------------------" +
      "</br>" +
      "• Google" +
      "</br>" +
      "• Bing" +
      "</br>" +
      "• Ecosia&#127795;" +
      "</br>" +
      "• DuckDuckGo🦆" +
      "</br>" +
      "• Amazon" +
      "</br>";
  }
  // SHA
  if (cmdW4 == "sha1") {
    var sha1Plus = inputCO1.substr(5, inputCO1.length);
    let outsha1 = sha1(sha1Plus);
    textlog = "SHA1 Hash: " + "</br>" + outsha1 + "</br>";
    navigator.clipboard.writeText(outsha1);
    if (sha1Plus == "") {
      textlog = error;
    }
  }
  if (cmdW6 == "sha224") {
    var sha224Plus = inputCO1.substr(7, inputCO1.length);
    let outsha224 = sha224(sha224Plus);
    textlog = "SHA224 Hash: " + "</br>" + outsha224 + "</br>";
    navigator.clipboard.writeText(outsha224);
    if (sha224Plus == "") {
      textlog = error;
    }
  }
  if (cmdW6 == "sha256") {
    var sha256Plus = inputCO1.substr(7, inputCO1.length);
    let outsha256 = sha256(sha256Plus);
    textlog = "SHA256 Hash: " + "</br>" + outsha256 + "</br>";
    navigator.clipboard.writeText(outsha256);
    if (sha256Plus == "") {
      textlog = error;
    }
  }
  if (cmdW6 == "sha384") {
    var sha384Plus = inputCO1.substr(7, inputCO1.length);
    let outsha384 = sha384(sha384Plus);
    textlog = "SHA384 Hash: " + "</br>" + outsha384 + "</br>";
    navigator.clipboard.writeText(outsha384);
    if (sha384Plus == "") {
      textlog = error;
    }
  }
  if (cmdW6 == "sha512") {
    var sha512Plus = inputCO1.substr(7, inputCO1.length);
    let outsha512 = sha512(sha512Plus);
    textlog = "SHA512 Hash: " + "</br>" + outsha512 + "</br>";
    navigator.clipboard.writeText(outsha512);
    if (sha512Plus == "") {
      textlog = error;
    }
  }
  // SHAP
  if (cmdW5 == "shap1") {
    var shap1Plus = inputCO1.substr(6, inputCO1.length);
    let outshap1 = shap1(shap1Plus);
    textlog = "SHAP1 Hash: " + "</br>" + outshap1 + "</br>";
    navigator.clipboard.writeText(outshap1);
    if (shap1Plus == "") {
      textlog = error;
    }
  }
  if (cmdW7 == "shap224") {
    var shap224Plus = inputCO1.substr(8, inputCO1.length);
    let outshap224 = shap224(shap224Plus);
    textlog = "SHAP224 Hash: " + "</br>" + outshap224 + "</br>";
    navigator.clipboard.writeText(outshap224);
    if (shap224Plus == "") {
      textlog = error;
    }
  }
  if (cmdW7 == "shap256") {
    var shap256Plus = inputCO1.substr(8, inputCO1.length);
    let outshap256 = shap256(shap256Plus);
    textlog = "SHAP256 Hash: " + "</br>" + outshap256 + "</br>";
    navigator.clipboard.writeText(outshap256);
    if (shap256Plus == "") {
      textlog = error;
    }
  }
  if (cmdW7 == "shap384") {
    var shap384Plus = inputCO1.substr(8, inputCO1.length);
    let outshap384 = shap384(shap384Plus);
    textlog = "SHAP384 Hash: " + "</br>" + outshap384 + "</br>";
    navigator.clipboard.writeText(outshap384);
    if (sha384pPlus == "") {
      textlog = error;
    }
  }
  if (cmdW7 == "shap512") {
    var shap512Plus = inputCO1.substr(8, inputCO1.length);
    let outshap512 = shap512(shap512Plus);
    textlog = "SHAP512 Hash: " + "</br>" + outshap512 + "</br>";
    navigator.clipboard.writeText(outshap512);
    if (shap512Plus == "") {
      textlog = error;
    }
  }

  // Time
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  if (folder == "") {
  } else {
    tag = "user@co-dev " + folder;
  }
  if (settings("userinfo") == true || cd == true || Isfolder == true) {
    tag += " $ ";
    cd = false;
    if (tag == "") {
      tag = "user@co-dev";
    }
  } else {
    tag = "";
  }

  var time = h + ":" + m + ":" + s;
  if (app == "co-dev") {
    document.getElementById("content-log").innerHTML +=
      `<log><span id="line">◜</span><span id="log-i"><span id="line">[</span>` +
      app +
      `<span id="line">] </span>` +
      time +
      `</span><br><span id="line">◟</span><span id="log-input">` +
      tag +
      `</span><span id="log-input">${input.value}</span><br><span id="text">` +
      textlog +
      `<span id="co` +
      cmd_counter +
      `"></span></span></log></br>`;
  }
  if (app == "txs") {
    document.getElementById("content-log").innerHTML +=
      `<log><span id="tx-line">◜</span><span id="tx-log-i"><span id="tx-line">[</span>` +
      app +
      `<span id="tx-line">] </span>` +
      time +
      `</span><br><span id="tx-line">◟</span><span id="tx-log-input">` +
      tag +
      `</span><span id="tx-log-input">${input.value}</span><br><span id="text">` +
      textlog +
      `<span id="co` +
      cmd_counter +
      `"></span></span></log></br>`;
  }
  document.getElementById("input").value = "";

  if (inputCO == "date") {
    document.getElementById("co" + cmd_counter).innerHTML +=
      moodyfulldate + "</br>";
    window.scrollTo(0, document.body.scrollHeight);
    co_active = true;
  }

  if (app == "txs") {
    app = "co-dev";
  }

  if (inputCO == "history") {
    for (let i = 0; i < history.length; ++i) {
      document.getElementById("co" + cmd_counter).innerHTML +=
        "• " + history[i] + "</br>";
      co_active = true;
    }
  }

  if (inputCO == "localstorage" || inputCO == "ls") {
    var foldercolor0 = "";
    var foldercolor1 = "";
    if (folder == "") {
      for (let i = 0; i < localStorage.length; i++) {
        var storageKey = localStorage.key(i);
        if (storageKey.substr(0, 1) == "$") {
          var foldercolor0 = "<span style='color: var(--color-folder);' >";
          var foldercolor1 = "</span>";
        }
        if (settings("alllist") == true) {
          document.getElementById("co" + cmd_counter).innerHTML +=
            "• " +
            foldercolor0 +
            storageKey +
            foldercolor1 +
            " : " +
            "<xmp>" +
            localStorage.getItem(storageKey) +
            "</xmp>";
        } else {
          document.getElementById("co" + cmd_counter).innerHTML +=
            "• " + foldercolor0 + storageKey + foldercolor1 + "</br>";
        }
        co_active = true;
        foldercolor0 = "";
        foldercolor1 = "";
      }
    } else {
      var data = JSON.parse(localStorage["$" + folder]);
      for (let i = 0; data.length > i; ++i) {
        var type = data[i].type;
        if (type == "img" || type == "txt" || type == "pdf") {
          if (type == "txt") {
            document.getElementById("co" + cmd_counter).innerHTML +=
              '<span class="ls">' +
              "• " +
              '<span class="material-symbols-outlined ls">description</span>' +
              data[i].name +
              "</span>";
          }
          if (type == "pdf") {
            document.getElementById("co" + cmd_counter).innerHTML +=
              '<span class="ls">' +
              "• " +
              '<span class="material-symbols-outlined ls">picture_as_pdf</span>' +
              '<a target="_blank" href="' +
              data[i].content +
              '">' +
              data[i].name +
              "</a></span>";
          }
          if (type == "img") {
            document.getElementById("co" + cmd_counter).innerHTML +=
              '<span class="ls">' +
              "• " +
              '<span class="material-symbols-outlined ls">image</span>' +
              '<a target="_blank" href="' +
              data[i].content +
              '">' +
              data[i].name +
              "</a></span>";
          }
        } else {
          document.getElementById("co" + cmd_counter).innerHTML +=
            '<span class="ls">' +
            "• " +
            '<span class="material-symbols-outlined ls">description</span>' +
            data[i].name +
            "</span>";
        }
      }
    }
  }

  if (inputCO == "settings") {
    let a_ls_settings = localStorage["settings"];
    document.getElementById("e-settings").value = a_ls_settings;
    co_active = true;
  }

  if (cmdW4 == "! ls") {
    if (localStorage["auto-command"] == "") {
    } else {
      let emc = JSON.parse(localStorage["auto-command"]);
      for (let i = 0; i < emc.length; ++i) {
        document.getElementById("co" + cmd_counter).innerHTML +=
          "• " + emc[i] + "</br>";
        co_active = true;
      }
    }
  }

  // The End of Command
  if (cmd_counter == 1) {
  } else {
    var cmd_befor = cmd_counter - 1;
    document.getElementById("co" + cmd_befor).style = "padding: 0px;";
  }
  if (co_active == true) {
    if (viewbar == true) {
      document.getElementById("co" + cmd_counter).style =
        "padding: 0px 0px 60px;";
    } else {
      document.getElementById("co" + cmd_counter).style =
        "padding: 0px 0px 40px;";
    }
    co_active = false;
  } else {
    if (viewbar == true) {
      document.getElementById("co" + cmd_counter).style = "padding: 40px;";
    } else {
      document.getElementById("co" + cmd_counter).style = "padding: 20px;";
    }
  }
  window.scrollTo(0, document.body.scrollHeight);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Keydown Event
document.addEventListener("keydown", (event) => {
  // Enter
  const keyCode = event.key;
  if (event.keyCode == 13) {
    logPost();
    document.getElementById("input").value = "";
  }

  // ↑
  if (event.keyCode == 38) {
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

  // ↓
  if (event.keyCode == 40) {
    con1 += 1;
    var keyoutput = keyclipboard[con1];
    document.getElementById("input").value = keyoutput;
    var keytest = document.getElementById("input").value;
    if (keytest == "undefined") {
      document.getElementById("input").value = "";
    }
  }
});

// searchspace => +
const search = function (sinput) {
  let sempty = [sinput.replace(/ /g, "+")];
  return sempty;
};

// random hash
function rhash() {
  var outputrh = sha1(outputpw1);
  return outputrh;
}

function es_save() {
  var settingsvalue = document.getElementById("e-settings").value;
  localStorage.setItem("settings", settingsvalue);
  window.location.href = "/";
}

// add Local Storage
const localstorage = function () {
  var ls_k = inputCO.indexOf("key=");
  var longone = inputCO1.substr(ls_k + 4, inputCO1.length);
  var ls_v = longone.indexOf("value=");
  var value = longone.substr(ls_v + 6, longone.length);
  var ls_l = longone.indexOf(" value=");
  var key = longone.substr(0, ls_l);
  if (ls_k == -1 || ls_v == -1) {
    return error;
  } else {
    localStorage.setItem(key, value);
    return key;
  }
};

// after the settings confirmation
function es_reset() {
  localStorage.removeItem("settings");
  window.location.href = "/";
}

function exclamationmark() {
  var emc = JSON.parse(localStorage["auto-command"]);
  for (let i = 0; i < emc.length; ++i) {
    setTimeout(time_evend, 100);
    function time_evend() {
      emcmd = true;
      inputCO1 = emc[i];
      input.value = emc[i];
      logPost();
    }
  }
}

function system_info(infovalue) {
  if (infovalue == "ua") {
    var ua = navigator.userAgent;
    var osinfo_s = ua.indexOf("(");
    var osinfo_start = ua.substr(osinfo_s, ua.length);
    var osinfo_end = osinfo_start.indexOf(")");
    var osinfo = ua.substr(osinfo_s + 1, osinfo_end - 1);
    return osinfo;
  }
}

if (SpeedtestOn == true) {
  speedtest();
  window.setInterval("loop()", 1000);
  function loop() {
    speedtest();
  }
}

function speedtest() {
  counterspeed += 25;
  const imageAddr =
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg";
  const downloadSize = 2707459; // this must match with the image above
  counterspeed += 10;
  let startTime, endTime;
  measureConnectionSpeed();
  async function measureConnectionSpeed() {
    startTime = new Date().getTime();
    const cacheBuster = "?nnn=" + startTime;
    counterspeed += 10;

    const download = new Image();
    download.src = imageAddr + cacheBuster;
    // this returns when the image is finished downloading
    counterspeed += 40;
    await download.decode();
    endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000;
    const bitsLoaded = downloadSize * 8;
    const speedBps = (bitsLoaded / duration).toFixed(2);
    const speedKbps = (speedBps / 1024).toFixed(2);
    const speedMbps = (speedKbps / 1024).toFixed(2);
    const speedMbps1 = speedKbps / 1024;
    outputSpeedTest1 = speedMbps;
    outputSpeedTest0 = speedMbps1;

    counterspeed += 10;
    speedtestStop = true;

    return outputSpeedTest1;
  }
}

function commandSpeedtest() {
  loopstart();
  function loopstart() {
    setTimeout(time_evend, 100);
    function time_evend() {
      if (speedtestStop == false) {
        document.getElementById("speedtest" + cmd_counter).innerHTML =
          counterspeed + "%";
        loopstart();
      } else {
        if (speedtestStopTime == true) {
          outputSpeedTest1 = '<span id="warning">⚠️ The time is up</span>';
          document.getElementById("speedtest" + cmd_counter).innerHTML =
            outputSpeedTest1;
          speedtestStopTime = false;
          speedtestisrun = false;
        } else {
          outputSpeedTest1 =
            "Download: " +
            outputSpeedTest1 +
            '<span style="font-size: 10px;">Mbps</span>';
          document.getElementById("speedtest" + cmd_counter).innerHTML =
            outputSpeedTest1;
          speedtestisrun = false;
          outputSpeedTest1 = "error";
        }
      }
    }
  }
  setTimeout(time_evend, 95700);
  function time_evend() {
    if (speedtestStop == false) {
      speedtestStopTime = true;
      speedtestisrun = false;
    }
  }
}

function txsIF() {
  window.onscroll = function () {
    window.scrollTo(0, document.body.scrollHeight);
  };
  document.getElementById("iframe").innerHTML +=
    '<iframe src="./txs/index.html" frameborder="0"></iframe>';
}

window.setInterval("loop()", 0);
function loop() {
  if (localStorage["txs"] == "close") {
    localStorage.removeItem("txs");
    quittxs();
  } else {
  }
}

function quittxs() {
  window.onscroll = function () {};
  window.scrollTo(0, document.body.scrollHeight);
  document.getElementById("iframe").innerHTML = "";
}

function newfolder() {
  return [
    {
      name: "text",
      type: "txt",
      content: "hello world",
    },

    {
      name: "this is a text",
      type: "txt",
      content: "hello tom",
    },

    {
      name: "image",
      type: "img",
      content:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];
}

function txsInfolder(file) {
  var passed = false;
  var folderJFS = JSON.parse(localStorage["$" + folder]);
  for (let i = 0; i < folderJFS.length; ++i) {
    if (folderJFS[i].name == file && folderJFS[i].type == "txt") {
      passed = true;
      localStorage.setItem("txs", "jfs" + i + "/" + "$" + folder);
      txsIF();
    }
  }
  if (!passed) {
    jfsError = true;
  }
}

function storage() {
  var tr = `<table><tr><th id="th-1">Name</th><th>Storage</th><th> %Used</th></tr>`;
  let table = "";
  var used = 0;
  var usedPercent = 0;
  var fullPercent = 0;
  for (let i = 0; i < localStorage.length; i++) {
    var storageKey = localStorage.key(i);
    var storageValue = localStorage[storageKey];
    used += storageValue.length;
  }
  usedPercent = used / 100;
  for (let i = 0; i < localStorage.length; i++) {
    var storageKey = localStorage.key(i);
    var storageValue = localStorage[storageKey];

    table +=
      `<tr>
    <td id="td-1">` +
      storageKey +
      `</td>
    <td>` +
      storaglist(storageValue.length) +
      `</td>
    <td>` +
      (storageValue.length / usedPercent).toFixed(2) +
      `%</td>
    </tr>`;
    fullPercent += storageValue.length / usedPercent;
  }

  var tableEnd =
    `<tr id="tr-end">
    <td></td>
    <td>` +
    storaglist(used) +
    `</td>
    <td>` +
    fullPercent.toFixed(0) +
    `%</td>
    </tr>
    </span>`;
  co_active = true;

  return tr + table + tableEnd + "</table>";
}

function storaglist(v) {
  var kb = (v / 1024).toFixed(2) * 1;
  var mb = (v / 1048576).toFixed(2) * 1;
  var gb = (v / 1073741824).toFixed(2) * 1;
  var tb = (v / 1099511627776).toFixed(0) * 1;
  var output = v + " Byte";

  if (v >= 1024) {
    output = kb + " KB";
  }

  if (v >= 1048576) {
    output = mb + " MB";
  }

  if (v >= 1073741824) {
    output = gb + " GB";
  }

  if (v >= 1099511627776) {
    output = tb + " TB";
  }

  return output;
}
