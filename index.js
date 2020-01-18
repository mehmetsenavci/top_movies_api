const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const movieRoute = require('./routes/movie');


const PORT = 3000;

// APP USES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/movie", movieRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the home directory');
})

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));