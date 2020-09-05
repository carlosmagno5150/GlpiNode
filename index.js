const axios = require('axios');

const info = axios.get('https://cs.genialinvestimentos.com.br/apirest.php/Change/1700/', {
    headers: {
        "Content-Type": "application/json",
        "App-Token": "7by95O8T4q8U71CmDHRkpjbRd1nGuXwrUqMBhHho",
        "Session-Token": "nrdkebp8qmo051d225hk9tocf3"
    }
}).then((response)=>{
    if (response.status == 200){
        console.log(response.data);
    }    
})
.catch(function (error) {
    // handle error
    console.log(error);
});
