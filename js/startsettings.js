var viewbar = false;
startSettings();
function startSettings() {
  let a_ls_settings = localStorage["settings"];
  let ls_settings = JSON.parse(a_ls_settings);
  if (ls_settings.viewBar == true) {
    document.getElementById("content-log").style = "";
    if (ls_settings.viewBarPosition == "top" && ls_settings.viewBar == true) {
      document.getElementById("viewbar-top").style =
        "display: flex;" + "top: 0;";
      document.getElementById("viewbar-bottom").style = "display: none;";
      document.getElementById("title").style = "display: block;" + "top: 0";
      viewbar = false;
    } else if (
      ls_settings.viewBarPosition == "bottom" &&
      ls_settings.viewBar == true
    ) {
      document.getElementById("viewbar-bottom").style =
        "display: flex;" + "bottom: 0;";
      document.getElementById("viewbar-top").style = "display: none;";
      document.getElementById("title").style = "display: block;" + "bottom: 0";
      viewbar = true;
    }
  } else {
    document.getElementById("viewbar-top").style = "display: none;";
    document.getElementById("viewbar-bottom").style = "display: none;";
    document.getElementById("title").style = "display: none;";
  }
  if (ls_settings.viewBarSpeedTest == true) {
    document.getElementById("vb-st").style = "display: block;";
    document.getElementById("b-st").style = "display: block;";
  }
  if (ls_settings.AutoCmd == true) {
    exclamationmark();
  }
}
