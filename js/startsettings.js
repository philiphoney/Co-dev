var viewbar = false;
startSettings();
function startSettings() {
let a_ls_settings = (localStorage["settings"]);
let ls_settings = JSON.parse(a_ls_settings);
if (ls_settings.viewBar == true) {
document.getElementById("content-log").style = ("");
if (ls_settings.viewBarPosition == "top" && ls_settings.viewBar == true) {
document.getElementById("viewbar-top").style = "display: flex;"+ "top: 0;";
document.getElementById("viewbar-bottom").style = "display: none;";
viewbar = false;
} else if (ls_settings.viewBarPosition == "bottom" && ls_settings.viewBar == true) {
document.getElementById("viewbar-bottom").style = "display: flex;"+ "bottom: 0;";
document.getElementById("viewbar-top").style = "display: none;";
viewbar = true;
}} else {
document.getElementById("viewbar-top").style = "display: none;";
document.getElementById("viewbar-bottom").style = "display: none;";
}}
