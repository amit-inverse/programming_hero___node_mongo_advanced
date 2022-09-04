const express = require('express');
const toolsController = require('../../controllers/tools.controller');
const limiter = require('../../middlewares/limiter');
const viewCount = require('../../middlewares/viewCount');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('tools found...');
// });

// router.post('/', (req, res) => {
//     res.send('tool added');
// });

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
    .get(toolsController.getAllTools)
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
    .post(toolsController.saveTool);

router.route('/:id').get(viewCount, limiter, toolsController.getToolDetail).patch(toolsController.updateToolDetail).delete(toolsController.deleteTool);

module.exports = router;
