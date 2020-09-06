const axioRequest = require('./axioRequest');

var glpi = {    
    getChange: async (id)=> {
        var data = await axioRequest.get(`/Change/${id}/`);
        return data;
    },
    getChangeValidations: async(id)=>{
        var validations = await axioRequest.get(`Change/${id}/changevalidation`);
    }
};

module.exports = glpi