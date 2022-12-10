let json_settings = {}
Settings();
start();

function Settings() {
    json_settings = {
        title: "co-dev",
        description: "",

        theme: "",
        font: "",

        viewBar: false,
        viewBarPosition: "top",
        viewBarSpeedTest: false,

        autoCmd: false,
        allList: false,
        userInfo: false
    }
}

function start() {
    if (localStorage["settings"] != null) {}
    else {localStorage.setItem('settings', JSON.stringify(json_settings))}
}

const settings = function(s_value)  {
    let a_ls_settings = (localStorage["settings"]);
    let ls_settings = JSON.parse(a_ls_settings);

    if (s_value == "title") {
    return ls_settings.title;
    }

    if (s_value == "description") {
    return ls_settings.description;
    }

    if (s_value == "theme") {
    return ls_settings.theme;
    }

    if (s_value == "font") {
    return ls_settings.font;
    }

    if (s_value == "speedtest") {
    return ls_settings.viewBarSpeedTest;
    }

    if (s_value == "autocmd") {
    return ls_settings.autoCmd;
    }

    if (s_value == "alllist") {
    return ls_settings.allList;
    }

    if (s_value == "userinfo") {
    return ls_settings.userInfo;
    }

}

const editsettings = function(es_value, value) {
    let a_ls_settings = (localStorage["settings"]);
    let ls_settings = JSON.parse(a_ls_settings);

    if (es_value == "title") {
    ls_settings.title = value;
    }

    if (es_value == "description") {
    ls_settings.description = value;
    }

    if (es_value == "theme") {
    ls_settings.theme = value;
    }

    if (es_value == "font") {
    ls_settings.font = value;
    }

    //end
    localStorage.setItem('settings', JSON.stringify(ls_settings));
}