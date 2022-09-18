var mr = 61;
var mr1 = 73;
var mr2 = 11;
var outputpw0 = "ERROR";
var outputpw1 = "ERROR";
var outputpw2 = "ERROR";
var pws = "error";
var pw2 = "error";
var rpwPlus2 = false;

let characters0 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
let characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","§","$","%","&","/","(",")","=","?","*","!","?"]
let characters2 = ["§","$","%","&","/","(",")","=","?","*","!","?"]

loopstart(); function loopstart() {setTimeout (time_evend, 500); function time_evend() {start();loopstart();}}
function start() {

    // normal no special character
    var ran0 = Math.floor(Math.random() * mr);
    var ran1 = Math.floor(Math.random() * mr);
    var ran2 = Math.floor(Math.random() * mr);
    var ran3 = Math.floor(Math.random() * mr);
    var ran4 = Math.floor(Math.random() * mr);
    var ran5 = Math.floor(Math.random() * mr);
    var ran6 = Math.floor(Math.random() * mr);
    var ran7 = Math.floor(Math.random() * mr);
    var ran8 = Math.floor(Math.random() * mr);
    var ran9 = Math.floor(Math.random() * mr);
    var ran10 = Math.floor(Math.random() * mr);
    var ran11 = Math.floor(Math.random() * mr);

    outputpw0 = characters0[ran0] + characters0[ran1] + characters0[ran2] + characters0[ran3] + "-" + characters0[ran4] + characters0[ran5] + characters0[ran6] + characters0 [ran7] + "-" + characters0[ran8] + characters0[ran9] + characters0[ran10] + characters0 [ran11];

    // normal with special character
    var ran0 = Math.floor(Math.random() * mr1);
    var ran1 = Math.floor(Math.random() * mr1);
    var ran2 = Math.floor(Math.random() * mr1);
    var ran03 = Math.floor(Math.random() * mr2);
    var ran4 = Math.floor(Math.random() * mr1);
    var ran5 = Math.floor(Math.random() * mr1);
    var ran6 = Math.floor(Math.random() * mr1);
    var ran7 = Math.floor(Math.random() * mr1);
    var ran8 = Math.floor(Math.random() * mr1);
    var ran9 = Math.floor(Math.random() * mr1);
    var ran10 = Math.floor(Math.random() * mr1);
    var ran11 = Math.floor(Math.random() * mr1);

    outputpw1 = characters1[ran0] + characters1[ran1] + characters1[ran2] + characters2[ran03] + "-" + characters1[ran4] + characters1[ran5] + characters1[ran6] + characters1[ran7] + "-" + characters1[ran8] + characters1[ran9] + characters1[ran10] + characters1[ran11];
}

 function fpw2() {
    rpwPlus2 = false;

    // custom no special character
    var ran0 = Math.floor(Math.random() * mr);
    var ran1 = Math.floor(Math.random() * mr);
    var ran2 = Math.floor(Math.random() * mr);
    var ran3 = Math.floor(Math.random() * mr);
    var ran4 = Math.floor(Math.random() * mr);
    var ran5 = Math.floor(Math.random() * mr);
    var ran6 = Math.floor(Math.random() * mr);
    var ran7 = Math.floor(Math.random() * mr);
    var ran8 = Math.floor(Math.random() * mr);
    var ran9 = Math.floor(Math.random() * mr);
    var ran10 = Math.floor(Math.random() * mr);
    var ran11 = Math.floor(Math.random() * mr);
    var ran12 = Math.floor(Math.random() * mr);
    var ran13 = Math.floor(Math.random() * mr);
    var ran14 = Math.floor(Math.random() * mr);
    var ran15 = Math.floor(Math.random() * mr);
    var ran16 = Math.floor(Math.random() * mr);
    var ran17 = Math.floor(Math.random() * mr);
    var ran18 = Math.floor(Math.random() * mr);
    var ran19 = Math.floor(Math.random() * mr);
    var ran20 = Math.floor(Math.random() * mr);
    var ran21 = Math.floor(Math.random() * mr);
    var ran22 = Math.floor(Math.random() * mr);
    var ran23 = Math.floor(Math.random() * mr);

   var fpw0 = characters0[ran0] + characters0[ran1] + characters0[ran2] + characters0[ran3] + characters0[ran4] + characters0[ran5] + characters0[ran6] + characters0 [ran7] + characters0[ran8] + characters0[ran9] + characters0[ran10] + characters0[ran11] + characters0[ran12] + characters0[ran13] + characters0[ran14] + characters0[ran15] + characters0[ran16] + characters0[ran17] + characters0[ran18] + characters0[ran19] + characters0[ran20] + characters0 [ran21] + characters0[ran22] + characters0[ran23];

   // custom with special character
   var ran0 = Math.floor(Math.random() * mr1);
   var ran1 = Math.floor(Math.random() * mr1);
   var ran2 = Math.floor(Math.random() * mr1);
   var ran03 = Math.floor(Math.random() * mr2);
   var ran4 = Math.floor(Math.random() * mr1);
   var ran5 = Math.floor(Math.random() * mr1);
   var ran6 = Math.floor(Math.random() * mr1);
   var ran7 = Math.floor(Math.random() * mr1);
   var ran8 = Math.floor(Math.random() * mr1);
   var ran9 = Math.floor(Math.random() * mr1);
   var ran10 = Math.floor(Math.random() * mr1);
   var ran11 = Math.floor(Math.random() * mr1);
   var ran12 = Math.floor(Math.random() * mr1);
   var ran13 = Math.floor(Math.random() * mr1);
   var ran14 = Math.floor(Math.random() * mr1);
   var ran15 = Math.floor(Math.random() * mr1);
   var ran16 = Math.floor(Math.random() * mr1);
   var ran17 = Math.floor(Math.random() * mr1);
   var ran18 = Math.floor(Math.random() * mr1);
   var ran19 = Math.floor(Math.random() * mr1);
   var ran20 = Math.floor(Math.random() * mr1);
   var ran21 = Math.floor(Math.random() * mr1);
   var ran22 = Math.floor(Math.random() * mr1);
   var ran23 = Math.floor(Math.random() * mr1);

   var fpw1 = characters1[ran0] + characters1[ran1] + characters1[ran2] + characters2[ran03] + characters1[ran4] + characters1[ran5] + characters1[ran6] + characters1[ran7] + characters1[ran8] + characters1[ran9] + characters1[ran10] + characters1[ran11] + characters1[ran12] + characters1[ran13] + characters1[ran14] + characters1[ran15] + characters1[ran16] + characters1[ran17] + characters1[ran18] + characters1[ran19] + characters1[ran20] + characters1[ran21] + characters1[ran22] + characters1[ran23];

    // length of password
    if (f4 == 0) {outputpw2 = fpw0.substr(0, 4); rpwPlus2 = true}
    if (t4 == 0) {outputpw2 = fpw1.substr(0, 4); rpwPlus2 = true}
    if (f6 == 0) {outputpw2 = fpw0.substr(0, 6); rpwPlus2 = true}
    if (t6 == 0) {outputpw2 = fpw1.substr(0, 6); rpwPlus2 = true}
    if (f8 == 0) {outputpw2 = fpw0.substr(0, 8); rpwPlus2 = true}
    if (t8 == 0) {outputpw2 = fpw1.substr(0, 8); rpwPlus2 = true}
    if (f12 == 0) {outputpw2 = fpw0.substr(0, 12); rpwPlus2 = true}
    if (t12 == 0) {outputpw2 = fpw1.substr(0, 12); rpwPlus2 = true}
    if (f16 == 0) {outputpw2 = fpw0.substr(0, 16); rpwPlus2 = true}
    if (t16 == 0) {outputpw2 = fpw1.substr(0, 16); rpwPlus2 = true}
    if (f18 == 0) {outputpw2 = fpw0.substr(0, 18); rpwPlus2 = true}
    if (t18 == 0) {outputpw2 = fpw1.substr(0, 18); rpwPlus2 = true}
    if (f24 == 0) {outputpw2 = fpw0.substr(0, 24); rpwPlus2 = true}
    if (t24 == 0) {outputpw2 = fpw1.substr(0, 24); rpwPlus2 = true}
}

