const axioRequest = require('./axioRequest');

var glpi = {
    getChange: async (id) => {
        try {
            var data = await axioRequest.get(`/Change/${id}/`);
            return data;
        }
        catch (err) {
            return err;
        }
    },
    getChangeValidations: async (id) => {
        try {
            var validations = await axioRequest.get(`Change/${id}/changevalidation`);
        }
        catch (err) {
            return err;
        }
    },
    getAuth: async () => {
        try {
            var auth = await axioRequest.getAuth();
            return auth;
        } catch (err) {
            return err;
        }
    }
};

module.exports = glpi