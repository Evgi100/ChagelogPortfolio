const express = require('express');
const app = express();

const port=process.env.PORT || 8080

app.use(express.static(__dirname+'/dist'))

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname+'/dist/index.html')
});

// This will make sure that refreshig will get us back to the correct page 

app.listen(port,()=>{
    console.log('I am on 8080 :)');
})