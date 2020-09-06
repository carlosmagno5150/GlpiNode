const config = require('./credentials/glpi.json');
const axios = require('axios');

var axioRequest = {
    get: async function (segment) {
        
        var aki = await axios.get(`${config.address}${segment}`, 
        {
            headers: {
                "Content-Type": "application/json",
                "App-Token": config.appToken,
                "Session-Token": config.sessionToken
            }
        });
        if (aki.status == 200){
            return aki.data;
        } else {
            console.log(`ERRO: ${aki.status}`);
        }        
    }
};
module.exports = axioRequest