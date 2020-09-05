const config = require('./credentials/glpi.json');
const axioRequest = require('./axioRequest');

var glpi = {    
    getChange: async (id)=> {
        var data = await axioRequest.vai(`/Change/${id}/`, config);
        return data;
    }        
};

module.exports = glpi