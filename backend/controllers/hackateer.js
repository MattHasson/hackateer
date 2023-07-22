const express = require("express");
const router = express.Router();
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const chatCompletion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [{role: "user", content: "Hello world"}],
// });

// console.log(chatCompletion.data.choices[0].message);
router.post("/problem-statement",(req,res)=>{
    console.log(req.body)
    const {statement,team_size,schedule} = req.body
    console.log(statement);
    res.json({
        "message":"It has been recieved"
    })
})

module.exports = router;