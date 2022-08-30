const express = require('express');
const app = express();
const dbConnect = require('./utils/dbConnect');
const toolsRoutes = require('./routes/v1/tools.route');

dbConnect();

app.use('/api/v1/tools', toolsRoutes);

app.all('*', (req, res) => {
    res.send('No route found.');
});

app.listen(5000); 
