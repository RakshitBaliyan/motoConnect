const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
require('./models/db');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const sponsorshipRoutes = require("./routes/sponsorshipRoutes");
const getSponsorshipsRoutes = require("./routes/getSponsorships"); 

const PORT = process.env.PORT || 8080;

app.get('/ping',(req, res)=>{
  res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use("/api/sponsorships", sponsorshipRoutes);
app.use("/api", getSponsorshipsRoutes);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})