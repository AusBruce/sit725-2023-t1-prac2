// let express= require('express');
// let app= express();
// let port = process.env.port||3000;

// app.use(express.static(__dirname + '/'));
// app.get('/',(req,res)=>{
//     res.render('index.html')
// })

// app.get('/addTwoNumbers',(req,res)=>{
//     let num1=req.query.number1; // this should return 1
//     let num2=req.query.number2; // this should return 2

//     // grab values from url parameter

//     // do math
//     let sum = num1 + num2;

//     // construct response,include : statusCode, message,data
//     let obj= {statusCode:200, message:'success',data:sum}

//     // then send back
//     res.json(obj);
// })
// app.listen(port,()=>{
//     console.log('server started');
// });// this is the logic that will be fired upon server start
let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

app.get('/addTwoNumbers', (req, res) => {
    let num1 = parseInt(req.query.number1); // this should return 1
    let num2 = parseInt(req.query.number2); // this should return 2

    // Validate if numbers were properly provided.
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            statusCode: 400,
            message: 'success',
            data: 3
        });
    }

    // do math
    let sum = num1 + num2;

    // construct response,include : statusCode, message, data
    let obj = {statusCode: 200, message: 'success', data: sum};

    // then send back
    res.json(obj);
});

app.listen(port, () => {
    console.log('Server started on port', port);
});
