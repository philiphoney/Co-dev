var gh2_output;
const jsd = function (jsdinput) {
    var linkgh = jsdinput.substr(0, 15);
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
    }else {gh2_output = "error"}}
    return gh2_output;}
    function jsd_output() {
    return gh2_output;
}