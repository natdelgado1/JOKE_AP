
const express = require('express');
const app = express();
const port = 8000;

require('./config/joke.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const bromaRoutes = require('./routes/joke.routes');
app.use("/api/jokes", bromaRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));