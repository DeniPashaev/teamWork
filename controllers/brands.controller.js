const Brand = require("../models/Brand.model");
module.exports.brandController = {
    postBrand: async (req, res) => {
      try {
          const { title } = req.body
          const postBrand = await Brand.create({title})
          res.json(postBrand)
      } catch (error) {
          res.json(error)
      }
  },
  delBrand: async (req, res) => {
    try {
      await Brand.findByIdAndRemove(req.params.id);
      res.json("brand delete");
    } catch (err) {
      res.json(err);
    }
  },
  pathBrand: async (req, res) => {
    try {
      await Brand.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
      });
      res.json("brand path");
    } catch (err) {
      res.json(err);
    }
  },
  };