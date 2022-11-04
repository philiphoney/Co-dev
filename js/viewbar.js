startSettings();
viewTimeDate();
function viewTimeDate() {
        // Extract the data from get
        v_today = new Date();
        v_h = v_today.getHours();
        v_m = v_today.getMinutes();
        v_h = checkTime(v_h);
        v_m = checkTime(v_m);
        
        document.getElementById("vb-time").innerHTML = (v_h+":"+v_m);
        document.getElementById("b_vb-time").innerHTML = (v_h+":"+v_m);
    }
    window.setInterval('viewTimeDate()', 100);
    
    // Fill in the zero
    function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function startSettings() {
   document.getElementById("vb-title").innerHTML = app;
   document.getElementById("b_vb-title").innerHTML = app;

   var os = navigator.platform;
   var ossplit = os.split("");
   var ossplit1 = ossplit[0];
   var ossplit2 = ossplit[1];
   var ossplit3 = ossplit[2];
   var osoutput = (ossplit1 + ossplit2 + ossplit3);

   if (osoutput == "Win") {
    document.getElementById("icon").className = "icons8-windows-10";
    document.getElementById("b_icon").className = "icons8-windows-10";
       oswin = true;
   } else { oswin = false}

   if (osoutput == "Mac") {
    document.getElementById("icon").className = "icons8-mac-os";
    document.getElementById("b_icon").className = "icons8-mac-os";
       osmac = true;
   } else { osmac = false}

   if (osoutput == "Lin") {
    document.getElementById("icon").className = "fa fa-linux";
    document.getElementById("b_icon").className = "fa fa-linux";
    oslinux = true;
   } else {oslinux = false}

   if (osmac == false && oswin == false && oslinux == false) {
    document.getElementById("icon").className = "empty";
    document.getElementById("b_icon").className = "empty";
    document.getElementById("icon").innerHTML = " ";
    document.getElementById("b_icon").innerHTML = " ";
   }
}