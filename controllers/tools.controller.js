const limiter = require('../middlewares/limiter');

const tools = [
    { id: 1, name: 'Hammer' },
    { id: 2, name: 'Scissor' },
    { id: 3, name: 'Ting' },
];

module.exports.getAllTools = (req, res, next) => {
    // const { ip, query, params, body, headers } = req;
    // console.log(ip, query, params, body, headers);

    // res.send('got it');
    // res.download(__dirname + 'packaage.json');
    // res.json({ name: 'amit' });
    // res.redirect('/login');
    // res.send('getAllTools');
    const { limit, page } = req.query;
    console.log(limit, page);
    res.json(tools.slice(0, limit));
};

module.exports.saveTool = (req, res) => {
    console.log(req.body);
    tools.push(req.body);

    res.send(tools);
};

module.exports.getToolDetail = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const filter = { _id: id };
    const foundTool = tools.find((tool) => tool.id == id);
    // res.send(foundTool);
    res.status(200).send({
        success: true,
        message: 'Success',
        data: foundTool,
    });
    // res.status(500).send({
    //     success: false,
    //     error: 'Internal Server Error',
    // });
};

module.exports.updateToolDetail = (req, res) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id };

    const newData = tools.find((tool) => tool.id == Number(id));

    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
};

module.exports.deleteTool = (req, res) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id };

    const newData = tools.filter((tool) => tool.id != Number(id));

    newData.id = id;
    newData.name = req.body.name;

    res.send(newData);
};
