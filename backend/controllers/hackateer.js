const express = require("express");
const router = express.Router();

router.post("/problem-statement",(req,res)=>{
    console.log(req.body)
    const {statement} = req.body
    console.log(statement);
    res.json({
        "message":"It has been recieved"
    })
})

module.exports = router;