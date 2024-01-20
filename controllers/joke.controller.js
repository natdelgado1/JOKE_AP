const Broma = require("../models/joke.model");


module.exports.getBromas = async (req, res) => {
    try {
        console.log(req.query);
        const random = Boolean(req.query?.random);
        const limit = Number(req.query?.limit);
        const Bromas = await Broma.find().limit(limit);
        if (random) {
            const randValue = Math.round(Math.random() * (Bromas.length - 1));
            const randBroma = Bromas[randValue];
            res.status(200);
            res.json(randBroma);
            return;
        }
        res.status(200);
        res.json(Bromas);
    } catch (error) {
        res.status(500);//algo pasa en el servidor
        res.json(error);
    }
};

module.exports.getBromaById = async (req, res) => {
    try {
        const foundBroma = await Broma.findById(req.params.id);
        res.status(200);
        res.json(foundBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.getBromaRandom = async (req, res) => {
    try {
        const Bromas = await Broma.find();
        //Math .round lo que hace es redondear
        const randValue = Math.round(Math.random() * (Bromas.length - 1));
        const randBroma = Bromas[randValue];
        res.status(200);
        res.json(randBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.createBroma = async (req, res) => {
    try {
        const newBroma = await Broma.create(req.body);
        res.status(201);
        res.json(newBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.updateBroma = async (req, res) => {
    try {
        const updatedBroma = await Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updatedBroma);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.deleteBroma = async (req, res) => {
    try {
        const deletedBroma = await Broma.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedBroma);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};