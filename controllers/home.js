const Item = require("../models/Item");

module.exports = {
    getIndex: async (req, res) => {
        try {
            const items = await Item.find();
            res.render("index.ejs", { items: items });
        } catch (err) {
            return res.status(500).send(err);
        }
    },
    createItem: async (req, res) => {
        const newItem = new Item({
            textInput: req.body.textInput,
            numInput: req.body.numInput
        });

        try {
            await newItem.save();
            console.log(newItem);
            res.redirect("/");
        } catch (err) {
            return res.status(500).send(err);
            res.redirect("/");
        }
    }
}