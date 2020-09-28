const express = require('express');
const connectDb = require("./config/db");

const app = express();

//Connect Database
connectDb();

//Init Body Parser
app.use(express.json({ extended:false}));

app.get('/',(req, res)=> res.send('API Running'));


app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/transaction", require("./routes/api/transaction"));


//const PORT = process.env.PORT || 3001;
const PORT = 3001;
app.listen(PORT,()=> console.log(`server started on port ${PORT}`));