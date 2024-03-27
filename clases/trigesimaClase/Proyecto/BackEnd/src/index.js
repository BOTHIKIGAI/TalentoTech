const express = require('express');
const connectDB = require('../Config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api/customer', require('../Routes/routes'));

app.get('/', (req, res)=>{
    res.send('Hello world');
})

app.listen(3000, () => {
    console.log('server listening ✅');
})