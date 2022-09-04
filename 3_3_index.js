const express = require('express');
const app = express();
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const toolsRoutes = require('./routes/v1/tools.route');
const viewCount = require('./middlewares/viewCount');
const { default: rateLimit } = require('express-rate-limit');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(express.json());
// app.use(express.text());
// app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(viewCount);

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// // Apply the rate limiting middleware to all requests
// app.use(limiter);

dbConnect();

app.use('/api/v1/tools', toolsRoutes);

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html');
    res.render('home.ejs', {
        id: 2,
        user: {
            name: 'test',
        },
    });
});

app.all('*', (req, res) => {
    res.send('No route found.');
});

app.use(errorHandler);

app.listen(5000);

process.on('unhandledRejection', (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});
