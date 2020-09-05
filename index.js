const glpi = require('./glpi');

class Change {
    constructor(id) {
      this.id = id;
    }    
}

async function Start(){
    let change = new Change(1750);
    change.data = await glpi.getChange(change.id);
    //console.log(data.name);
    console.log(JSON.stringify(change));
}

Start();
