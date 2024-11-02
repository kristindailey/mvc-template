const Item = require("../models/Item");

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id;
        console.log(id);
        try {
            const items = await Item.find();
            res.render("edit.ejs", { items: items, idItem: id });
        } catch (err) {
            return res.status(500).send(err);
        }
    }, 
    deleteItem: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Item.findByIdAndDelete(id);
            console.log(result);
            res.redirect("/");
        } catch (err) {
            return res.status(500).send(err);
        }
    },
    updateItem: async (req, res) => {
        const id = req.params.id;
        try {
            await Item.findByIdAndUpdate(id, {
                textInput: req.body.textInput,
                numInput: req.body.numInput
            });
            res.redirect("/");
        } catch (err) {
            return res.status(500).send(err);
            res.redirect("/");
        }
    }
}