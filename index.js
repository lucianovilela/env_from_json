
const fs = require('fs');
let debug = false;
const log = (obj) => {
    if (debug)
        console.log("[env_from_json]", obj);
}

const parserString = (str) => {
    return str.replace(/[^a-zA-Z0-9_]/g, '_').trim();
}

const parserObject = (prefix, data, preferences = { uppercase: true }) => {
    let result = {};
    for (let key in data) {
        if (data[key] instanceof Object) {
            parserObject(`${prefix ? prefix + "_" : ""}${key}`, data[key], preferences);
        } else if (data[key] instanceof Array) {
            for (let i in data[key]) {
                parserObject(`${prefix ? prefix + "_" : ""}${i}`, data[key], preferences);
            }
        }
        else {
            let keyName = parserString(preferences.uppercase ? `${prefix ? prefix + "_" : ""}${key}`.toUpperCase() : `${prefix ? prefix + "_" : ""}${key}`);
            log(`${keyName}=${data[key]}`);
            process.env[keyName] = data[key];
        }
    }

}
const init = { uppercase: true, debug: false };
const config = (obj = undefined, preferences = { ...init }) => {
    debug = preferences.debug;
    let data = undefined;
    log(obj);
    if(!obj && fs.existsSync('./.env_from.json')) {
        data=require('./.env_from.json');
    }
    else if (obj instanceof Object) {
        data = obj;
    }
    else if (!fs.existsSync(obj)){
            log(`File not found: ${obj}`);
    }else{
        data = require(obj);
    }

    log(data);
    if(data)
        parserObject(undefined, data, { ...preferences, ...init });

}

module.exports = { config };

