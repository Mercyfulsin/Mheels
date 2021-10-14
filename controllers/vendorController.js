const db = require("../models");
const Vendor = db.vendors;

// Defining methods for the vendorController

module.exports = {
  findAll: function (req, res) {
    Vendor
      .find(req.query)
      .sort({ storeName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(`Logging: ${JSON.stringify(req.params)}`);
    Vendor
      .findOne({ where: {ownerId: req.params.id}})
      .then(dbModel => {console.log('Vendor Reply: ' + JSON.stringify(dbModel)) ; res.send(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(`Received Request to create Vendor: ${JSON.stringify(req.body)}`);
    Vendor
      .create(req.body)
      .then(dbModel => {console.log(`created vendor: ${JSON.stringify(dbModel)}`) ; res.json(dbModel)})
      .catch(err => { console.log(err) ; res.status(422).json(err)});
  },
  update: function (req, res) {
    console.log("Updating Vendor: " + JSON.stringify(req.params) + " || " + JSON.stringify(req.body));
    Vendor
      .update()
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  remove: function (req, res) {
    Vendor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
