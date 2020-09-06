const glpi = require('./glpi');

async function Start(){
    let change = {};    
    change.data = await glpi.getChange(1881);
    //console.log(data.name);
    console.log(JSON.stringify(change));
}

Start();
