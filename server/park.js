const express = require('express');

const app = express();


function isoldenough(age)
{
    if(age>=14)
        return true;
    else
    return false;
}
function isoldenoughmiddleware(req,res,next)
{
    const age=req.query.age;
 if(age>=14)
    next();
else{
    res.json({
        msg: " Sorry your age is not matching the criteria"
    })
}   
}
// app.use(isoldenoughmiddleware)
// work only below it functions

app.get("/ride1", isoldenoughmiddleware,function(req, res) {
    res.json({
        msg: "You are no ride 1 now"
    });

});
app.get("/ride2",isoldenoughmiddleware, function(req, res) {
   
     res.json({
         msg: "You are no ride 2 now"
     });
 
 });

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});
