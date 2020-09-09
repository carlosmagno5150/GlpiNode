const path = require('path');
const fs = require('fs');

var config = {    
    save: (data) => {
        try {
            var aki = path.join(__dirname, 'credentials', 'config.json');
            console.log(`saving file to  ${aki}`);
            fs.writeFileSync(aki, JSON.stringify(data));
        }
        catch (err) {
            console.error(err)
        }
    },
    load: () => {
        var aki = path.join(__dirname, 'credentials', 'config.json');
        try {
            console.log(`reading file ${aki}`)
            let rawdata = fs.readFileSync(aki);
            let jsondata = JSON.parse(rawdata);
            // console.log(jsondata);
            return jsondata;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

}

module.exports = config