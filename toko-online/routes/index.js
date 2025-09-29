var express = require("express");
var router = express.Router();
var products = require("../data/products.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Toko Online Sederhana",
    products: products,
    search: "", // supaya tidak undefined di EJS
  });
});

/* GET search page */
router.get("/search", function (req, res, next) {
  const q = req.query.q ? req.query.q.toLowerCase() : "";
  let filteredProducts = products;

  if (q) {
    filteredProducts = products.filter((p) => p.name.toLowerCase().includes(q));
  }

  res.render("index", {
    title: "Toko Online Sederhana",
    products: filteredProducts,
    search: q,
  });
});

module.exports = router;
