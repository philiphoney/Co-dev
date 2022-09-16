var twobox;
var threebox;
var fourbox;
var mr = 61;
var mr1 = 73;
var mr2 = 11;
var outputpw0 = "ERROR";
var outputpw1 = "ERROR";
loopstart(); function loopstart() {setTimeout (time_evend, 500); function time_evend() {start();loopstart();}}
function start() {
let characters0 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
let characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","§","$","%","&","/","(",")","=","?","*","!","?"]
let characters2 = ["§","$","%","&","/","(",")","=","?","*","!","?"]

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
