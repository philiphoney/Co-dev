var gh2_output;
const jsd = function (jsdinput) {
    var linkgh = jsdinput.substr(0, 15);
    var linknpm = jsdinput.substr(0, 3);
    var linkco = jsdinput.substr(0, 2);
    if (linkgh == "https://github.") {
    var gh0  = [jsdinput.replace("https://github.com/", ``)]; 
    var gh1  = [gh0[0].replace("/blob/", `@`)];
    var gh2 = "https://cdn.jsdelivr.net"+"/gh/"+gh1;
    gh2_output = gh2;
    } else {
    if (linkgh == "https://raw.git") {
    var gh0  = [jsdinput.replace("https://raw.githubusercontent.com/", ``)];
    //user
    var gh1 = gh0[0].indexOf("/");
    var user = gh0[0].substr(0, gh1+1);
    var gh2 = gh0[0].substr(gh1+1, gh0[0].length);
    // project
    var gh3 = gh2.indexOf("/");
    var pj = gh2.substr(0, gh3);
    var gh4 = gh2.substr(gh3, gh2.length);
    var gh5 = [gh4.replace("/", `@`)];
    var gh6 = "https://cdn.jsdelivr.net"+"/gh/"+user+pj+gh5;
    gh2_output = gh6;
    }else {
    // npm / gh / wp
    if (linknpm == "npm") {
    var npm0 = [jsdinput.replace("npm/", ``)];
    // package
    var npm1 = npm0[0].indexOf("/");
    var pk = npm0[0].substr(0, npm1);
    var npm2 = npm0[0].substr(npm1+1, npm0[0].length);
    var npm3 = "https://cdn.jsdelivr.net"+"/npm/"+pk+"@"+npm2;
    gh2_output = npm3;
    }else{
    if (linkco == "gh") {
    var gh0 = [jsdinput.replace("gh/", ``)];
    //user
    var gh1 = gh0[0].indexOf("/");
    var user = gh0[0].substr(0, gh1+1);
    var gh2 = gh0[0].substr(gh1+1, gh0[0].length);
    // project
    var gh3 = gh2.indexOf("/");
    var pj = gh2.substr(0, gh3);
    var gh4 = gh2.substr(gh3+1, gh2.length);
    var gh6 = "https://cdn.jsdelivr.net"+"/gh/"+user+pj+"@"+gh4;
    gh2_output = gh6;
    }else{
    if (linkco == "wp") {
    var wp0 = "https://cdn.jsdelivr.net"+"/"+jsdinput;
    gh2_output = wp0;
    } else {gh2_output = "error"}}}}
}
    return gh2_output;}
    function jsd_output() {
    return gh2_output;
}
