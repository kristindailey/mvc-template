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
        try {

        } catch (err) {

        }
    },
    updateItem: async (req, res) => {
        try {

        } catch (err) {

        }
    }
}