const express = require('express');
const bodyParser = require('body-parser');
const glpi = require('./glpi');
const app = express();
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

function page(page){
    return path.join(__dirname, 'public', `${page}`);
}

app.get('/31', async (req,res)=>{                
    res.sendFile(page('index.html'));            
});

app.get('/change/:Id', async (req, res) => {
    let changeId = req.params.Id;           
    let change = await glpi.getChange(changeId);
    res.send(change);        
});

app.listen(3000, err => {
    if (err){
    console.log("error", err);
    }
    console.log(`Listening...`);
});

// async function Start(){
//     let change = {};    
//     //change.data = await glpi.getChange(1881);
//     change.data = await glpi.getAuth();
//     //console.log(data.name);
//     console.log(JSON.stringify(change));
// }
//Start();
