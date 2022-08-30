const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tools found...');
});

router.post('/', (req, res) => {
    res.send('tool added');
});

router
    .route('/')
    /**
     * @api {get} /tools
     * @apiDescription Get all tools
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization User's access token
     *
     * @apiParams
     * @apiParams
     *
     * @apiSuccess {Object[]}
     *
     * @apiError {Unauthenticated 401}
     * @apiError {Forbidden 400}
     */
    .get((req, res) => {
        res.send('tools found...');
    })
    /**
     * @api {post} /tools
     * @apiDescription Get all tools
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization User's access token
     *
     * @apiParams
     * @apiParams
     *
     * @apiSuccess {Object[]}
     *
     * @apiError {Unauthenticated 401}
     * @apiError {Forbidden 400}
     */
    .post((req, res) => {
        res.send('tool added...');
    });

module.exports = router;
