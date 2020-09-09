const cfg = require('./config');
const axios = require('axios');

var axioRequest = {
    getAuth: async function () {
        try {
            let config = cfg.load();
            var auth = await axios.get(`${config.address}/initSession`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "App-Token": config.appToken,
                        "Authorization": `user_token ${config.authorization}`
                    }
                });
            console.log('Refreshing token');
            config.sessionToken = auth.data.session_token;
            cfg.save(config);
        }
        catch (err) {
            console.log(error, err);
        }
    },
    get: async function (segment) {
        try {
            let config = cfg.load();

            var seg = segment;
            axios.interceptors.response.use(async response => { return response; },
                async error => {
                    if (error.response.status === 401) {
                        console.log("Token invalido, tente novamente para refresh");
                        await this.getAuth();                        
                        await this.get(seg);
                    }
                    return error;
                });

            var aki = await axios.get(`${config.address}${segment}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "App-Token": config.appToken,
                        "Session-Token": config.sessionToken
                    }
                });
            if (aki.status == 200) {
                return aki.data;
            } else {
                console.log(`ERRO: ${aki.status}`);
            }
        }
        catch (err) {
            //console.log(err);
        }
    }
};
module.exports = axioRequest